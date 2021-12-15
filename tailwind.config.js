module.exports = {
    content: ['./index.html'],
    theme: {
        colors: {
            transparent: 'transparent',
            orange: 'hsl(31, 77%, 52%)',
            cyan: {
                dark: 'hsl(184, 100%, 22%)',
                darker: 'hsl(179, 100%, 13%)'
            },
            white: 'hsla(0, 0%, 100%, 0.75)',
            gray: 'hsl(0, 0%, 95%)',
        },
        fontFamily: {
            lexend: ['Lexend Deca', 'sans-serif'],
            display: ['Big Shoulders Display', 'cursive'],
        },
        fontWeight: {
            regular: 400,
            bold: 700,
        },
        extend: {
            fontSize: {
                body: '15px',
            }
        },
    },
    plugins: [],
}
