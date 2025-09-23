'use client';

import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { useState } from 'react';

const plans = [
  {
    id: 'monthly',
    name: 'Premium Monthly',
    price: '.99',
    interval: 'month',
    paypalPlanId: 'P-YOUR-PAYPAL-MONTHLY-PLAN-ID', // You'll get this from PayPal
    features: [
      'All free lessons plus advanced content',
      'Expert-level argumentation techniques',
      'Personalized feedback on your arguments',
      'Advanced logical fallacy detection',
      'Debate strategy masterclasses',
      'Priority email support',
    ]
  },
  {
    id: 'yearly',
    name: 'Premium Yearly',
    price: '.99',
    interval: 'year',
    savings: 'Save .89',
    paypalPlanId: 'P-YOUR-PAYPAL-YEARLY-PLAN-ID', // You'll get this from PayPal
    features: [
      'All monthly features included',
      '2 months free (17% savings)',
      'Exclusive yearly bonus content',
      'One-on-one coaching session',
      'Advanced argument analysis tools',
      'Lifetime access to new features',
    ]
  }
];

export default function PremiumPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubscription = (planId: string) => {
    setSelectedPlan(planId);
  };

  const createSubscription = (data: any, actions: any) => {
    const plan = plans.find(p => p.id === selectedPlan);
    return actions.subscription.create({
      plan_id: plan?.paypalPlanId,
    });
  };

  const onApprove = (data: any, actions: any) => {
    setLoading(true);
    console.log('Subscription approved:', data);
    
    // Here you would typically:
    // 1. Send subscription data to your backend
    // 2. Update user's premium status in database
    // 3. Redirect to success page
    
    alert('Subscription successful! Welcome to Premium!');
    setLoading(false);
  };

  return (
    <PayPalScriptProvider 
      options={{ 
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'test',
        vault: true,
        intent: 'subscription' 
      }}
    >
      <main className=\
