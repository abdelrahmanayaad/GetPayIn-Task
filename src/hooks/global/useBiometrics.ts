import { useCallback, useEffect, useMemo, useState } from 'react';
import ReactNativeBiometrics from 'react-native-biometrics';

interface AuthenticateResult {
  success: boolean;
  error?: string;
}

interface BiometricService {
  isSensorAvailable: () => Promise<boolean>;
  authenticate: (promptMessage?: string) => Promise<AuthenticateResult>;
}

interface UseBiometricsResult {
  isAvailable: boolean;
  isChecking: boolean;
  authenticate: (promptMessage?: string) => Promise<AuthenticateResult>;
  checkAvailability: () => Promise<void>;
}

const DEFAULT_PROMPT_MESSAGE = 'Authenticate to unlock';
const DEFAULT_CANCEL_TEXT = 'Use Password'; // the text in fingerprint popup USE PASSWORD

const useBiometrics = (): UseBiometricsResult => {
  const [isAvailable, setIsAvailable] = useState<boolean>(false);
  const [isChecking, setIsChecking] = useState<boolean>(true);

  const rnBiometrics = useMemo(() => new ReactNativeBiometrics(), []);

  const biometricService: BiometricService = useMemo(
    () => ({
      isSensorAvailable: async (): Promise<boolean> => {
        try {
          const { available } = await rnBiometrics.isSensorAvailable();
          return available;
        } catch (error) {
          console.error('Biometric availability check failed:', error);
          return false;
        }
      },
      authenticate: async (
        promptMessage: string = DEFAULT_PROMPT_MESSAGE,
      ): Promise<AuthenticateResult> => {
        try {
          const { success } = await rnBiometrics.simplePrompt({
            promptMessage,
            cancelButtonText: DEFAULT_CANCEL_TEXT,
          });
          return { success };
        } catch (error: any) {
          const errorMessage = error?.message || 'Authentication failed';
          console.error('Biometric authentication error:', errorMessage);
          return {
            success: false,
            error: errorMessage,
          };
        }
      },
    }),
    [rnBiometrics],
  );

  const checkAvailability = useCallback(async (): Promise<void> => {
    try {
      setIsChecking(true);
      const available = await biometricService.isSensorAvailable();
      setIsAvailable(available);
    } catch (error) {
      console.error('Failed to check biometric availability:', error);
      setIsAvailable(false);
    } finally {
      setIsChecking(false);
    }
  }, [biometricService]);

  useEffect(() => {
    checkAvailability();
  }, [checkAvailability]);

  const authenticate = useCallback(
    async (promptMessage?: string): Promise<AuthenticateResult> => {
      return biometricService.authenticate(promptMessage);
    },
    [biometricService],
  );

  return {
    isAvailable,
    isChecking,
    authenticate,
    checkAvailability,
  };
};

export default useBiometrics;
