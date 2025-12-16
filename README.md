# Crypto Checkout Experience

A complete crypto checkout flow built with Next.js 16, TypeScript, and Tailwind CSS, demonstrating a production-ready user experience for converting crypto to cash.

## Features

### 1. Conversion Screen (`/convert`)
- **Tab Navigation**: Switch between "Crypto to cash", "Cash to crypto", and "Crypto to fiat loan"
- **Currency Selection**: Searchable dropdown with USDT variants (CELO, TON, BNB)
- **Wallet Integration**: Support for Metamask, Rainbow, WalletConnect, and other wallets
- **Real-time Amounts**: Input fields for pay and receive amounts
- **Connected Wallet Display**: Shows connected user with green badge

### 2. Recipient Details (`/recipient`)
- **Bank Selection**: Dropdown with Nigerian banks
- **Account Number Input**: With validation
- **Account Name Display**: Read-only field showing recipient name
- **Form Validation**: Ensures all fields are filled before proceeding

### 3. Send Confirmation (`/send`)
- **Crypto Address**: Purple-bordered box with copy functionality
- **Transaction Details**: Amount, network, and wallet information
- **Copy to Clipboard**: One-click copy for address and amount
- **Important Notice**: Warning about network requirements

### 4. Success Screen (`/success`)
- **NOVACRUST Branding**: Logo and brand colors
- **Large Success Icon**: Green rounded checkmark
- **Transaction ID**: With copy functionality and green badge
- **Status Message**: Clear confirmation that transaction is processing

## User Flow

\`\`\`
Home → Conversion → Recipient Details → Send Confirmation → Success
\`\`\`

## Technical Implementation

### State Management
- React hooks (`useState`) for form state and UI interactions
- Local state management without external libraries
- Form validation on recipient details page

### Styling
- Tailwind CSS for utility-first styling
- Custom color palette matching Figma designs
- Responsive design for mobile and desktop
- Smooth transitions and hover states

### Components
- Reusable dropdown components with search
- Copy-to-clipboard functionality
- Icon integration from Lucide React
- Form inputs with validation states

### Accessibility
- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus states on all interactive elements

## Design System

### Colors
- **Primary**: `#0f3d3e` (Teal 900) - Main buttons and branding
- **Accent**: `#fbbf24` (Yellow) - Active tabs and highlights
- **Success**: `#10b981` (Green) - Success states and connected badges
- **Info**: `#8b5cf6` (Purple) - Crypto address boxes

### Typography
- **Font**: Geist (Sans-serif)
- **Sizes**: Responsive text sizing from sm to 3xl
- **Weights**: Regular (400), Medium (500), Semibold (600), Bold (700)

### Spacing
- Consistent padding and margins using Tailwind's spacing scale
- Rounded corners: `rounded-xl` (12px), `rounded-2xl` (16px), `rounded-[28px]` (28px)
- Card-based layout with shadow-2xl for depth

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

\`\`\`
app/
├── page.tsx              # Home page with flow overview
├── convert/
│   └── page.tsx          # Conversion screen
├── recipient/
│   └── page.tsx          # Recipient details form
├── send/
│   └── page.tsx          # Send confirmation
├── success/
│   └── page.tsx          # Success screen
└── layout.tsx            # Root layout

public/
└── images/
    ├── metamask-icon.jpg
    ├── rainbow-icon.jpg
    └── walletconnect-icon.jpg
\`\`\`

## Future Enhancements

- Backend integration for real transactions
- Form validation with Zod or Yup
- Error states and loading animations
- Multi-step form with progress indicator
- Wallet connection via Web3 providers
- Real-time exchange rate updates
