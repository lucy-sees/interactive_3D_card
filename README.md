#  ✨Interactive 3D Profile Cards 🚀

A stunning collection of interactive 3D profile cards with cosmic design elements! Built with React, TypeScript, and modern animation libraries. Perfect for showcasing team members or portfolio items with style. 

<!-- ![Demo Preview](https://interactive-3-d-card.vercel.app/) -->

## 🌟 Features

- 🌀 **3D Card Flip Effect**: Credit card-style flip animation (front/back)
- ✨ **Glassmorphism Design**: Frosted glass effect with subtle gradients
- 🌌 **Cosmic Aesthetics**: Space-themed colors and particle effects
- 🕹️ **Interactive Tilt**: Parallax tilt on mouse movement
- 📱 **Responsive Design**: Works flawlessly on all screen sizes
- ⚡ **Smooth Animations**: Powered by Framer Motion
- 🔮 **Neon Accents**: Glowing text and borders

## 🛠️ Technologies Used

- ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)
- ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
- ![Framer Motion](https://img.shields.io/badge/-Framer_Motion-0055FF)
- ![React Tilt](https://img.shields.io/badge/-React_Tilt-000000)

## 🚀 Getting Started

### Prerequisites
- Node.js ≥16.x
- npm/yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/lucy-sees/interactive-3d-card.git
   ```
2. Install dependencies:
   ```bash
   cd interactive-3d-cards && npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 💻 Usage

```typescript
import GlassCard from '@/components/GlassCard';

<GlassCard
  image="/path/to/avatar.png"
  title="John Doe"
  position="Senior Developer"
  contact="john@company.com"
  expertise={['React', 'TypeScript', 'WebGL']}
  socials={{
    linkedin: "#",
    github: "#",
    email: "#"
  }}
/>
```

## 🌐 Live Demo

Check out the live demo hosted on Vercel:  
🔗 [Link to live demo](https://interactive-3-d-card.vercel.app/)

## 🎨 Customization

Modify the styling using these CSS variables in `GlassCard.module.css`:

```css
:root {
  --neon-yellow: #ffeb3b;
  --space-purple: #9c27b0;
  --cosmic-cyan: #00bcd4;
  --bg-gradient: linear-gradient(145deg, #1a1a3a 0%, #0a0a1a 100%);
}
```

## 🤝 Contributing

We 💖 contributions! Here's how to help:
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.


**Made with ❤️ by Lucy**  
⭐ Star this repo if you found it useful!  
🐞 Found an issue? [Report it here](https://github.com/lucy-sees/interactive-3d-cards/issues)