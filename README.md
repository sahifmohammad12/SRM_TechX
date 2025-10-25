# SRM TechX - Educational Technology Platform

A modern, responsive educational technology platform built with HTML, CSS, and JavaScript, featuring course management, instructor profiles, and an admin panel.

## 🚀 Features

### 🎓 Course Management
- **Dynamic Course Display**: Courses are loaded dynamically from localStorage
- **Course Status Management**: Support for "Completed", "Started", and "Starting Soon" statuses
- **Course Details**: Name, description, start date, duration, level, price, and registration links
- **Admin Panel**: Add, edit, and manage courses through a secure admin interface

### 👨‍🏫 Expert Instructors
- **Instructor Profiles**: Showcase instructor photos, names, and designations
- **Social Media Integration**: LinkedIn, GitHub, and Instagram links
- **Interactive Design**: Hover effects with social media overlay
- **Responsive Layout**: Optimized for all device sizes

### 🏆 Achievements Section
- **Coming Soon Design**: Beautiful animated "Coming Soon" section
- **Progress Indicator**: Animated progress bar showing development status
- **Feature Preview**: Teases upcoming achievements features

### 🔐 Admin Panel
- **Secure Login**: Username: `SRM12`, Password: `Mussarat@12`
- **Course Management**: Add new courses with all details
- **Status Updates**: Change course status in real-time
- **Persistent Storage**: All changes saved to localStorage

### 📞 Contact Form
- **Formspree Integration**: Ready for form submission
- **Form Validation**: Client-side validation
- **Loading States**: Visual feedback during submission

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox, Grid, and animations
- **JavaScript (ES6+)**: Interactive functionality and course management
- **Font Awesome**: Icons throughout the website
- **Google Fonts**: Inter font family for typography
- **Formspree**: Contact form handling

## 📁 Project Structure

```
SRM TechX Website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── SRM PNG.png         # Logo image
├── My Photo.jpeg       # Instructor photo
├── Mussarat Photo.jpg  # Instructor photo
└── README.md           # Project documentation
```

## 🎨 Design Features

### Color Scheme
- **Primary Gradient**: `#7F72FE` to `#0704AB`
- **Secondary Colors**: Various shades of gray and white
- **Accent Colors**: Green for completed, orange for upcoming, blue for started

### Animations
- **Hover Effects**: Cards lift and scale on hover
- **Loading Animations**: Spinners and progress bars
- **Fade Effects**: Smooth transitions between states
- **Floating Elements**: Animated floating cards in hero section

### Responsive Design
- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: Tablet and desktop layouts
- **Flexible Grid**: CSS Grid and Flexbox layouts
- **Touch Friendly**: Large touch targets for mobile

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. The website will load with default courses and settings

### Admin Access
1. Click the "Admin" link in the navigation
2. Login with:
   - **Username**: `SRM12`
   - **Password**: `Mussarat@12`
3. Access course management features

## 📝 Usage Guide

### Adding Courses
1. Login to admin panel
2. Go to "Add Course" tab
3. Fill in course details:
   - Course Name
   - Description
   - Start Date
   - Duration (weeks)
   - Level (Beginner/Intermediate/Advanced)
   - Status (Completed/Started/Starting Soon)
   - Price (in ₹)
   - Registration Link
   - Icon selection
4. Click "Add Course"

### Managing Courses
1. Go to "Manage Courses" tab
2. View all existing courses
3. Change course status using dropdown
4. Delete courses if needed

### Contact Form Setup
1. Sign up for Formspree account
2. Create a new form
3. Replace `YOUR_FORM_ID` in `index.html` with your Formspree endpoint
4. Test form submission

## 🎯 Current Courses

### Tech HTML
- **Status**: Completed
- **Duration**: 3 weeks
- **Price**: Free
- **Start Date**: September 30, 2025

### Programming with C
- **Status**: Starting Soon
- **Duration**: Until students understand
- **Price**: Free
- **Start Date**: October 25, 2025
- **Registration**: [Google Form Link](https://forms.gle/6X8Z77YwKmVVE1VRA)

## 👥 Instructors

### Mohammad Sahif Beary
- **Designation**: Student Instructor
- **LinkedIn**: [mohammad-sahif-beary-53983230a](https://www.linkedin.com/in/mohammad-sahif-beary-53983230a)
- **GitHub**: [sahifmohammad12](https://github.com/sahifmohammad12)
- **Instagram**: [sahifmohammad12](https://www.instagram.com/sahifmohammad12)

### Mussarrat Kittur
- **Designation**: Student Instructor
- **LinkedIn**: [mussarrat-kittur-8b6aa3295](https://www.linkedin.com/in/mussarrat-kittur-8b6aa3295)
- **GitHub**: [Mussarrat-cod](https://github.com/Mussarrat-cod)
- **Instagram**: [mussarat.kittur](https://www.instagram.com/mussarat.kittur)

## 🔧 Customization

### Changing Colors
Update CSS variables in `styles.css`:
```css
:root {
    --gradient-primary: linear-gradient(135deg, #7F72FE 0%, #0704AB 100%);
    --color-primary: #7F72FE;
    --color-secondary: #0704AB;
}
```

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding CSS in `styles.css`
3. Add JavaScript functionality in `script.js` if needed

### Updating Content
- **Course Information**: Use admin panel or edit default courses in `script.js`
- **Instructor Details**: Update HTML in instructors section
- **Contact Information**: Update footer and contact section

## 📱 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 🐛 Troubleshooting

### Common Issues
1. **Courses not loading**: Check localStorage in browser dev tools
2. **Admin login not working**: Verify credentials are correct
3. **Form not submitting**: Check Formspree endpoint URL
4. **Images not displaying**: Ensure image files are in correct directory

### Debug Mode
Open browser developer tools (F12) to:
- Check console for JavaScript errors
- Inspect localStorage data
- Debug CSS issues
- Monitor network requests

## 🔒 Security Notes

- Admin credentials are currently hardcoded (not recommended for production)
- Consider implementing server-side authentication for production use
- Formspree handles form security and spam protection

## 📄 License

This project is created for educational purposes. Feel free to use and modify as needed.

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For support or questions:
- **Email**: srmtechx@gmail.com
- **Phone**: +91 9632913989
- **Instagram**: [srm.techx](https://www.instagram.com/srm.techx?igsh=dndqMzg3cGRhOXVi)

## 🎉 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Formspree for form handling
- All contributors and testers

---

**SRM TechX** - Empowering the next generation through cutting-edge educational technology.

*Built with ❤️ for students, by students.*
