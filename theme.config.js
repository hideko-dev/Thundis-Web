import Logo from "/components/logo";
import { useRouter } from 'next/router'
export default {
    useNextSeoProps() {
        return {
            titleTemplate: '%s - Thundis'
        }
    },
    logo: <Logo/>,
    project: {
        link: 'https://github.com/hideko-dev/Thundis',
    },
    chat: {
        link: 'https://discord.gg/bVQ4rYqX',
    },
    docsRepositoryBase: 'https://github.com/hideko-dev/Thundis',
    footer: {
        text: 'Thundis is operated by Hideko',
    },
}