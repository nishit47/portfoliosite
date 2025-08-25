# Filmmaker Portfolio Website

A modern, responsive portfolio website designed specifically for filmmakers and visual artists. This website is optimized for showcasing video content and images with smooth animations and professional design.

## Features

### 🎬 Video-First Design

- Hero section with full-screen background video
- Portfolio grid with video thumbnails and hover effects
- Video modal for full-screen viewing
- Optimized video loading and performance

### 📱 Responsive & Modern

- Mobile-first responsive design
- Smooth scrolling and animations
- Interactive navigation with active states
- Performance optimized for all devices

### 🎨 Professional Presentation

- Clean, minimalist design focused on content
- Dark theme optimized for video content
- Typography and spacing designed for readability
- Professional contact form

### ⚡ Performance Optimized

- Lazy loading for videos and images
- Intersection Observer for scroll animations
- Throttled scroll events for smooth performance
- Preloading for critical resources

## File Structure

```
portfolio-site/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── assets/             # Media files directory
│   ├── hero-video.mp4  # Background video for hero section
│   ├── project1.mp4    # Portfolio video 1
│   ├── project2.mp4    # Portfolio video 2
│   ├── project3.mp4    # Portfolio video 3
│   ├── project1-thumb.jpg # Video thumbnail 1
│   ├── project2-thumb.jpg # Video thumbnail 2
│   ├── project3-thumb.jpg # Video thumbnail 3
│   └── profile.jpg     # Profile image for about section
└── README.md           # This file
```

## Setup Instructions

1. **Add Your Content**:

   - Replace "Your Name" with your actual name throughout the HTML
   - Add your profile image to `assets/profile.jpg`
   - Add your hero background video to `assets/hero-video.mp4`
   - Add your portfolio videos and thumbnails to the assets folder

2. **Customize Content**:

   - Update the about section with your bio and experience
   - Modify the skills/expertise tags to match your abilities
   - Add your contact information (email, phone, social links)
   - Update the project titles, descriptions, and categories

3. **Video Requirements**:

   - Hero video: Recommended 1920x1080 or higher, MP4 format
   - Portfolio videos: 16:9 aspect ratio, MP4 format
   - Thumbnails: JPG format, 800x450px recommended

4. **Optional Customizations**:
   - Modify colors in `styles.css` (search for `#ff6b6b` to change accent color)
   - Add more portfolio categories in the filter buttons
   - Customize animations and transitions

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Video Optimization**:

   - Compress videos for web (use tools like HandBrake)
   - Use appropriate bitrates (2-5 Mbps for 1080p)
   - Consider multiple formats for better browser support

2. **Image Optimization**:

   - Use WebP format when possible
   - Compress images without losing quality
   - Use appropriate dimensions for web display

3. **Loading Performance**:
   - The site uses lazy loading for better performance
   - Critical resources are preloaded
   - Videos start loading when they come into view

## Customization Guide

### Changing Colors

The accent color (`#ff6b6b`) can be changed throughout the CSS file. Search and replace with your preferred color.

### Adding New Portfolio Items

1. Duplicate a portfolio item in the HTML
2. Update the video source and thumbnail
3. Add appropriate data-category attribute
4. Update the title and description

### Modifying Sections

Each section is clearly marked in the HTML. You can:

- Reorder sections by moving the HTML blocks
- Add new sections following the same structure
- Remove sections you don't need

## Contact Form

The contact form currently shows an alert on submission. To make it functional:

1. Set up a backend service (Node.js, PHP, etc.)
2. Update the form submission handler in `script.js`
3. Add proper validation and error handling

## Future Enhancements

- Add a blog section for behind-the-scenes content
- Implement a proper CMS for easy content management
- Add social media integration
- Include client testimonials section
- Add animation timeline for project details
