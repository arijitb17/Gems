// utils/otp.ts
import { randomInt } from 'crypto';

// Mock function to generate OTP
export function generateOTP(): number {
    return randomInt(100000, 999999); // Generate a 6-digit OTP
}

// Mock function to send OTP (in a real application, use an SMS service)
export async function sendOTP(phoneNumber: string, otp: number): Promise<boolean> {
    console.log(`Sending OTP ${otp} to phone number ${phoneNumber}`);
    // Simulate sending OTP
    return true;
}

// Mock function to verify OTP (this should be more complex in a real application)
export function verifyOTP(userOtp: number, generatedOtp: number): boolean {
    return userOtp === generatedOtp;
}
