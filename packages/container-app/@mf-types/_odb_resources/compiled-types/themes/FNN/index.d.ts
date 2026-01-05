declare const _default: {
    light: {
        themeName: string;
        breakpoints: {
            values: {
                xs: number;
                sm: number;
                md: number;
                lg: number;
                xl: number;
                xxl: number;
            };
        };
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        backgroundColor: string;
                    };
                    font1: {
                        '@font-face': {
                            fontFamily: string;
                            fontWeight: number;
                            src: string;
                            ascentOverride: string;
                            descentOverride: string;
                        };
                    };
                    font2: {
                        '@font-face': {
                            src: string;
                            ascentOverride: string;
                            descentOverride: string;
                            fontFamily: string;
                            fontWeight: number;
                        };
                    };
                    font3: {
                        '@font-face': {
                            src: string;
                            ascentOverride: string;
                            descentOverride: string;
                            fontFamily: string;
                            fontWeight: number;
                        };
                    };
                    font4: {
                        '@font-face': {
                            fontFamily: string;
                            fontWeight: number;
                            src: string;
                            ascentOverride: string;
                            descentOverride: string;
                        };
                    };
                    font5: {
                        '@font-face': {
                            fontFamily: string;
                            fontWeight: number;
                            src: string;
                            ascentOverride: string;
                            descentOverride: string;
                        };
                    };
                    font6: {
                        '@font-face': {
                            fontFamily: string;
                            fontWeight: number;
                            src: string;
                            ascentOverride: string;
                            descentOverride: string;
                        };
                    };
                };
            };
            MuiInputLabel: {
                styleOverrides: {
                    asterisk: {
                        display: string;
                    };
                };
            };
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundColor: string;
                        borderWidth: number;
                        borderColor: string;
                        borderRadius: number;
                        borderStyle: string;
                    };
                };
            };
        };
        odb: {
            meta: {
                theme: {
                    name: string;
                };
                graphics: {
                    hasBodyBackground: boolean;
                };
            };
            components: {
                alert: {
                    type: string;
                };
                button: {
                    elevation: number;
                    font: {
                        base: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                        sm: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                        lg: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                        action: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                        helper: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                    };
                    radius: number;
                    primary: {
                        fill: string;
                        on: string;
                        gradient: string;
                        type: string;
                    };
                    secondary: {
                        fill: string;
                        on: string;
                        gradient: string;
                        type: string;
                    };
                    tertiary: {
                        fill: string;
                        on: string;
                        gradient: string;
                        type: string;
                    };
                    destructive: {
                        fill: string;
                        on: string;
                        gradient: string;
                        type: string;
                    };
                    action: {
                        fill: string;
                        on: string;
                        gradient: string;
                        type: string;
                        elevation: number;
                    };
                    helper: {
                        fill: string;
                        on: string;
                        gradient: string;
                        type: string;
                        elevation: number;
                    };
                };
                dialog: {
                    elevation: number;
                };
                element: {
                    borderColor: string;
                    borderWidth: number;
                    radius: number;
                };
                divider: {
                    line: string;
                };
                global: {
                    elevation: {
                        type: string;
                    };
                };
                input: {
                    type: string;
                };
                lockScreen: {
                    backgroundBlur: number;
                    fill: string;
                };
                link: {
                    color: string;
                    underline: string;
                };
                mainNavigation: {
                    elevation: number;
                    fill: string;
                    gradient: string;
                    on: string;
                    active: string;
                    borderWidth: number;
                };
                paper: {
                    borderWidth: number;
                    borderColor: string;
                    radius: number;
                    elevation: number;
                };
                paymentCard: {
                    elevation: number;
                };
                segmentTitle: {
                    color: string;
                    colorGradient: string;
                    font: {
                        fontFamily: string;
                        fontWeight: number;
                        fontSize: string;
                        lineHeight: string;
                        letterSpacing: string;
                        textTransform: string;
                    };
                };
                shortcut: {
                    radius: number;
                    borderWidth: number;
                    elevation: number;
                };
                splash: {
                    fill: string;
                };
                stickyFooter: {
                    visibility: boolean;
                    gradient: string;
                    backgroundBlur: number;
                };
                subtitle1: {
                    font: {
                        fontFamily: string;
                        fontWeight: number;
                        fontSize: string;
                        lineHeight: string;
                        letterSpacing: string;
                        textTransform: string;
                    };
                };
                subtitle2: {
                    font: {
                        fontFamily: string;
                        fontWeight: number;
                        fontSize: string;
                        lineHeight: string;
                        letterSpacing: string;
                        textTransform: string;
                    };
                };
            };
            graphics: {
                brand: {
                    set: string;
                };
                paymentCard: {
                    set: string;
                };
                icon: {
                    set: string;
                    standard: string;
                    neutral: string;
                    standardDisabled: string;
                    neutralDisabled: string;
                };
                illustrations: {
                    set: string;
                };
                schemeLogo: {
                    set: string;
                };
                meta: {
                    version: string;
                };
            };
            action: {
                active: {
                    color: string;
                    opacityDec: number;
                };
                disabled: {
                    fill: string;
                    on: string;
                    opacityDec: number;
                };
                focus: {
                    fill: string;
                    opacityDec: number;
                };
                hover: {
                    fill: string;
                    opacityDec: number;
                };
                selected: {
                    color: string;
                    opacityDec: number;
                };
            };
            background: {
                default: string;
                surface: string;
                element: string;
                elementGradient: string;
            };
            tabBar: {
                fill: string;
                on: string;
                active: string;
            };
            standard: {
                white: string;
                whiteSemi: string;
                black: string;
                blackSemi: string;
                main100: string;
                main300: string;
                main500: string;
                main700: string;
                main900: string;
                main500Semi: string;
                mainOn500: string;
                accent100: string;
                accent300: string;
                accent500: string;
                accent700: string;
                accent900: string;
                accent500Semi: string;
                accentOn500: string;
                grey50: string;
                grey100: string;
                grey200: string;
                grey300: string;
                grey400: string;
                grey500: string;
                grey600: string;
                grey700: string;
                grey800: string;
                grey900: string;
            };
            semantic: {
                information100: string;
                information300: string;
                information500: string;
                information700: string;
                information900: string;
                informationOn100: string;
                informationOn300: string;
                informationOn500: string;
                information500Semi: string;
                negative100: string;
                negative300: string;
                negative500: string;
                negative700: string;
                negative900: string;
                negativeOn100: string;
                negativeOn300: string;
                negativeOn500: string;
                negative500Semi: string;
                positive100: string;
                positive300: string;
                positive500: string;
                positive700: string;
                positive900: string;
                positiveOn100: string;
                positiveOn300: string;
                positiveOn500: string;
                positive500Semi: string;
                warning100: string;
                warning300: string;
                warning500: string;
                warning700: string;
                warning900: string;
                warningOn100: string;
                warningOn300: string;
                warningOn500: string;
                warning500Semi: string;
            };
            typography: {
                set: string;
                textPrimary: string;
                textSecondary: string;
                textDisabled: string;
                titlePrimary: string;
                titlePrimaryGradient: string;
                textPrimaryInverse: string;
                fontFamily: {
                    body: string;
                    title: string;
                };
                fontWeight: {
                    regular: number;
                    medium: number;
                    strong: number;
                };
                title: {
                    base: {
                        regular: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                    };
                    sm: {
                        regular: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                    };
                    xs: {
                        medium: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                    };
                };
                body: {
                    base: {
                        regular: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                        medium: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                    };
                    xl: {
                        medium: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                    };
                    lg: {
                        medium: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                    };
                    sm: {
                        medium: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                        regular: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                    };
                    xs: {
                        regular: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                    };
                    xxs: {
                        medium: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                    };
                };
                mono: {
                    base: {
                        regular: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                        medium: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                    };
                };
            };
        };
        palette: {
            mode: string;
            common: {
                white: string;
                black: string;
            };
            odbPrimary: {
                main: string;
                light: string;
                dark: string;
                contrastText: string;
            };
            odbSecondary: {
                main: string;
                light: string;
                dark: string;
                contrastText: string;
            };
            odbTertiary: {
                main: string;
                light: string;
                dark: string;
                contrastText: string;
            };
            odbDestructive: {
                main: string;
                light: string;
                dark: string;
                contrastText: string;
            };
            odbAction: {
                main: string;
                light: string;
                dark: string;
                contrastText: string;
            };
            odbHelper: {
                main: string;
                light: string;
                dark: string;
                contrastText: string;
            };
            primary: {
                main: string;
                light: string;
                dark: string;
                contrastText: string;
            };
            secondary: {
                main: string;
                light: string;
                dark: string;
                contrastText: string;
            };
            error: {
                main: string;
                light: string;
                dark: string;
                contrastText: string;
            };
            warning: {
                main: string;
                light: string;
                dark: string;
                contrastText: string;
            };
            info: {
                main: string;
                light: string;
                dark: string;
                contrastText: string;
            };
            success: {
                main: string;
                light: string;
                dark: string;
                contrastText: string;
            };
            grey: {
                '50': string;
                '100': string;
                '200': string;
                '300': string;
                '400': string;
                '500': string;
                '600': string;
                '700': string;
                '800': string;
                '900': string;
                A100: string;
                A200: string;
                A400: string;
                A700: string;
            };
            contrastThreshold: number;
            tonalOffset: number;
            background: {
                paper: string;
                default: string;
            };
            text: {
                primary: string;
                secondary: string;
                disabled: string;
            };
            divider: string;
            action: {
                active: string;
                hover: string;
                hoverOpacity: number;
                selected: string;
                selectedOpacity: number;
                disabled: string;
                disabledBackground: string;
                disabledOpacity: number;
                focus: string;
                focusOpacity: number;
                activatedOpacity: number;
            };
        };
        typography: {
            fontFamily: string;
            sizes: {
                xs: string;
                s: string;
                m: string;
                l: string;
                xl: string;
            };
            htmlFontSize: number;
            fontSize: number;
            fontWeightRegular: number;
            fontWeightMedium: number;
            fontWeightBold: number;
            h1: {
                fontFamily: string;
                fontWeight: number;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            h2: {
                fontFamily: string;
                fontWeight: number;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            h3: {
                fontFamily: string;
                fontWeight: number;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            h4: {
                fontFamily: string;
                fontWeight: number;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            h5: {
                fontFamily: string;
                fontWeight: number;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            h6: {
                fontFamily: string;
                fontWeight: number;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            subtitle1: {
                fontFamily: string;
                fontWeight: number;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
                textTransform: string;
            };
            subtitle2: {
                fontFamily: string;
                fontWeight: number;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
                textTransform: string;
            };
            body1: {
                fontFamily: string;
                fontWeight: number;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            body2: {
                fontFamily: string;
                fontWeight: number;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            mono1: {
                fontFamily: string;
                fontWeight: number;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            mono2: {
                fontFamily: string;
                fontWeight: number;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            button: {
                fontFamily: string;
                fontWeight: number;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
                textTransform: string;
            };
            caption: {
                fontFamily: string;
                fontWeight: number;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            overline: {
                fontFamily: string;
                fontWeight: number;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
                textTransform: string;
            };
            fontWeightLight: number;
        };
    };
    dark: {
        themeName: string;
        breakpoints: {
            values: {
                xs: number;
                sm: number;
                md: number;
                lg: number;
                xl: number;
                xxl: number;
            };
        };
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        backgroundColor: string;
                    };
                    font1: {
                        '@font-face': {
                            fontFamily: string;
                            fontWeight: number;
                            src: string;
                            ascentOverride: string;
                            descentOverride: string;
                        };
                    };
                    font2: {
                        '@font-face': {
                            src: string;
                            ascentOverride: string;
                            descentOverride: string;
                            fontFamily: string;
                            fontWeight: number;
                        };
                    };
                    font3: {
                        '@font-face': {
                            src: string;
                            ascentOverride: string;
                            descentOverride: string;
                            fontFamily: string;
                            fontWeight: number;
                        };
                    };
                    font4: {
                        '@font-face': {
                            fontFamily: string;
                            fontWeight: number;
                            src: string;
                            ascentOverride: string;
                            descentOverride: string;
                        };
                    };
                    font5: {
                        '@font-face': {
                            fontFamily: string;
                            fontWeight: number;
                            src: string;
                            ascentOverride: string;
                            descentOverride: string;
                        };
                    };
                    font6: {
                        '@font-face': {
                            fontFamily: string;
                            fontWeight: number;
                            src: string;
                            ascentOverride: string;
                            descentOverride: string;
                        };
                    };
                };
            };
            MuiInputLabel: {
                styleOverrides: {
                    asterisk: {
                        display: string;
                    };
                };
            };
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundColor: string;
                        borderWidth: number;
                        borderColor: string;
                        borderRadius: number;
                        borderStyle: string;
                    };
                };
            };
        };
        odb: {
            meta: {
                theme: {
                    name: string;
                };
                graphics: {
                    hasBodyBackground: boolean;
                };
            };
            components: {
                alert: {
                    type: string;
                };
                button: {
                    elevation: number;
                    font: {
                        base: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                        sm: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                        lg: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                        action: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                        helper: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                    };
                    radius: number;
                    primary: {
                        fill: string;
                        on: string;
                        gradient: string;
                        type: string;
                    };
                    secondary: {
                        fill: string;
                        on: string;
                        gradient: string;
                        type: string;
                    };
                    tertiary: {
                        fill: string;
                        on: string;
                        gradient: string;
                        type: string;
                    };
                    destructive: {
                        fill: string;
                        on: string;
                        gradient: string;
                        type: string;
                    };
                    action: {
                        fill: string;
                        on: string;
                        gradient: string;
                        type: string;
                        elevation: number;
                    };
                    helper: {
                        fill: string;
                        on: string;
                        gradient: string;
                        type: string;
                        elevation: number;
                    };
                };
                element: {
                    borderColor: string;
                    borderWidth: number;
                    radius: number;
                };
                dialog: {
                    elevation: number;
                };
                divider: {
                    line: string;
                };
                global: {
                    elevation: {
                        type: string;
                    };
                };
                input: {
                    type: string;
                };
                link: {
                    color: string;
                    underline: string;
                };
                lockScreen: {
                    backgroundBlur: number;
                    fill: string;
                };
                mainNavigation: {
                    elevation: number;
                    fill: string;
                    gradient: string;
                    on: string;
                    active: string;
                    borderWidth: number;
                };
                paper: {
                    borderWidth: number;
                    borderColor: string;
                    radius: number;
                    elevation: number;
                };
                paymentCard: {
                    elevation: number;
                };
                segmentTitle: {
                    color: string;
                    colorGradient: string;
                    font: {
                        fontFamily: string;
                        fontWeight: number;
                        fontSize: string;
                        lineHeight: string;
                        letterSpacing: string;
                        textTransform: string;
                    };
                };
                shortcut: {
                    radius: number;
                    borderWidth: number;
                    elevation: number;
                };
                splash: {
                    fill: string;
                };
                stickyFooter: {
                    visibility: boolean;
                    gradient: string;
                    backgroundBlur: number;
                };
                subtitle1: {
                    font: {
                        fontFamily: string;
                        fontWeight: number;
                        fontSize: string;
                        lineHeight: string;
                        letterSpacing: string;
                        textTransform: string;
                    };
                };
                subtitle2: {
                    font: {
                        fontFamily: string;
                        fontWeight: number;
                        fontSize: string;
                        lineHeight: string;
                        letterSpacing: string;
                        textTransform: string;
                    };
                };
            };
            graphics: {
                brand: {
                    set: string;
                };
                paymentCard: {
                    set: string;
                };
                icon: {
                    set: string;
                    standard: string;
                    neutral: string;
                    standardDisabled: string;
                    neutralDisabled: string;
                };
                illustrations: {
                    set: string;
                };
                schemeLogo: {
                    set: string;
                };
                meta: {
                    version: string;
                };
            };
            action: {
                active: {
                    color: string;
                    opacityDec: number;
                };
                disabled: {
                    fill: string;
                    on: string;
                    opacityDec: number;
                };
                focus: {
                    fill: string;
                    opacityDec: number;
                };
                hover: {
                    fill: string;
                    opacityDec: number;
                };
                selected: {
                    color: string;
                    opacityDec: number;
                };
            };
            background: {
                default: string;
                surface: string;
                element: string;
                elementGradient: string;
            };
            tabBar: {
                fill: string;
                on: string;
                active: string;
            };
            standard: {
                white: string;
                whiteSemi: string;
                black: string;
                blackSemi: string;
                main100: string;
                main300: string;
                main500: string;
                main700: string;
                main900: string;
                main500Semi: string;
                mainOn500: string;
                accent100: string;
                accent300: string;
                accent500: string;
                accent700: string;
                accent900: string;
                accent500Semi: string;
                accentOn500: string;
                grey50: string;
                grey100: string;
                grey200: string;
                grey300: string;
                grey400: string;
                grey500: string;
                grey600: string;
                grey700: string;
                grey800: string;
                grey900: string;
            };
            semantic: {
                information100: string;
                information300: string;
                information500: string;
                information700: string;
                information900: string;
                informationOn100: string;
                informationOn300: string;
                informationOn500: string;
                information500Semi: string;
                negative100: string;
                negative300: string;
                negative500: string;
                negative700: string;
                negative900: string;
                negativeOn100: string;
                negativeOn300: string;
                negativeOn500: string;
                negative500Semi: string;
                positive100: string;
                positive300: string;
                positive500: string;
                positive700: string;
                positive900: string;
                positiveOn100: string;
                positiveOn300: string;
                positiveOn500: string;
                positive500Semi: string;
                warning100: string;
                warning300: string;
                warning500: string;
                warning700: string;
                warning900: string;
                warningOn100: string;
                warningOn300: string;
                warningOn500: string;
                warning500Semi: string;
            };
            typography: {
                set: string;
                textPrimary: string;
                textSecondary: string;
                textDisabled: string;
                titlePrimary: string;
                titlePrimaryGradient: string;
                textPrimaryInverse: string;
                fontFamily: {
                    body: string;
                    title: string;
                };
                fontWeight: {
                    regular: number;
                    medium: number;
                    strong: number;
                };
                title: {
                    base: {
                        regular: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                    };
                    sm: {
                        regular: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                    };
                    xs: {
                        medium: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                    };
                };
                body: {
                    base: {
                        regular: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                        medium: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                    };
                    xl: {
                        medium: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                    };
                    lg: {
                        medium: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                    };
                    sm: {
                        medium: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                        regular: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                    };
                    xs: {
                        regular: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                    };
                    xxs: {
                        medium: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                    };
                };
                mono: {
                    base: {
                        regular: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                        medium: {
                            fontFamily: string;
                            fontWeight: number;
                            fontSize: string;
                            lineHeight: string;
                            letterSpacing: string;
                            textTransform: string;
                        };
                    };
                };
            };
        };
        palette: {
            mode: string;
            common: {
                white: string;
                black: string;
            };
            odbPrimary: {
                main: string;
                light: string;
                dark: string;
                contrastText: string;
            };
            odbSecondary: {
                main: string;
                light: string;
                dark: string;
                contrastText: string;
            };
            odbTertiary: {
                main: string;
                light: string;
                dark: string;
                contrastText: string;
            };
            odbDestructive: {
                main: string;
                light: string;
                dark: string;
                contrastText: string;
            };
            odbAction: {
                main: string;
                light: string;
                dark: string;
                contrastText: string;
            };
            odbHelper: {
                main: string;
                light: string;
                dark: string;
                contrastText: string;
            };
            primary: {
                main: string;
                light: string;
                dark: string;
                contrastText: string;
            };
            secondary: {
                main: string;
                light: string;
                dark: string;
                contrastText: string;
            };
            error: {
                main: string;
                light: string;
                dark: string;
                contrastText: string;
            };
            warning: {
                main: string;
                light: string;
                dark: string;
                contrastText: string;
            };
            info: {
                main: string;
                light: string;
                dark: string;
                contrastText: string;
            };
            success: {
                main: string;
                light: string;
                dark: string;
                contrastText: string;
            };
            grey: {
                '50': string;
                '100': string;
                '200': string;
                '300': string;
                '400': string;
                '500': string;
                '600': string;
                '700': string;
                '800': string;
                '900': string;
                A100: string;
                A200: string;
                A400: string;
                A700: string;
            };
            contrastThreshold: number;
            tonalOffset: number;
            background: {
                paper: string;
                default: string;
            };
            text: {
                primary: string;
                secondary: string;
                disabled: string;
            };
            divider: string;
            action: {
                active: string;
                hover: string;
                hoverOpacity: number;
                selected: string;
                selectedOpacity: number;
                disabled: string;
                disabledBackground: string;
                disabledOpacity: number;
                focus: string;
                focusOpacity: number;
                activatedOpacity: number;
            };
        };
        typography: {
            fontFamily: string;
            sizes: {
                xs: string;
                s: string;
                m: string;
                l: string;
                xl: string;
            };
            htmlFontSize: number;
            fontSize: number;
            fontWeightRegular: number;
            fontWeightMedium: number;
            fontWeightBold: number;
            h1: {
                fontFamily: string;
                fontWeight: number;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            h2: {
                fontFamily: string;
                fontWeight: number;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            h3: {
                fontFamily: string;
                fontWeight: number;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            h4: {
                fontFamily: string;
                fontWeight: number;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            h5: {
                fontFamily: string;
                fontWeight: number;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            h6: {
                fontFamily: string;
                fontWeight: number;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            subtitle1: {
                fontFamily: string;
                fontWeight: number;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
                textTransform: string;
            };
            subtitle2: {
                fontFamily: string;
                fontWeight: number;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
                textTransform: string;
            };
            body1: {
                fontFamily: string;
                fontWeight: number;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            body2: {
                fontFamily: string;
                fontWeight: number;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            mono1: {
                fontFamily: string;
                fontWeight: number;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            mono2: {
                fontFamily: string;
                fontWeight: number;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            button: {
                fontFamily: string;
                fontWeight: number;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
                textTransform: string;
            };
            caption: {
                fontFamily: string;
                fontWeight: number;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            overline: {
                fontFamily: string;
                fontWeight: number;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
                textTransform: string;
            };
            fontWeightLight: number;
        };
    };
};
export default _default;
