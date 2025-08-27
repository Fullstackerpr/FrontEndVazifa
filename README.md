# Dashboard Application

A modern, responsive dashboard built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Sidebar Navigation**: 6 main navigation links
- **Tabbed Pages**: Each page contains 3 tabs with different content
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations
- **Interactive Elements**: Buttons, forms, tables, and more

## Navigation Structure

### 1. Dashboard 📊
- **Overview**: Key metrics, quick actions, and summary cards
- **Statistics**: Growth metrics and category breakdowns
- **Recent Activity**: Latest system activities and updates

### 2. Users 👥
- **User List**: Table view of all users with actions
- **User Roles**: Role definitions and permissions
- **User Activity**: Activity logs and tracking

### 3. Analytics 📈
- **Charts**: Data visualizations and charts
- **Key Metrics**: Important business KPIs and metrics
- **Trends**: Data trends and pattern analysis

### 4. Settings ⚙️
- **General**: Basic system configuration
- **Security**: Authentication and security settings
- **Notifications**: Notification preferences

### 5. Reports 📋
- **Generated Reports**: List of completed reports
- **Report Templates**: Available report templates
- **Scheduled Reports**: Automated report scheduling

### 6. Help ❓
- **FAQ**: Frequently asked questions
- **User Guides**: Documentation and tutorials
- **Contact Support**: Support channels and ticket system

## Technology Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Build Tool**: Turbopack
- **Development**: ESLint, PostCSS

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd homework31
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main dashboard page
└── components/
    ├── Sidebar.tsx          # Sidebar navigation component
    └── DashboardContent.tsx # Main content area with tabs
```

## Customization

### Adding New Pages

1. Add a new navigation item in `Sidebar.tsx`
2. Add corresponding page configuration in `DashboardContent.tsx`
3. Define tabs and content for the new page

### Styling

The application uses Tailwind CSS for styling. You can:
- Modify colors in the Tailwind config
- Add custom CSS classes in `globals.css`
- Update component-specific styles

### Content

Each tab's content is defined in the `pageConfigs` object in `DashboardContent.tsx`. You can:
- Add new tabs to existing pages
- Modify tab content and layout
- Add interactive elements and forms

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team or create an issue in the repository.
