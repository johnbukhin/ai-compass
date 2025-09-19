# Design Guidelines for AI SaaS Web App

## Design Approach: Reference-Based
**Primary Reference**: Notion, Linear, and modern SaaS platforms
**Rationale**: This is an experience-focused SaaS product where visual appeal drives conversion and user engagement. The AI helper concept requires intuitive, approachable design.

## Core Design Elements

### Color Palette
**Primary Colors**:
- Light mode: 222 84% 5% (deep charcoal)
- Dark mode: 222 84% 95% (off-white)

**Brand Accent**: 250 100% 65% (vibrant purple-blue)
**Secondary**: 210 40% 95% (light gray backgrounds)

**Gradients**: Subtle purple-to-blue gradients (250 100% 65% to 220 100% 70%) for hero backgrounds and CTA buttons.

### Typography
- **Primary**: Inter from Google Fonts
- **Accent**: JetBrains Mono for code/technical elements
- **Hierarchy**: text-5xl/4xl for heroes, text-xl/lg for headings, text-base for body

### Layout System
**Spacing Units**: Tailwind 4, 8, 12, 16 (p-4, m-8, gap-12, py-16)
**Containers**: max-w-6xl with px-4 for consistent content width

### Component Library

**Navigation**: Clean header with logo, nav links, and prominent "Get Started" CTA
**Cards**: Subtle shadows (shadow-lg), rounded corners (rounded-xl), white/dark backgrounds
**Buttons**: Primary (gradient fills), Secondary (outline with blur on images), Ghost (text-only)
**Forms**: Minimal borders, focus states with brand accent, generous padding
**AI Chat Interface**: Message bubbles with distinct user/AI styling, typing indicators

### Landing Page Structure (Maximum 4 Sections)
1. **Hero**: Large headline, subtext, dual CTAs, subtle gradient background
2. **Features**: 3-column grid showcasing AI helpers with icons
3. **Pricing**: Clean 2-3 tier comparison table
4. **Social Proof**: Simple testimonials or logos

### Dashboard Design
**Sidebar Navigation**: Collapsible with AI helper categories
**AI Helper Cards**: Preview cards with helper name, description, and usage stats
**Chat Interface**: Full-height layout with message history and input area

## Images
- **Hero Image**: Abstract AI/technology illustration as background (subtle, not overpowering)
- **Feature Icons**: Simple line icons for each AI helper type
- **No stock photos**: Focus on illustrations and iconography

## Key Principles
- **Minimal Animations**: Subtle hover states and page transitions only
- **Consistent Dark Mode**: Full implementation across all components
- **Progressive Disclosure**: Reveal complexity gradually through user flow
- **Trust Signals**: Security badges, clear pricing, transparent upsells

This design balances modern SaaS aesthetics with the approachability needed for AI tools, ensuring users feel confident throughout their journey from landing to active usage.