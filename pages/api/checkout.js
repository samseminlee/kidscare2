// pages/api/checkout.js
import Stripe from 'stripe';

// Stripe 인스턴스 생성
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { amount } = req.body;

    try {
      // Stripe Checkout 세션 생성
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'Childcare Service',
              },
              unit_amount: amount, // 25불 = 2500
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/cancel`,
      });

      // 세션 URL 반환
      res.status(200).json({ url: session.url });
    } catch (error) {
      console.error('Stripe session error:', error);
      res.status(500).json({ error: 'Stripe session creation failed' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
