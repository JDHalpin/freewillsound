/**
 * Main JavaScript
 * Recording Studio Website
 * 
 * Handles:
 * - Image preloading
 * - Parallax scroll effects (desktop only)
 */

(function() {
    'use strict';
    
    /**
     * Image Preload Handler
     * Ensures smooth fade-in animation by checking load state
     */
    function handleImagePreload() {
        const img = document.querySelector('.image-wrapper img');
        
        if (!img) {
            console.warn('Hero image not found');
            return;
        }
        
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.addEventListener('load', function() {
                img.style.opacity = '1';
            }, { once: true });
            
            // Error handling for failed image loads
            img.addEventListener('error', function() {
                console.error('Failed to load hero image');
            }, { once: true });
        }
    }
    
    /**
     * Parallax Scroll Effect
     * Adds subtle depth to hero image on desktop devices
     * Respects user's motion preferences
     */
    function initParallax() {
        // Only run on desktop
        if (window.innerWidth <= 768) {
            return;
        }
        
        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            return;
        }
        
        const parallax = document.querySelector('.image-wrapper');
        if (!parallax) {
            return;
        }
        
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            parallax.style.transform = `translateY(${scrolled * 0.3}px)`;
        }, { passive: true });
    }
    
    /**
     * Initialize on DOM ready
     */
    function init() {
        handleImagePreload();
        initParallax();
    }
    
    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();
