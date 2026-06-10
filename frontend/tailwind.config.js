export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "on-surface-variant": "#434655",
                "on-secondary-container": "#54647a",
                "inverse-on-surface": "#f0f0fb",
                "secondary": "#505f76",
                "surface-container-low": "#f3f3fe",
                "surface-container": "#ededf9",
                "secondary-container": "#d0e1fb",
                "background": "#faf8ff",
                "surface-container-highest": "#e1e2ed",
                "on-surface": "#191b23",
                "surface-container-lowest": "#ffffff",
                "surface": "#faf8ff",
                "outline": "#737686",
                "error": "#ba1a1a",
                "primary": "#004ac6",
                "surface-container-high": "#e7e7f3",
                "outline-variant": "#c3c6d7",
                "primary-container": "#2563eb",
                "surface-variant": "#e1e2ed",
                "on-secondary": "#ffffff",
                "on-primary": "#ffffff",
                "on-primary-container": "#eeefff",
            },

            borderRadius: {
                DEFAULT: "0.25rem",
                lg: "0.5rem",
                xl: "0.75rem",
                full: "9999px",
            },

            spacing: {
                base: "4px",
                lg: "24px",
                md: "16px",
                xl: "32px",
                xs: "4px",
                gutter: "20px",
                sm: "8px",
                "container-max": "1440px",
            },

            fontFamily: {
                "label-caps": ["Inter"],
                "data-tabular": ["Inter"],
                "body-sm": ["Inter"],
                "body-md": ["Inter"],
                "title-sm": ["Inter"],
                "headline-md": ["Inter"],
                "display-lg": ["Inter"],
                "display-lg-mobile": ["Inter"],
            },
            fontSize: {
                "label-caps": ["12px"],
                "data-tabular": ["14px"],
                "body-sm": ["13px"],
                "body-md": ["14px"],
                "title-sm": ["16px"],
                "headline-md": ["20px"],
                "display-lg": ["32px"],
                "display-lg-mobile": ["24px"]
            }
        },
    },
}