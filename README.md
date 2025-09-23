# Win Every Argument

A progressive web application that teaches users how to build sound epistemology and master logical argumentation. Learn the difference between valid and sound arguments, identify fallacies, and develop unshakeable reasoning skills.

## 🚀 Features

- **Interactive Lessons**: Learn through engaging multiple-choice questions with instant feedback
- **Progressive Learning**: Start with free basics, advance to premium expert content  
- **Valid vs Sound**: Master the crucial difference between logical validity and soundness
- **Fallacy Detection**: Identify and counter common logical fallacies
- **PayPal Integration**: Secure subscription payments for premium content
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Dark Mode**: Professional UI with light/dark theme support

## 💰 Business Model

- **Free Tier**: Basic lessons on argumentation fundamentals
- **Premium Subscription**: 
  - Monthly: .99/month
  - Yearly: .99/year (17% savings)
  - Advanced techniques, personalized feedback, expert content

## 🛠 Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS 4
- **Payments**: PayPal React SDK
- **Deployment**: Vercel (recommended)
- **Future**: Supabase for user accounts and progress tracking

## 🏃‍♂️ Quick Start

1. **Clone the repository**:
   

2. **Install dependencies**:
   

3. **Set up environment variables**:
   
   Edit .env.local and add your PayPal Client ID.

4. **Run development server**:
   

5. **Open in browser**: http://localhost:3000

## 📦 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Environment Variables
- NEXT_PUBLIC_PAYPAL_CLIENT_ID: Your PayPal app client ID

## 💳 PayPal Setup

1. **Create PayPal Developer Account**: https://developer.paypal.com
2. **Create New App** in PayPal Dashboard
3. **Get Client ID** from your app settings
4. **Create Subscription Plans**:
   - Monthly: .99/month
   - Yearly: .99/year
5. **Update Plan IDs** in src/app/premium/page.tsx

## 📚 Content Structure

### Free Lessons
- Lesson 1: Valid vs Sound Arguments
- Lesson 2: Common Logical Fallacies

### Premium Lessons (Planned)
- Advanced Argumentation Techniques
- Debate Strategy Masterclasses  
- Logical Fallacy Detection
- Personalized Argument Analysis

## 🔮 Roadmap

### Phase 1 (MVP) ✅
- Landing page with clear value proposition
- Interactive lesson system
- PayPal subscription integration
- Responsive design

### Phase 2 (User Accounts)
- Supabase integration for user authentication
- Progress tracking and lesson completion
- User dashboard

### Phase 3 (Advanced Features)  
- AI-powered argument analysis
- Community features and discussions
- Mobile app (PWA)
- Advanced premium content

## 🎯 Revenue Projections

- **100 subscribers**: /month
- **500 subscribers**: ,995/month  
- **1,000 subscribers**: ,990/month
- **Target market**: Students, professionals, debate enthusiasts

## 📧 Support

For questions or support, contact: [your-email@domain.com]

## 📜 License

MIT License - see LICENSE file for details.

---

**Built with ❤️ for better argumentation and critical thinking**
