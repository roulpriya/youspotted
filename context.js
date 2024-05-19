module.exports = {
    firstName: 'Priyambada',
    lastName: 'Roul',
    title: 'Backend Developer',
    role: 'Software Engineer',
    company: 'Baton Systems',
    location: 'Chennai, India',
    email: 'priyaroul99@gmail.com',

    links: [
        {
            name: 'twitter',
            url: 'https://x.com/tarantism_priya',
            label: 'Follow on Twitter'
        },
        {
            name: 'linkedin',
            url: 'https://www.linkedin.com/in/priyambadaroul/',
            label: 'Connect on LinkedIn'
        },
        {
            name: 'github',
            url: 'https://github.com/roulpriya',
            label: 'View GitHub'
        },
        {
            name: 'medium',
            url: 'https://medium.com/@priyaroul99',
            label: 'Check out Medium'
        },
        {
            name: 'resume',
            url: 'assets/Priyambada_Roul_Resume.pdf',
            label: 'Download Resume'
        },
    ],
    tracking: {
        // If you want to add Google Analytics, just add the tracking ID here
        // googleAnalytics: 'G-8937NR279Q',
    },
    production: process.env.NODE_ENV === 'production',
}
