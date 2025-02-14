Repository Structure:

Directory structure:
└── Reactive-Resume/
    ├── README.md
    ├── CHANGELOG.md
    ├── CODE_OF_CONDUCT.md
    ├── CONTRIBUTING.md
    ├── Dockerfile
    ├── LICENSE.md
    ├── SECURITY.md
    ├── compose.dev.yml
    ├── compose.yml
    ├── crowdin.yml
    ├── jest.config.ts
    ├── jest.preset.js
    ├── lingui.config.ts
    ├── nx.json
    ├── package.json
    ├── pnpm-lock.yaml
    ├── tailwind.config.js
    ├── tsconfig.base.json
    ├── .dockerignore
    ├── .editorconfig
    ├── .env.example
    ├── .eslintignore
    ├── .eslintrc.json
    ├── .ncurc.json
    ├── .npmrc
    ├── .prettierignore
    ├── .prettierrc
    ├── apps/
    │   ├── artboard/
    │   │   ├── index.html
    │   │   ├── postcss.config.js
    │   │   ├── project.json
    │   │   ├── tailwind.config.js
    │   │   ├── tsconfig.app.json
    │   │   ├── tsconfig.json
    │   │   ├── vite.config.ts
    │   │   ├── .eslintrc.json
    │   │   ├── public/
    │   │   │   └── icon/
    │   │   └── src/
    │   │       ├── main.tsx
    │   │       ├── assets/
    │   │       │   └── .gitkeep
    │   │       ├── components/
    │   │       │   ├── brand-icon.tsx
    │   │       │   ├── page.tsx
    │   │       │   └── picture.tsx
    │   │       ├── constants/
    │   │       │   └── helmet.ts
    │   │       ├── pages/
    │   │       │   ├── artboard.tsx
    │   │       │   ├── builder.tsx
    │   │       │   └── preview.tsx
    │   │       ├── providers/
    │   │       │   └── index.tsx
    │   │       ├── router/
    │   │       │   └── index.tsx
    │   │       ├── store/
    │   │       │   └── artboard.ts
    │   │       ├── styles/
    │   │       │   └── main.css
    │   │       ├── templates/
    │   │       │   ├── azurill.tsx
    │   │       │   ├── bronzor.tsx
    │   │       │   ├── chikorita.tsx
    │   │       │   ├── ditto.tsx
    │   │       │   ├── gengar.tsx
    │   │       │   ├── glalie.tsx
    │   │       │   ├── index.tsx
    │   │       │   ├── kakuna.tsx
    │   │       │   ├── leafish.tsx
    │   │       │   ├── nosepass.tsx
    │   │       │   ├── onyx.tsx
    │   │       │   ├── pikachu.tsx
    │   │       │   └── rhyhorn.tsx
    │   │       └── types/
    │   │           └── template.ts
    │   ├── client/
    │   │   ├── index.html
    │   │   ├── postcss.config.js
    │   │   ├── project.json
    │   │   ├── proxy.conf.json
    │   │   ├── tailwind.config.js
    │   │   ├── tsconfig.app.json
    │   │   ├── tsconfig.json
    │   │   ├── tsconfig.spec.json
    │   │   ├── vite.config.ts
    │   │   ├── .eslintrc.json
    │   │   ├── public/
    │   │   │   ├── assets/
    │   │   │   ├── backgrounds/
    │   │   │   ├── brand-logos/
    │   │   │   │   ├── dark/
    │   │   │   │   └── light/
    │   │   │   ├── icon/
    │   │   │   ├── logo/
    │   │   │   ├── sample-resumes/
    │   │   │   ├── screenshots/
    │   │   │   ├── scripts/
    │   │   │   │   └── initialize-theme.js
    │   │   │   ├── styles/
    │   │   │   │   ├── prism-dark.css
    │   │   │   │   └── prism-light.css
    │   │   │   ├── support-logos/
    │   │   │   └── templates/
    │   │   │       ├── jpg/
    │   │   │       ├── json/
    │   │   │       │   ├── azurill.json
    │   │   │       │   ├── bronzor.json
    │   │   │       │   ├── chikorita.json
    │   │   │       │   ├── ditto.json
    │   │   │       │   ├── gengar.json
    │   │   │       │   ├── glalie.json
    │   │   │       │   ├── kakuna.json
    │   │   │       │   ├── leafish.json
    │   │   │       │   ├── nosepass.json
    │   │   │       │   ├── onyx.json
    │   │   │       │   ├── pikachu.json
    │   │   │       │   └── rhyhorn.json
    │   │   │       └── pdf/
    │   │   └── src/
    │   │       ├── main.tsx
    │   │       ├── vite-env.d.ts
    │   │       ├── assets/
    │   │       │   └── .gitkeep
    │   │       ├── components/
    │   │       │   ├── ai-actions.tsx
    │   │       │   ├── brand-icon.tsx
    │   │       │   ├── copyright.tsx
    │   │       │   ├── icon.tsx
    │   │       │   ├── locale-combobox.tsx
    │   │       │   ├── locale-switch.tsx
    │   │       │   ├── logo.tsx
    │   │       │   ├── theme-switch.tsx
    │   │       │   ├── user-avatar.tsx
    │   │       │   └── user-options.tsx
    │   │       ├── constants/
    │   │       │   ├── colors.ts
    │   │       │   ├── helmet.ts
    │   │       │   ├── llm.ts
    │   │       │   ├── parallax-tilt.ts
    │   │       │   └── query-keys.ts
    │   │       ├── hooks/
    │   │       │   └── use-toast.ts
    │   │       ├── libs/
    │   │       │   ├── axios.ts
    │   │       │   ├── dayjs.ts
    │   │       │   ├── lingui.ts
    │   │       │   └── query-client.ts
    │   │       ├── locales/
    │   │       │   ├── af-ZA/
    │   │       │   │   └── messages.po
    │   │       │   ├── am-ET/
    │   │       │   │   └── messages.po
    │   │       │   ├── ar-SA/
    │   │       │   │   └── messages.po
    │   │       │   ├── bg-BG/
    │   │       │   │   └── messages.po
    │   │       │   ├── bn-BD/
    │   │       │   │   └── messages.po
    │   │       │   ├── ca-ES/
    │   │       │   │   └── messages.po
    │   │       │   ├── cs-CZ/
    │   │       │   │   └── messages.po
    │   │       │   ├── da-DK/
    │   │       │   │   └── messages.po
    │   │       │   ├── de-DE/
    │   │       │   │   └── messages.po
    │   │       │   ├── el-GR/
    │   │       │   │   └── messages.po
    │   │       │   ├── en-US/
    │   │       │   │   └── messages.po
    │   │       │   ├── es-ES/
    │   │       │   │   └── messages.po
    │   │       │   ├── fa-IR/
    │   │       │   │   └── messages.po
    │   │       │   ├── fi-FI/
    │   │       │   │   └── messages.po
    │   │       │   ├── fr-FR/
    │   │       │   │   └── messages.po
    │   │       │   ├── he-IL/
    │   │       │   │   └── messages.po
    │   │       │   ├── hi-IN/
    │   │       │   │   └── messages.po
    │   │       │   ├── hu-HU/
    │   │       │   │   └── messages.po
    │   │       │   ├── id-ID/
    │   │       │   │   └── messages.po
    │   │       │   ├── it-IT/
    │   │       │   │   └── messages.po
    │   │       │   ├── ja-JP/
    │   │       │   │   └── messages.po
    │   │       │   ├── km-KH/
    │   │       │   │   └── messages.po
    │   │       │   ├── kn-IN/
    │   │       │   │   └── messages.po
    │   │       │   ├── ko-KR/
    │   │       │   │   └── messages.po
    │   │       │   ├── lt-LT/
    │   │       │   │   └── messages.po
    │   │       │   ├── lv-LV/
    │   │       │   │   └── messages.po
    │   │       │   ├── ml-IN/
    │   │       │   │   └── messages.po
    │   │       │   ├── mr-IN/
    │   │       │   │   └── messages.po
    │   │       │   ├── ms-MY/
    │   │       │   │   └── messages.po
    │   │       │   ├── ne-NP/
    │   │       │   │   └── messages.po
    │   │       │   ├── nl-NL/
    │   │       │   │   └── messages.po
    │   │       │   ├── no-NO/
    │   │       │   │   └── messages.po
    │   │       │   ├── or-IN/
    │   │       │   │   └── messages.po
    │   │       │   ├── pl-PL/
    │   │       │   │   └── messages.po
    │   │       │   ├── pt-BR/
    │   │       │   │   └── messages.po
    │   │       │   ├── pt-PT/
    │   │       │   │   └── messages.po
    │   │       │   ├── ro-RO/
    │   │       │   │   └── messages.po
    │   │       │   ├── ru-RU/
    │   │       │   │   └── messages.po
    │   │       │   ├── sk-SK/
    │   │       │   │   └── messages.po
    │   │       │   ├── sq-AL/
    │   │       │   │   └── messages.po
    │   │       │   ├── sr-SP/
    │   │       │   │   └── messages.po
    │   │       │   ├── sv-SE/
    │   │       │   │   └── messages.po
    │   │       │   ├── ta-IN/
    │   │       │   │   └── messages.po
    │   │       │   ├── te-IN/
    │   │       │   │   └── messages.po
    │   │       │   ├── th-TH/
    │   │       │   │   └── messages.po
    │   │       │   ├── tr-TR/
    │   │       │   │   └── messages.po
    │   │       │   ├── uk-UA/
    │   │       │   │   └── messages.po
    │   │       │   ├── uz-UZ/
    │   │       │   │   └── messages.po
    │   │       │   ├── vi-VN/
    │   │       │   │   └── messages.po
    │   │       │   ├── zh-CN/
    │   │       │   │   └── messages.po
    │   │       │   └── zh-TW/
    │   │       │       └── messages.po
    │   │       ├── pages/
    │   │       │   ├── auth/
    │   │       │   │   ├── layout.tsx
    │   │       │   │   ├── _components/
    │   │       │   │   │   └── social-auth.tsx
    │   │       │   │   ├── backup-otp/
    │   │       │   │   │   └── page.tsx
    │   │       │   │   ├── forgot-password/
    │   │       │   │   │   └── page.tsx
    │   │       │   │   ├── login/
    │   │       │   │   │   └── page.tsx
    │   │       │   │   ├── register/
    │   │       │   │   │   └── page.tsx
    │   │       │   │   ├── reset-password/
    │   │       │   │   │   └── page.tsx
    │   │       │   │   ├── verify-email/
    │   │       │   │   │   └── page.tsx
    │   │       │   │   └── verify-otp/
    │   │       │   │       └── page.tsx
    │   │       │   ├── builder/
    │   │       │   │   ├── layout.tsx
    │   │       │   │   ├── page.tsx
    │   │       │   │   ├── _components/
    │   │       │   │   │   ├── header.tsx
    │   │       │   │   │   └── toolbar.tsx
    │   │       │   │   └── sidebars/
    │   │       │   │       ├── left/
    │   │       │   │       │   ├── index.tsx
    │   │       │   │       │   ├── dialogs/
    │   │       │   │       │   │   ├── awards.tsx
    │   │       │   │       │   │   ├── certifications.tsx
    │   │       │   │       │   │   ├── custom-section.tsx
    │   │       │   │       │   │   ├── education.tsx
    │   │       │   │       │   │   ├── experience.tsx
    │   │       │   │       │   │   ├── interests.tsx
    │   │       │   │       │   │   ├── languages.tsx
    │   │       │   │       │   │   ├── profiles.tsx
    │   │       │   │       │   │   ├── projects.tsx
    │   │       │   │       │   │   ├── publications.tsx
    │   │       │   │       │   │   ├── references.tsx
    │   │       │   │       │   │   ├── skills.tsx
    │   │       │   │       │   │   └── volunteer.tsx
    │   │       │   │       │   └── sections/
    │   │       │   │       │       ├── basics.tsx
    │   │       │   │       │       ├── summary.tsx
    │   │       │   │       │       ├── custom/
    │   │       │   │       │       │   └── section.tsx
    │   │       │   │       │       ├── picture/
    │   │       │   │       │       │   ├── options.tsx
    │   │       │   │       │       │   └── section.tsx
    │   │       │   │       │       └── shared/
    │   │       │   │       │           ├── section-base.tsx
    │   │       │   │       │           ├── section-dialog.tsx
    │   │       │   │       │           ├── section-icon.tsx
    │   │       │   │       │           ├── section-list-item.tsx
    │   │       │   │       │           ├── section-options.tsx
    │   │       │   │       │           └── url-input.tsx
    │   │       │   │       └── right/
    │   │       │   │           ├── index.tsx
    │   │       │   │           ├── sections/
    │   │       │   │           │   ├── css.tsx
    │   │       │   │           │   ├── export.tsx
    │   │       │   │           │   ├── information.tsx
    │   │       │   │           │   ├── layout.tsx
    │   │       │   │           │   ├── notes.tsx
    │   │       │   │           │   ├── page.tsx
    │   │       │   │           │   ├── sharing.tsx
    │   │       │   │           │   ├── statistics.tsx
    │   │       │   │           │   ├── template.tsx
    │   │       │   │           │   ├── theme.tsx
    │   │       │   │           │   └── typography.tsx
    │   │       │   │           └── shared/
    │   │       │   │               └── section-icon.tsx
    │   │       │   ├── dashboard/
    │   │       │   │   ├── layout.tsx
    │   │       │   │   ├── _components/
    │   │       │   │   │   └── sidebar.tsx
    │   │       │   │   ├── resumes/
    │   │       │   │   │   ├── page.tsx
    │   │       │   │   │   ├── _dialogs/
    │   │       │   │   │   │   ├── import.tsx
    │   │       │   │   │   │   ├── lock.tsx
    │   │       │   │   │   │   └── resume.tsx
    │   │       │   │   │   └── _layouts/
    │   │       │   │   │       ├── grid/
    │   │       │   │   │       │   ├── index.tsx
    │   │       │   │   │       │   └── _components/
    │   │       │   │   │       │       ├── base-card.tsx
    │   │       │   │   │       │       ├── create-card.tsx
    │   │       │   │   │       │       ├── import-card.tsx
    │   │       │   │   │       │       └── resume-card.tsx
    │   │       │   │   │       └── list/
    │   │       │   │   │           ├── index.tsx
    │   │       │   │   │           └── _components/
    │   │       │   │   │               ├── base-item.tsx
    │   │       │   │   │               ├── create-item.tsx
    │   │       │   │   │               ├── import-item.tsx
    │   │       │   │   │               └── resume-item.tsx
    │   │       │   │   └── settings/
    │   │       │   │       ├── page.tsx
    │   │       │   │       ├── _dialogs/
    │   │       │   │       │   └── two-factor.tsx
    │   │       │   │       └── _sections/
    │   │       │   │           ├── account.tsx
    │   │       │   │           ├── danger.tsx
    │   │       │   │           ├── openai.tsx
    │   │       │   │           ├── profile.tsx
    │   │       │   │           └── security.tsx
    │   │       │   ├── home/
    │   │       │   │   ├── layout.tsx
    │   │       │   │   ├── page.tsx
    │   │       │   │   ├── components/
    │   │       │   │   │   ├── donation-banner.tsx
    │   │       │   │   │   ├── footer.tsx
    │   │       │   │   │   └── header.tsx
    │   │       │   │   └── sections/
    │   │       │   │       ├── contributors/
    │   │       │   │       │   └── index.tsx
    │   │       │   │       ├── faq/
    │   │       │   │       │   └── index.tsx
    │   │       │   │       ├── features/
    │   │       │   │       │   └── index.tsx
    │   │       │   │       ├── hero/
    │   │       │   │       │   ├── call-to-action.tsx
    │   │       │   │       │   ├── decoration.tsx
    │   │       │   │       │   └── index.tsx
    │   │       │   │       ├── logo-cloud/
    │   │       │   │       │   └── index.tsx
    │   │       │   │       ├── statistics/
    │   │       │   │       │   ├── counter.tsx
    │   │       │   │       │   └── index.tsx
    │   │       │   │       ├── support/
    │   │       │   │       │   └── index.tsx
    │   │       │   │       ├── templates/
    │   │       │   │       │   └── index.tsx
    │   │       │   │       └── testimonials/
    │   │       │   │           └── index.tsx
    │   │       │   └── public/
    │   │       │       ├── error.tsx
    │   │       │       └── page.tsx
    │   │       ├── providers/
    │   │       │   ├── auth-refresh.tsx
    │   │       │   ├── dialog.tsx
    │   │       │   ├── index.tsx
    │   │       │   ├── locale.tsx
    │   │       │   ├── theme.tsx
    │   │       │   └── toaster.tsx
    │   │       ├── router/
    │   │       │   ├── index.tsx
    │   │       │   ├── guards/
    │   │       │   │   ├── auth.tsx
    │   │       │   │   └── guest.tsx
    │   │       │   └── loaders/
    │   │       │       └── auth.ts
    │   │       ├── services/
    │   │       │   ├── auth/
    │   │       │   │   ├── index.ts
    │   │       │   │   ├── login.ts
    │   │       │   │   ├── logout.ts
    │   │       │   │   ├── providers.ts
    │   │       │   │   ├── refresh.ts
    │   │       │   │   ├── register.ts
    │   │       │   │   ├── update-password.ts
    │   │       │   │   ├── email-verification/
    │   │       │   │   │   ├── resend-verify-email.ts
    │   │       │   │   │   └── verify-email.ts
    │   │       │   │   ├── password-recovery/
    │   │       │   │   │   ├── forgot-password.ts
    │   │       │   │   │   └── reset-password.ts
    │   │       │   │   └── two-factor-authentication/
    │   │       │   │       ├── backup-otp.tsx
    │   │       │   │       ├── disable.ts
    │   │       │   │       ├── enable.ts
    │   │       │   │       ├── setup.ts
    │   │       │   │       └── verify-otp.tsx
    │   │       │   ├── errors/
    │   │       │   │   └── translate-error.ts
    │   │       │   ├── feature/
    │   │       │   │   ├── flags.ts
    │   │       │   │   └── index.ts
    │   │       │   ├── openai/
    │   │       │   │   ├── change-tone.ts
    │   │       │   │   ├── client.ts
    │   │       │   │   ├── fix-grammar.ts
    │   │       │   │   └── improve-writing.ts
    │   │       │   ├── resume/
    │   │       │   │   ├── contributors.ts
    │   │       │   │   ├── create.ts
    │   │       │   │   ├── delete.ts
    │   │       │   │   ├── import.ts
    │   │       │   │   ├── index.ts
    │   │       │   │   ├── lock.ts
    │   │       │   │   ├── preview.ts
    │   │       │   │   ├── print.tsx
    │   │       │   │   ├── resume.ts
    │   │       │   │   ├── resumes.ts
    │   │       │   │   ├── statistics.ts
    │   │       │   │   ├── translation.ts
    │   │       │   │   └── update.tsx
    │   │       │   ├── storage/
    │   │       │   │   ├── index.ts
    │   │       │   │   └── upload-image.ts
    │   │       │   └── user/
    │   │       │       ├── delete-user.ts
    │   │       │       ├── index.ts
    │   │       │       ├── update-user.ts
    │   │       │       └── user.ts
    │   │       ├── stores/
    │   │       │   ├── auth.ts
    │   │       │   ├── builder.ts
    │   │       │   ├── dialog.ts
    │   │       │   ├── openai.ts
    │   │       │   └── resume.ts
    │   │       └── styles/
    │   │           ├── _colors.css
    │   │           ├── _fonts.css
    │   │           ├── _tailwind.css
    │   │           ├── _theme.css
    │   │           └── main.css
    │   └── server/
    │       ├── jest.config.ts
    │       ├── project.json
    │       ├── tsconfig.app.json
    │       ├── tsconfig.json
    │       ├── tsconfig.spec.json
    │       ├── webpack.config.js
    │       ├── .eslintrc.json
    │       └── src/
    │           ├── app.module.ts
    │           ├── main.ts
    │           ├── assets/
    │           │   └── .gitkeep
    │           ├── auth/
    │           │   ├── auth.controller.ts
    │           │   ├── auth.module.ts
    │           │   ├── auth.service.ts
    │           │   ├── guards/
    │           │   │   ├── github.guard.ts
    │           │   │   ├── google.guard.ts
    │           │   │   ├── jwt.guard.ts
    │           │   │   ├── local.guard.ts
    │           │   │   ├── openid.guard.ts
    │           │   │   ├── optional.guard.ts
    │           │   │   ├── refresh.guard.ts
    │           │   │   └── two-factor.guard.ts
    │           │   ├── strategy/
    │           │   │   ├── dummy.strategy.ts
    │           │   │   ├── github.strategy.ts
    │           │   │   ├── google.strategy.ts
    │           │   │   ├── jwt.strategy.ts
    │           │   │   ├── local.strategy.ts
    │           │   │   ├── openid.strategy.ts
    │           │   │   ├── refresh.strategy.ts
    │           │   │   └── two-factor.strategy.ts
    │           │   └── utils/
    │           │       ├── cookie.ts
    │           │       └── payload.ts
    │           ├── config/
    │           │   ├── config.module.ts
    │           │   └── schema.ts
    │           ├── contributors/
    │           │   ├── contributors.controller.ts
    │           │   ├── contributors.module.ts
    │           │   └── contributors.service.ts
    │           ├── database/
    │           │   └── database.module.ts
    │           ├── feature/
    │           │   ├── feature.controller.ts
    │           │   ├── feature.module.ts
    │           │   └── feature.service.ts
    │           ├── health/
    │           │   ├── browser.health.ts
    │           │   ├── database.health.ts
    │           │   ├── health.controller.ts
    │           │   ├── health.module.ts
    │           │   └── storage.health.ts
    │           ├── mail/
    │           │   ├── mail.module.ts
    │           │   └── mail.service.ts
    │           ├── printer/
    │           │   ├── printer.module.ts
    │           │   └── printer.service.ts
    │           ├── resume/
    │           │   ├── resume.controller.ts
    │           │   ├── resume.module.ts
    │           │   ├── resume.service.ts
    │           │   ├── decorators/
    │           │   │   └── resume.decorator.ts
    │           │   └── guards/
    │           │       └── resume.guard.ts
    │           ├── storage/
    │           │   ├── storage.controller.ts
    │           │   ├── storage.module.ts
    │           │   └── storage.service.ts
    │           ├── translation/
    │           │   ├── translation.controller.ts
    │           │   ├── translation.module.ts
    │           │   └── translation.service.ts
    │           ├── types/
    │           │   └── express.d.ts
    │           └── user/
    │               ├── user.controller.ts
    │               ├── user.module.ts
    │               ├── user.service.ts
    │               └── decorators/
    │                   └── user.decorator.ts
    ├── libs/
    │   ├── dto/
    │   │   ├── package.json
    │   │   ├── pnpm-lock.yaml
    │   │   ├── project.json
    │   │   ├── tsconfig.json
    │   │   ├── tsconfig.lib.json
    │   │   ├── tsconfig.spec.json
    │   │   ├── vite.config.ts
    │   │   ├── .eslintrc.json
    │   │   ├── .swcrc
    │   │   └── src/
    │   │       ├── index.ts
    │   │       ├── auth/
    │   │       │   ├── forgot-password.ts
    │   │       │   ├── index.ts
    │   │       │   ├── login.ts
    │   │       │   ├── message.ts
    │   │       │   ├── providers.ts
    │   │       │   ├── register.ts
    │   │       │   ├── reset-password.ts
    │   │       │   ├── response.ts
    │   │       │   ├── two-factor.ts
    │   │       │   └── update-password.ts
    │   │       ├── contributors/
    │   │       │   └── index.ts
    │   │       ├── feature/
    │   │       │   └── index.ts
    │   │       ├── resume/
    │   │       │   ├── create.ts
    │   │       │   ├── delete.ts
    │   │       │   ├── import.ts
    │   │       │   ├── index.ts
    │   │       │   ├── resume.ts
    │   │       │   ├── update.ts
    │   │       │   └── url.ts
    │   │       ├── secrets/
    │   │       │   ├── index.ts
    │   │       │   └── secrets.ts
    │   │       ├── statistics/
    │   │       │   └── index.ts
    │   │       └── user/
    │   │           ├── index.ts
    │   │           ├── update-user.ts
    │   │           └── user.ts
    │   ├── hooks/
    │   │   ├── package.json
    │   │   ├── pnpm-lock.yaml
    │   │   ├── project.json
    │   │   ├── tsconfig.json
    │   │   ├── tsconfig.lib.json
    │   │   ├── tsconfig.spec.json
    │   │   ├── vite.config.ts
    │   │   ├── .eslintrc.json
    │   │   └── src/
    │   │       ├── index.ts
    │   │       └── hooks/
    │   │           ├── use-breakpoint.ts
    │   │           ├── use-form-field.ts
    │   │           ├── use-password-toggle.ts
    │   │           └── use-theme.ts
    │   ├── parser/
    │   │   ├── package.json
    │   │   ├── pnpm-lock.yaml
    │   │   ├── project.json
    │   │   ├── tsconfig.json
    │   │   ├── tsconfig.lib.json
    │   │   ├── tsconfig.spec.json
    │   │   ├── vite.config.ts
    │   │   ├── .eslintrc.json
    │   │   ├── .swcrc
    │   │   └── src/
    │   │       ├── index.ts
    │   │       ├── interfaces/
    │   │       │   └── parser.ts
    │   │       ├── json-resume/
    │   │       │   ├── index.ts
    │   │       │   └── schema.ts
    │   │       ├── linkedin/
    │   │       │   ├── index.ts
    │   │       │   └── schema/
    │   │       │       ├── certification.ts
    │   │       │       ├── education.ts
    │   │       │       ├── email.ts
    │   │       │       ├── index.ts
    │   │       │       ├── language.ts
    │   │       │       ├── position.ts
    │   │       │       ├── profile.ts
    │   │       │       ├── project.ts
    │   │       │       └── skill.ts
    │   │       ├── reactive-resume/
    │   │       │   └── index.ts
    │   │       └── reactive-resume-v3/
    │   │           ├── index.ts
    │   │           └── schema.ts
    │   ├── schema/
    │   │   ├── package.json
    │   │   ├── pnpm-lock.yaml
    │   │   ├── project.json
    │   │   ├── tsconfig.json
    │   │   ├── tsconfig.lib.json
    │   │   ├── tsconfig.spec.json
    │   │   ├── vite.config.ts
    │   │   ├── .eslintrc.json
    │   │   ├── .swcrc
    │   │   └── src/
    │   │       ├── index.ts
    │   │       ├── sample.ts
    │   │       ├── basics/
    │   │       │   ├── custom.ts
    │   │       │   └── index.ts
    │   │       ├── metadata/
    │   │       │   └── index.ts
    │   │       ├── sections/
    │   │       │   ├── award.ts
    │   │       │   ├── certification.ts
    │   │       │   ├── custom-section.ts
    │   │       │   ├── education.ts
    │   │       │   ├── experience.ts
    │   │       │   ├── index.ts
    │   │       │   ├── interest.ts
    │   │       │   ├── language.ts
    │   │       │   ├── profile.ts
    │   │       │   ├── project.ts
    │   │       │   ├── publication.ts
    │   │       │   ├── reference.ts
    │   │       │   ├── skill.ts
    │   │       │   └── volunteer.ts
    │   │       └── shared/
    │   │           ├── id.ts
    │   │           ├── index.ts
    │   │           ├── item.ts
    │   │           ├── types.ts
    │   │           └── url.ts
    │   ├── ui/
    │   │   ├── package.json
    │   │   ├── pnpm-lock.yaml
    │   │   ├── postcss.config.js
    │   │   ├── project.json
    │   │   ├── tailwind.config.js
    │   │   ├── tsconfig.json
    │   │   ├── tsconfig.lib.json
    │   │   ├── tsconfig.spec.json
    │   │   ├── vite.config.ts
    │   │   ├── .eslintrc.json
    │   │   └── src/
    │   │       ├── index.ts
    │   │       ├── components/
    │   │       │   ├── accordion.tsx
    │   │       │   ├── alert-dialog.tsx
    │   │       │   ├── alert.tsx
    │   │       │   ├── aspect-ratio.tsx
    │   │       │   ├── avatar.tsx
    │   │       │   ├── badge-input.tsx
    │   │       │   ├── badge.tsx
    │   │       │   ├── button.tsx
    │   │       │   ├── card.tsx
    │   │       │   ├── checkbox.tsx
    │   │       │   ├── combobox.tsx
    │   │       │   ├── command.tsx
    │   │       │   ├── context-menu.tsx
    │   │       │   ├── dialog.tsx
    │   │       │   ├── dropdown-menu.tsx
    │   │       │   ├── form.tsx
    │   │       │   ├── hover-card.tsx
    │   │       │   ├── index.ts
    │   │       │   ├── input.tsx
    │   │       │   ├── label.tsx
    │   │       │   ├── popover.tsx
    │   │       │   ├── portal.tsx
    │   │       │   ├── resizable-panel.tsx
    │   │       │   ├── rich-input.tsx
    │   │       │   ├── scroll-area.tsx
    │   │       │   ├── select.tsx
    │   │       │   ├── separator.tsx
    │   │       │   ├── sheet.tsx
    │   │       │   ├── shortcut.tsx
    │   │       │   ├── skeleton.tsx
    │   │       │   ├── slider.tsx
    │   │       │   ├── switch.tsx
    │   │       │   ├── tabs.tsx
    │   │       │   ├── toast.tsx
    │   │       │   ├── toggle-group.tsx
    │   │       │   ├── toggle.tsx
    │   │       │   ├── tooltip.tsx
    │   │       │   └── visually-hidden.tsx
    │   │       └── variants/
    │   │           ├── alert.ts
    │   │           ├── badge.ts
    │   │           ├── button.ts
    │   │           ├── index.ts
    │   │           ├── sheet.ts
    │   │           ├── toast.ts
    │   │           └── toggle.ts
    │   └── utils/
    │       ├── package.json
    │       ├── pnpm-lock.yaml
    │       ├── project.json
    │       ├── tsconfig.json
    │       ├── tsconfig.lib.json
    │       ├── tsconfig.spec.json
    │       ├── vite.config.ts
    │       ├── .eslintrc.json
    │       ├── .swcrc
    │       └── src/
    │           ├── index.ts
    │           └── namespaces/
    │               ├── array.ts
    │               ├── color.ts
    │               ├── csv.ts
    │               ├── date.ts
    │               ├── error.ts
    │               ├── fonts.ts
    │               ├── language.ts
    │               ├── number.ts
    │               ├── object.ts
    │               ├── page.ts
    │               ├── promise.ts
    │               ├── string.ts
    │               ├── style.ts
    │               ├── template.ts
    │               ├── types.ts
    │               └── tests/
    │                   ├── array.test.ts
    │                   ├── date.test.ts
    │                   ├── number.test.ts
    │                   ├── object.test.ts
    │                   └── string.test.ts
    ├── tools/
    │   ├── tsconfig.tools.json
    │   ├── compose/
    │   │   ├── development.yml
    │   │   ├── nginx-proxy-manager.yml
    │   │   ├── simple.yml
    │   │   ├── swarm.yml
    │   │   ├── traefik-secure.yml
    │   │   └── traefik.yml
    │   └── prisma/
    │       ├── schema.prisma
    │       └── migrations/
    │           ├── migration_lock.toml
    │           ├── 20231121234455_initialize_tables/
    │           │   └── migration.sql
    │           ├── 20240505101746_add_statistics_table/
    │           │   └── migration.sql
    │           ├── 20240507090221_make_last_signed_in_non_null/
    │           │   └── migration.sql
    │           ├── 20250112140257_normalize_user_email_fields/
    │           │   └── migration.sql
    │           └── 20250113145008_add_openid_provider_to_enums/
    │               └── migration.sql
    └── .github/
        ├── FUNDING.yml
        ├── ISSUE_TEMPLATE/
        │   ├── bug-report.yml
        │   └── feature-request.yml
        └── workflows/
            ├── lint-test-build.yml
            ├── publish-docker-image.yml
            └── sync-crowdin-translations.yml


Files Content:

================================================
File: apps/artboard/src/pages/builder.tsx
================================================
import type { SectionKey } from "@reactive-resume/schema";
import type { Template } from "@reactive-resume/utils";
import { pageSizeMap } from "@reactive-resume/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactZoomPanPinchRef } from "react-zoom-pan-pinch";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

import { MM_TO_PX, Page } from "../components/page";
import { useArtboardStore } from "../store/artboard";
import { getTemplate } from "../templates";

export const BuilderLayout = () => {
  const [wheelPanning, setWheelPanning] = useState(true);

  const transformRef = useRef<ReactZoomPanPinchRef>(null);

  const layout = useArtboardStore((state) => state.resume.metadata.layout);
  const format = useArtboardStore((state) => state.resume.metadata.page.format);
  const template = useArtboardStore((state) => state.resume.metadata.template as Template);

  const Template = useMemo(() => getTemplate(template), [template]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;

      if (event.data.type === "ZOOM_IN") transformRef.current?.zoomIn(0.2);
      if (event.data.type === "ZOOM_OUT") transformRef.current?.zoomOut(0.2);
      if (event.data.type === "CENTER_VIEW") transformRef.current?.centerView();
      if (event.data.type === "RESET_VIEW") {
        transformRef.current?.resetTransform(0);
        setTimeout(() => transformRef.current?.centerView(0.8, 0), 10);
      }
      if (event.data.type === "TOGGLE_PAN_MODE") {
        setWheelPanning(event.data.panMode);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [transformRef]);

  return (
    <TransformWrapper
      ref={transformRef}
      centerOnInit
      maxScale={2}
      minScale={0.4}
      initialScale={0.8}
      limitToBounds={false}
      wheel={{ wheelDisabled: wheelPanning }}
      panning={{ wheelPanning: wheelPanning }}
    >
      <TransformComponent
        wrapperClass="!w-screen !h-screen"
        contentClass="grid items-start justify-center space-x-12 pointer-events-none"
        contentStyle={{
          width: `${layout.length * (pageSizeMap[format].width * MM_TO_PX + 42)}px`,
          gridTemplateColumns: `repeat(${layout.length}, 1fr)`,
        }}
      >
        <AnimatePresence>
          {layout.map((columns, pageIndex) => (
            <motion.div
              key={pageIndex}
              layout
              initial={{ opacity: 0, x: -200, y: 0 }}
              animate={{ opacity: 1, x: 0, transition: { delay: pageIndex * 0.3 } }}
              exit={{ opacity: 0, x: -200 }}
            >
              <Page mode="builder" pageNumber={pageIndex + 1}>
                <Template isFirstPage={pageIndex === 0} columns={columns as SectionKey[][]} />
              </Page>
            </motion.div>
          ))}
        </AnimatePresence>
      </TransformComponent>
    </TransformWrapper>
  );
};


================================================
File: apps/artboard/src/pages/preview.tsx
================================================
import type { SectionKey } from "@reactive-resume/schema";
import type { Template } from "@reactive-resume/utils";
import { useMemo } from "react";

import { Page } from "../components/page";
import { useArtboardStore } from "../store/artboard";
import { getTemplate } from "../templates";

export const PreviewLayout = () => {
  const layout = useArtboardStore((state) => state.resume.metadata.layout);
  const template = useArtboardStore((state) => state.resume.metadata.template as Template);

  const Template = useMemo(() => getTemplate(template), [template]);

  return (
    <>
      {layout.map((columns, pageIndex) => (
        <Page key={pageIndex} mode="preview" pageNumber={pageIndex + 1}>
          <Template isFirstPage={pageIndex === 0} columns={columns as SectionKey[][]} />
        </Page>
      ))}
    </>
  );
};


================================================
File: apps/artboard/src/templates/azurill.tsx
================================================
import type {
  Award,
  Certification,
  CustomSection,
  CustomSectionGroup,
  Interest,
  Language,
  Profile,
  Project,
  Publication,
  Reference,
  SectionKey,
  SectionWithItem,
  Skill,
  URL,
} from "@reactive-resume/schema";
import { Education, Experience, Volunteer } from "@reactive-resume/schema";
import { cn, isEmptyString, isUrl, linearTransform, sanitize } from "@reactive-resume/utils";
import get from "lodash.get";
import React, { Fragment } from "react";

import { BrandIcon } from "../components/brand-icon";
import { Picture } from "../components/picture";
import { useArtboardStore } from "../store/artboard";
import type { TemplateProps } from "../types/template";

const Header = () => {
  const basics = useArtboardStore((state) => state.resume.basics);

  return (
    <div className="flex flex-col items-center justify-center space-y-2 pb-2 text-center">
      <Picture />

      <div>
        <div className="text-2xl font-bold">{basics.name}</div>
        <div className="text-base">{basics.headline}</div>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-sm">
        {basics.location && (
          <div className="flex items-center gap-x-1.5">
            <i className="ph ph-bold ph-map-pin text-primary" />
            <div>{basics.location}</div>
          </div>
        )}
        {basics.phone && (
          <div className="flex items-center gap-x-1.5">
            <i className="ph ph-bold ph-phone text-primary" />
            <a href={`tel:${basics.phone}`} target="_blank" rel="noreferrer">
              {basics.phone}
            </a>
          </div>
        )}
        {basics.email && (
          <div className="flex items-center gap-x-1.5">
            <i className="ph ph-bold ph-at text-primary" />
            <a href={`mailto:${basics.email}`} target="_blank" rel="noreferrer">
              {basics.email}
            </a>
          </div>
        )}
        <Link url={basics.url} />
        {basics.customFields.map((item) => (
          <div key={item.id} className="flex items-center gap-x-1.5">
            <i className={cn(`ph ph-bold ph-${item.icon}`, "text-primary")} />
            {isUrl(item.value) ? (
              <a href={item.value} target="_blank" rel="noreferrer noopener nofollow">
                {item.name || item.value}
              </a>
            ) : (
              <span>{[item.name, item.value].filter(Boolean).join(": ")}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Summary = () => {
  const section = useArtboardStore((state) => state.resume.sections.summary);

  if (!section.visible || isEmptyString(section.content)) return null;

  return (
    <section id={section.id}>
      <div className="mb-2 hidden font-bold text-primary group-[.main]:block">
        <h4>{section.name}</h4>
      </div>

      <div className="mb-2 hidden items-center gap-x-2 text-center font-bold text-primary group-[.sidebar]:flex">
        <div className="size-1.5 rounded-full border border-primary" />
        <h4>{section.name}</h4>
        <div className="size-1.5 rounded-full border border-primary" />
      </div>

      <main className={cn("relative space-y-2", "border-l border-primary pl-4")}>
        <div className="absolute left-[-4.5px] top-[8px] hidden size-[8px] rounded-full bg-primary group-[.main]:block" />

        <div
          dangerouslySetInnerHTML={{ __html: sanitize(section.content) }}
          style={{ columns: section.columns }}
          className="wysiwyg"
        />
      </main>
    </section>
  );
};

type RatingProps = { level: number };

const Rating = ({ level }: RatingProps) => (
  <div className="relative h-1 w-[128px] group-[.sidebar]:mx-auto">
    <div className="absolute inset-0 h-1 w-[128px] rounded bg-primary opacity-25" />
    <div
      className="absolute inset-0 h-1 rounded bg-primary"
      style={{ width: linearTransform(level, 0, 5, 0, 128) }}
    />
  </div>
);

type LinkProps = {
  url: URL;
  icon?: React.ReactNode;
  iconOnRight?: boolean;
  label?: string;
  className?: string;
};

const Link = ({ url, icon, iconOnRight, label, className }: LinkProps) => {
  if (!isUrl(url.href)) return null;

  return (
    <div className="flex items-center gap-x-1.5">
      {!iconOnRight && (icon ?? <i className="ph ph-bold ph-link text-primary" />)}
      <a
        href={url.href}
        target="_blank"
        rel="noreferrer noopener nofollow"
        className={cn("inline-block", className)}
      >
        {label ?? (url.label || url.href)}
      </a>
      {iconOnRight && (icon ?? <i className="ph ph-bold ph-link text-primary" />)}
    </div>
  );
};

type LinkedEntityProps = {
  name: string;
  url: URL;
  separateLinks: boolean;
  className?: string;
};

const LinkedEntity = ({ name, url, separateLinks, className }: LinkedEntityProps) => {
  return !separateLinks && isUrl(url.href) ? (
    <Link
      url={url}
      label={name}
      icon={<i className="ph ph-bold ph-globe text-primary" />}
      iconOnRight={true}
      className={className}
    />
  ) : (
    <div className={className}>{name}</div>
  );
};

type SectionProps<T> = {
  section: SectionWithItem<T> | CustomSectionGroup;
  children?: (item: T) => React.ReactNode;
  className?: string;
  urlKey?: keyof T;
  levelKey?: keyof T;
  summaryKey?: keyof T;
  keywordsKey?: keyof T;
};

const Section = <T,>({
  section,
  children,
  className,
  urlKey,
  levelKey,
  summaryKey,
  keywordsKey,
}: SectionProps<T>) => {
  if (!section.visible || section.items.length === 0) return null;

  return (
    <section id={section.id} className="grid">
      <div className="mb-2 hidden font-bold text-primary group-[.main]:block">
        <h4>{section.name}</h4>
      </div>

      <div className="mx-auto mb-2 hidden items-center gap-x-2 text-center font-bold text-primary group-[.sidebar]:flex">
        <div className="size-1.5 rounded-full border border-primary" />
        <h4>{section.name}</h4>
        <div className="size-1.5 rounded-full border border-primary" />
      </div>

      <div
        className="grid gap-x-6 gap-y-3 group-[.sidebar]:mx-auto group-[.sidebar]:text-center"
        style={{ gridTemplateColumns: `repeat(${section.columns}, 1fr)` }}
      >
        {section.items
          .filter((item) => item.visible)
          .map((item) => {
            const url = (urlKey && get(item, urlKey)) as URL | undefined;
            const level = (levelKey && get(item, levelKey, 0)) as number | undefined;
            const summary = (summaryKey && get(item, summaryKey, "")) as string | undefined;
            const keywords = (keywordsKey && get(item, keywordsKey, [])) as string[] | undefined;

            return (
              <div
                key={item.id}
                className={cn(
                  "relative space-y-2",
                  "border-primary group-[.main]:border-l group-[.main]:pl-4",
                  className,
                )}
              >
                <div>{children?.(item as T)}</div>

                {summary !== undefined && !isEmptyString(summary) && (
                  <div
                    dangerouslySetInnerHTML={{ __html: sanitize(summary) }}
                    className="wysiwyg"
                  />
                )}

                {level !== undefined && level > 0 && <Rating level={level} />}

                {keywords !== undefined && keywords.length > 0 && (
                  <p className="text-sm">{keywords.join(", ")}</p>
                )}

                {url !== undefined && section.separateLinks && <Link url={url} />}

                <div className="absolute left-[-4.5px] top-px hidden size-[8px] rounded-full bg-primary group-[.main]:block" />
              </div>
            );
          })}
      </div>
    </section>
  );
};

const Profiles = () => {
  const section = useArtboardStore((state) => state.resume.sections.profiles);

  return (
    <Section<Profile> section={section}>
      {(item) => (
        <div>
          {isUrl(item.url.href) ? (
            <Link url={item.url} label={item.username} icon={<BrandIcon slug={item.icon} />} />
          ) : (
            <p>{item.username}</p>
          )}
          {!item.icon && <p className="text-sm">{item.network}</p>}
        </div>
      )}
    </Section>
  );
};

const Experience = () => {
  const section = useArtboardStore((state) => state.resume.sections.experience);

  return (
    <Section<Experience> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div>
          <LinkedEntity
            name={item.company}
            url={item.url}
            separateLinks={section.separateLinks}
            className="font-bold"
          />
          <div>{item.position}</div>
          <div>{item.location}</div>
          <div className="font-bold">{item.date}</div>
        </div>
      )}
    </Section>
  );
};

const Education = () => {
  const section = useArtboardStore((state) => state.resume.sections.education);

  return (
    <Section<Education> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div>
          <LinkedEntity
            name={item.institution}
            url={item.url}
            separateLinks={section.separateLinks}
            className="font-bold"
          />
          <div>{item.area}</div>
          <div>{item.score}</div>
          <div>{item.studyType}</div>
          <div className="font-bold">{item.date}</div>
        </div>
      )}
    </Section>
  );
};

const Awards = () => {
  const section = useArtboardStore((state) => state.resume.sections.awards);

  return (
    <Section<Award> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div>
          <div className="font-bold">{item.title}</div>
          <LinkedEntity name={item.awarder} url={item.url} separateLinks={section.separateLinks} />
          <div className="font-bold">{item.date}</div>
        </div>
      )}
    </Section>
  );
};

const Certifications = () => {
  const section = useArtboardStore((state) => state.resume.sections.certifications);

  return (
    <Section<Certification> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div>
          <div className="font-bold">{item.name}</div>
          <LinkedEntity name={item.issuer} url={item.url} separateLinks={section.separateLinks} />
          <div className="font-bold">{item.date}</div>
        </div>
      )}
    </Section>
  );
};

const Skills = () => {
  const section = useArtboardStore((state) => state.resume.sections.skills);

  return (
    <Section<Skill> section={section} levelKey="level" keywordsKey="keywords">
      {(item) => (
        <div>
          <div className="font-bold">{item.name}</div>
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Interests = () => {
  const section = useArtboardStore((state) => state.resume.sections.interests);

  return (
    <Section<Interest> section={section} keywordsKey="keywords" className="space-y-0.5">
      {(item) => <div className="font-bold">{item.name}</div>}
    </Section>
  );
};

const Publications = () => {
  const section = useArtboardStore((state) => state.resume.sections.publications);

  return (
    <Section<Publication> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div>
          <LinkedEntity
            name={item.name}
            url={item.url}
            separateLinks={section.separateLinks}
            className="font-bold"
          />
          <div>{item.publisher}</div>
          <div className="font-bold">{item.date}</div>
        </div>
      )}
    </Section>
  );
};

const Volunteer = () => {
  const section = useArtboardStore((state) => state.resume.sections.volunteer);

  return (
    <Section<Volunteer> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div>
          <LinkedEntity
            name={item.organization}
            url={item.url}
            separateLinks={section.separateLinks}
            className="font-bold"
          />
          <div>{item.position}</div>
          <div>{item.location}</div>
          <div className="font-bold">{item.date}</div>
        </div>
      )}
    </Section>
  );
};

const Languages = () => {
  const section = useArtboardStore((state) => state.resume.sections.languages);

  return (
    <Section<Language> section={section} levelKey="level">
      {(item) => (
        <div>
          <div className="font-bold">{item.name}</div>
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Projects = () => {
  const section = useArtboardStore((state) => state.resume.sections.projects);

  return (
    <Section<Project> section={section} urlKey="url" summaryKey="summary" keywordsKey="keywords">
      {(item) => (
        <div>
          <div>
            <LinkedEntity
              name={item.name}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.description}</div>

            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const References = () => {
  const section = useArtboardStore((state) => state.resume.sections.references);

  return (
    <Section<Reference> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div>
          <LinkedEntity
            name={item.name}
            url={item.url}
            separateLinks={section.separateLinks}
            className="font-bold"
          />
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Custom = ({ id }: { id: string }) => {
  const section = useArtboardStore((state) => state.resume.sections.custom[id]);

  return (
    <Section<CustomSection>
      section={section}
      urlKey="url"
      summaryKey="summary"
      keywordsKey="keywords"
    >
      {(item) => (
        <div>
          <div>
            <LinkedEntity
              name={item.name}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.description}</div>

            <div className="font-bold">{item.date}</div>
            <div>{item.location}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const mapSectionToComponent = (section: SectionKey) => {
  switch (section) {
    case "profiles": {
      return <Profiles />;
    }
    case "summary": {
      return <Summary />;
    }
    case "experience": {
      return <Experience />;
    }
    case "education": {
      return <Education />;
    }
    case "awards": {
      return <Awards />;
    }
    case "certifications": {
      return <Certifications />;
    }
    case "skills": {
      return <Skills />;
    }
    case "interests": {
      return <Interests />;
    }
    case "publications": {
      return <Publications />;
    }
    case "volunteer": {
      return <Volunteer />;
    }
    case "languages": {
      return <Languages />;
    }
    case "projects": {
      return <Projects />;
    }
    case "references": {
      return <References />;
    }
    default: {
      if (section.startsWith("custom.")) return <Custom id={section.split(".")[1]} />;

      return null;
    }
  }
};

export const Azurill = ({ columns, isFirstPage = false }: TemplateProps) => {
  const [main, sidebar] = columns;

  return (
    <div className="p-custom space-y-3">
      {isFirstPage && <Header />}

      <div className="grid grid-cols-3 gap-x-4">
        <div className="sidebar group space-y-4">
          {sidebar.map((section) => (
            <Fragment key={section}>{mapSectionToComponent(section)}</Fragment>
          ))}
        </div>

        <div
          className={cn("main group space-y-4", sidebar.length > 0 ? "col-span-2" : "col-span-3")}
        >
          {main.map((section) => (
            <Fragment key={section}>{mapSectionToComponent(section)}</Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};


================================================
File: apps/artboard/src/templates/bronzor.tsx
================================================
import type {
  Award,
  Certification,
  CustomSection,
  CustomSectionGroup,
  Interest,
  Language,
  Profile,
  Project,
  Publication,
  Reference,
  SectionKey,
  SectionWithItem,
  Skill,
  URL,
} from "@reactive-resume/schema";
import { Education, Experience, Volunteer } from "@reactive-resume/schema";
import { cn, isEmptyString, isUrl, sanitize } from "@reactive-resume/utils";
import get from "lodash.get";
import { Fragment } from "react";

import { BrandIcon } from "../components/brand-icon";
import { Picture } from "../components/picture";
import { useArtboardStore } from "../store/artboard";
import type { TemplateProps } from "../types/template";

const Header = () => {
  const basics = useArtboardStore((state) => state.resume.basics);

  return (
    <div className="flex flex-col items-center space-y-2 text-center">
      <Picture />

      <div>
        <div className="text-2xl font-bold">{basics.name}</div>
        <div className="text-base">{basics.headline}</div>
      </div>

      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm">
        {basics.location && (
          <div className="flex items-center gap-x-1.5">
            <i className="ph ph-bold ph-map-pin text-primary" />
            <div>{basics.location}</div>
          </div>
        )}
        {basics.phone && (
          <div className="flex items-center gap-x-1.5">
            <i className="ph ph-bold ph-phone text-primary" />
            <a href={`tel:${basics.phone}`} target="_blank" rel="noreferrer">
              {basics.phone}
            </a>
          </div>
        )}
        {basics.email && (
          <div className="flex items-center gap-x-1.5">
            <i className="ph ph-bold ph-at text-primary" />
            <a href={`mailto:${basics.email}`} target="_blank" rel="noreferrer">
              {basics.email}
            </a>
          </div>
        )}
        <Link url={basics.url} />
        {basics.customFields.map((item) => (
          <div key={item.id} className="flex items-center gap-x-1.5">
            <i className={cn(`ph ph-bold ph-${item.icon}`, "text-primary")} />
            {isUrl(item.value) ? (
              <a href={item.value} target="_blank" rel="noreferrer noopener nofollow">
                {item.name || item.value}
              </a>
            ) : (
              <span>{[item.name, item.value].filter(Boolean).join(": ")}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Summary = () => {
  const section = useArtboardStore((state) => state.resume.sections.summary);

  if (!section.visible || isEmptyString(section.content)) return null;

  return (
    <section id={section.id} className="grid grid-cols-5 border-t pt-2.5">
      <div>
        <h4 className="text-base font-bold">{section.name}</h4>
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: sanitize(section.content) }}
        style={{ columns: section.columns }}
        className="wysiwyg col-span-4"
      />
    </section>
  );
};

type RatingProps = { level: number };

const Rating = ({ level }: RatingProps) => (
  <div className="flex items-center gap-x-1.5">
    {Array.from({ length: 5 }).map((_, index) => (
      <div
        key={index}
        className={cn("size-2 rounded-full border border-primary", level > index && "bg-primary")}
      />
    ))}
  </div>
);

type LinkProps = {
  url: URL;
  icon?: React.ReactNode;
  iconOnRight?: boolean;
  label?: string;
  className?: string;
};

const Link = ({ url, icon, iconOnRight, label, className }: LinkProps) => {
  if (!isUrl(url.href)) return null;

  return (
    <div className="flex items-center gap-x-1.5">
      {!iconOnRight && (icon ?? <i className="ph ph-bold ph-link text-primary" />)}
      <a
        href={url.href}
        target="_blank"
        rel="noreferrer noopener nofollow"
        className={cn("inline-block", className)}
      >
        {label ?? (url.label || url.href)}
      </a>
      {iconOnRight && (icon ?? <i className="ph ph-bold ph-link text-primary" />)}
    </div>
  );
};

type LinkedEntityProps = {
  name: string;
  url: URL;
  separateLinks: boolean;
  className?: string;
};

const LinkedEntity = ({ name, url, separateLinks, className }: LinkedEntityProps) => {
  return !separateLinks && isUrl(url.href) ? (
    <Link
      url={url}
      label={name}
      icon={<i className="ph ph-bold ph-globe text-primary" />}
      iconOnRight={true}
      className={className}
    />
  ) : (
    <div className={className}>{name}</div>
  );
};

type SectionProps<T> = {
  section: SectionWithItem<T> | CustomSectionGroup;
  children?: (item: T) => React.ReactNode;
  className?: string;
  urlKey?: keyof T;
  levelKey?: keyof T;
  summaryKey?: keyof T;
  keywordsKey?: keyof T;
};

const Section = <T,>({
  section,
  children,
  className,
  urlKey,
  levelKey,
  summaryKey,
  keywordsKey,
}: SectionProps<T>) => {
  if (!section.visible || section.items.length === 0) return null;

  return (
    <section id={section.id} className="grid grid-cols-5 border-t pt-2.5">
      <div>
        <h4 className="text-base font-bold">{section.name}</h4>
      </div>

      <div
        className="col-span-4 grid gap-x-6 gap-y-3"
        style={{ gridTemplateColumns: `repeat(${section.columns}, 1fr)` }}
      >
        {section.items
          .filter((item) => item.visible)
          .map((item) => {
            const url = (urlKey && get(item, urlKey)) as URL | undefined;
            const level = (levelKey && get(item, levelKey, 0)) as number | undefined;
            const summary = (summaryKey && get(item, summaryKey, "")) as string | undefined;
            const keywords = (keywordsKey && get(item, keywordsKey, [])) as string[] | undefined;

            return (
              <div key={item.id} className={cn("space-y-2", className)}>
                <div>
                  {children?.(item as T)}
                  {url !== undefined && section.separateLinks && <Link url={url} />}
                </div>

                {summary !== undefined && !isEmptyString(summary) && (
                  <div
                    dangerouslySetInnerHTML={{ __html: sanitize(summary) }}
                    className="wysiwyg"
                  />
                )}

                {level !== undefined && level > 0 && <Rating level={level} />}

                {keywords !== undefined && keywords.length > 0 && (
                  <p className="text-sm">{keywords.join(", ")}</p>
                )}
              </div>
            );
          })}
      </div>
    </section>
  );
};

const Profiles = () => {
  const section = useArtboardStore((state) => state.resume.sections.profiles);

  return (
    <Section<Profile> section={section}>
      {(item) => (
        <div>
          {isUrl(item.url.href) ? (
            <Link url={item.url} label={item.username} icon={<BrandIcon slug={item.icon} />} />
          ) : (
            <p>{item.username}</p>
          )}
          {!item.icon && <p className="text-sm">{item.network}</p>}
        </div>
      )}
    </Section>
  );
};

const Experience = () => {
  const section = useArtboardStore((state) => state.resume.sections.experience);

  return (
    <Section<Experience> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between">
          <div className="text-left">
            <LinkedEntity
              name={item.company}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.position}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
            <div>{item.location}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Education = () => {
  const section = useArtboardStore((state) => state.resume.sections.education);

  return (
    <Section<Education> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between">
          <div className="text-left">
            <LinkedEntity
              name={item.institution}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.area}</div>
            <div>{item.score}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
            <div>{item.studyType}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Awards = () => {
  const section = useArtboardStore((state) => state.resume.sections.awards);

  return (
    <Section<Award> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between">
          <div className="text-left">
            <div className="font-bold">{item.title}</div>
            <LinkedEntity
              name={item.awarder}
              url={item.url}
              separateLinks={section.separateLinks}
            />
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Certifications = () => {
  const section = useArtboardStore((state) => state.resume.sections.certifications);

  return (
    <Section<Certification> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between">
          <div className="text-left">
            <div className="font-bold">{item.name}</div>
            <LinkedEntity name={item.issuer} url={item.url} separateLinks={section.separateLinks} />
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Skills = () => {
  const section = useArtboardStore((state) => state.resume.sections.skills);

  return (
    <Section<Skill> section={section} levelKey="level" keywordsKey="keywords">
      {(item) => (
        <div className="space-y-0.5">
          <div className="font-bold">{item.name}</div>
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Interests = () => {
  const section = useArtboardStore((state) => state.resume.sections.interests);

  return (
    <Section<Interest> section={section} keywordsKey="keywords" className="space-y-0.5">
      {(item) => <div className="font-bold">{item.name}</div>}
    </Section>
  );
};

const Publications = () => {
  const section = useArtboardStore((state) => state.resume.sections.publications);

  return (
    <Section<Publication> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between">
          <div className="text-left">
            <LinkedEntity
              name={item.name}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.publisher}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Volunteer = () => {
  const section = useArtboardStore((state) => state.resume.sections.volunteer);

  return (
    <Section<Volunteer> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between">
          <div className="text-left">
            <LinkedEntity
              name={item.organization}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.position}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
            <div>{item.location}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Languages = () => {
  const section = useArtboardStore((state) => state.resume.sections.languages);

  return (
    <Section<Language> section={section} levelKey="level">
      {(item) => (
        <div className="space-y-0.5">
          <div className="font-bold">{item.name}</div>
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Projects = () => {
  const section = useArtboardStore((state) => state.resume.sections.projects);

  return (
    <Section<Project> section={section} urlKey="url" summaryKey="summary" keywordsKey="keywords">
      {(item) => (
        <div className="flex items-start justify-between">
          <div className="text-left">
            <LinkedEntity
              name={item.name}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.description}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const References = () => {
  const section = useArtboardStore((state) => state.resume.sections.references);

  return (
    <Section<Reference> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div>
          <LinkedEntity
            name={item.name}
            url={item.url}
            separateLinks={section.separateLinks}
            className="font-bold"
          />
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Custom = ({ id }: { id: string }) => {
  const section = useArtboardStore((state) => state.resume.sections.custom[id]);

  return (
    <Section<CustomSection>
      section={section}
      urlKey="url"
      summaryKey="summary"
      keywordsKey="keywords"
    >
      {(item) => (
        <div className="flex items-start justify-between">
          <div className="text-left">
            <LinkedEntity
              name={item.name}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.description}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
            <div>{item.location}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const mapSectionToComponent = (section: SectionKey) => {
  switch (section) {
    case "profiles": {
      return <Profiles />;
    }
    case "summary": {
      return <Summary />;
    }
    case "experience": {
      return <Experience />;
    }
    case "education": {
      return <Education />;
    }
    case "awards": {
      return <Awards />;
    }
    case "certifications": {
      return <Certifications />;
    }
    case "skills": {
      return <Skills />;
    }
    case "interests": {
      return <Interests />;
    }
    case "publications": {
      return <Publications />;
    }
    case "volunteer": {
      return <Volunteer />;
    }
    case "languages": {
      return <Languages />;
    }
    case "projects": {
      return <Projects />;
    }
    case "references": {
      return <References />;
    }
    default: {
      if (section.startsWith("custom.")) return <Custom id={section.split(".")[1]} />;

      return null;
    }
  }
};

export const Bronzor = ({ columns, isFirstPage = false }: TemplateProps) => {
  const [main, sidebar] = columns;

  return (
    <div className="p-custom space-y-4">
      {isFirstPage && <Header />}

      <div className="space-y-4">
        {main.map((section) => (
          <Fragment key={section}>{mapSectionToComponent(section)}</Fragment>
        ))}

        {sidebar.map((section) => (
          <Fragment key={section}>{mapSectionToComponent(section)}</Fragment>
        ))}
      </div>
    </div>
  );
};


================================================
File: apps/artboard/src/templates/chikorita.tsx
================================================
import type {
  Award,
  Certification,
  CustomSection,
  CustomSectionGroup,
  Interest,
  Language,
  Profile,
  Project,
  Publication,
  Reference,
  SectionKey,
  SectionWithItem,
  Skill,
  URL,
} from "@reactive-resume/schema";
import { Education, Experience, Volunteer } from "@reactive-resume/schema";
import { cn, isEmptyString, isUrl, sanitize } from "@reactive-resume/utils";
import get from "lodash.get";
import { Fragment } from "react";

import { BrandIcon } from "../components/brand-icon";
import { Picture } from "../components/picture";
import { useArtboardStore } from "../store/artboard";
import type { TemplateProps } from "../types/template";

const Header = () => {
  const basics = useArtboardStore((state) => state.resume.basics);

  return (
    <div className="flex items-center space-x-4">
      <Picture />

      <div className="space-y-2">
        <div>
          <div className="text-2xl font-bold">{basics.name}</div>
          <div className="text-base">{basics.headline}</div>
        </div>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm">
          {basics.location && (
            <div className="flex items-center gap-x-1.5">
              <i className="ph ph-bold ph-map-pin text-primary" />
              <div>{basics.location}</div>
            </div>
          )}
          {basics.phone && (
            <div className="flex items-center gap-x-1.5">
              <i className="ph ph-bold ph-phone text-primary" />
              <a href={`tel:${basics.phone}`} target="_blank" rel="noreferrer">
                {basics.phone}
              </a>
            </div>
          )}
          {basics.email && (
            <div className="flex items-center gap-x-1.5">
              <i className="ph ph-bold ph-at text-primary" />
              <a href={`mailto:${basics.email}`} target="_blank" rel="noreferrer">
                {basics.email}
              </a>
            </div>
          )}
          <Link url={basics.url} />
          {basics.customFields.map((item) => (
            <div key={item.id} className="flex items-center gap-x-1.5">
              <i className={cn(`ph ph-bold ph-${item.icon}`, "text-primary")} />
              {isUrl(item.value) ? (
                <a href={item.value} target="_blank" rel="noreferrer noopener nofollow">
                  {item.name || item.value}
                </a>
              ) : (
                <span>{[item.name, item.value].filter(Boolean).join(": ")}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Summary = () => {
  const section = useArtboardStore((state) => state.resume.sections.summary);

  if (!section.visible || isEmptyString(section.content)) return null;

  return (
    <section id={section.id}>
      <h4 className="mb-2 border-b pb-0.5 text-sm font-bold">{section.name}</h4>

      <div
        dangerouslySetInnerHTML={{ __html: sanitize(section.content) }}
        style={{ columns: section.columns }}
        className="wysiwyg"
      />
    </section>
  );
};

type RatingProps = { level: number };

const Rating = ({ level }: RatingProps) => (
  <div className="flex items-center gap-x-1.5">
    {Array.from({ length: 5 }).map((_, index) => (
      <div
        key={index}
        className={cn(
          "size-2 rounded-full border border-primary group-[.sidebar]:border-background",
          level > index && "bg-primary group-[.sidebar]:bg-background",
        )}
      />
    ))}
  </div>
);

type LinkProps = {
  url: URL;
  icon?: React.ReactNode;
  iconOnRight?: boolean;
  label?: string;
  className?: string;
};

const Link = ({ url, icon, iconOnRight, label, className }: LinkProps) => {
  if (!isUrl(url.href)) return null;

  return (
    <div className="flex items-center gap-x-1.5">
      {!iconOnRight &&
        (icon ?? <i className="ph ph-bold ph-link text-primary group-[.sidebar]:text-white" />)}
      <a
        href={url.href}
        target="_blank"
        rel="noreferrer noopener nofollow"
        className={cn("inline-block", className)}
      >
        {label ?? (url.label || url.href)}
      </a>
      {iconOnRight &&
        (icon ?? <i className="ph ph-bold ph-link text-primary group-[.sidebar]:text-white" />)}
    </div>
  );
};

type LinkedEntityProps = {
  name: string;
  url: URL;
  separateLinks: boolean;
  className?: string;
};

const LinkedEntity = ({ name, url, separateLinks, className }: LinkedEntityProps) => {
  return !separateLinks && isUrl(url.href) ? (
    <Link
      url={url}
      label={name}
      icon={<i className="ph ph-bold ph-globe text-primary" />}
      iconOnRight={true}
      className={className}
    />
  ) : (
    <div className={className}>{name}</div>
  );
};

type SectionProps<T> = {
  section: SectionWithItem<T> | CustomSectionGroup;
  children?: (item: T) => React.ReactNode;
  className?: string;
  urlKey?: keyof T;
  levelKey?: keyof T;
  summaryKey?: keyof T;
  keywordsKey?: keyof T;
};

const Section = <T,>({
  section,
  children,
  className,
  urlKey,
  levelKey,
  summaryKey,
  keywordsKey,
}: SectionProps<T>) => {
  if (!section.visible || section.items.length === 0) return null;

  return (
    <section id={section.id} className="grid">
      <h4 className="mb-2 border-b pb-0.5 text-sm font-bold">{section.name}</h4>

      <div
        className="grid gap-x-6 gap-y-3"
        style={{ gridTemplateColumns: `repeat(${section.columns}, 1fr)` }}
      >
        {section.items
          .filter((item) => item.visible)
          .map((item) => {
            const url = (urlKey && get(item, urlKey)) as URL | undefined;
            const level = (levelKey && get(item, levelKey, 0)) as number | undefined;
            const summary = (summaryKey && get(item, summaryKey, "")) as string | undefined;
            const keywords = (keywordsKey && get(item, keywordsKey, [])) as string[] | undefined;

            return (
              <div key={item.id} className={cn("space-y-2", className)}>
                <div>
                  {children?.(item as T)}
                  {url !== undefined && section.separateLinks && <Link url={url} />}
                </div>

                {summary !== undefined && !isEmptyString(summary) && (
                  <div
                    dangerouslySetInnerHTML={{ __html: sanitize(summary) }}
                    className="wysiwyg group-[.sidebar]:prose-invert"
                  />
                )}

                {level !== undefined && level > 0 && <Rating level={level} />}

                {keywords !== undefined && keywords.length > 0 && (
                  <p className="text-sm">{keywords.join(", ")}</p>
                )}
              </div>
            );
          })}
      </div>
    </section>
  );
};

const Experience = () => {
  const section = useArtboardStore((state) => state.resume.sections.experience);

  return (
    <Section<Experience> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <LinkedEntity
              name={item.company}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.position}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
            <div>{item.location}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Education = () => {
  const section = useArtboardStore((state) => state.resume.sections.education);

  return (
    <Section<Education> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <LinkedEntity
              name={item.institution}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.area}</div>
            <div>{item.score}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
            <div>{item.studyType}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Profiles = () => {
  const section = useArtboardStore((state) => state.resume.sections.profiles);

  return (
    <Section<Profile> section={section}>
      {(item) => (
        <div>
          {isUrl(item.url.href) ? (
            <Link url={item.url} label={item.username} icon={<BrandIcon slug={item.icon} />} />
          ) : (
            <p>{item.username}</p>
          )}
          {!item.icon && <p className="text-sm">{item.network}</p>}
        </div>
      )}
    </Section>
  );
};

const Awards = () => {
  const section = useArtboardStore((state) => state.resume.sections.awards);

  return (
    <Section<Award> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <div className="font-bold">{item.title}</div>
            <LinkedEntity
              name={item.awarder}
              url={item.url}
              separateLinks={section.separateLinks}
            />
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Certifications = () => {
  const section = useArtboardStore((state) => state.resume.sections.certifications);

  return (
    <Section<Certification> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <div className="font-bold">{item.name}</div>
            <LinkedEntity name={item.issuer} url={item.url} separateLinks={section.separateLinks} />
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Skills = () => {
  const section = useArtboardStore((state) => state.resume.sections.skills);

  return (
    <Section<Skill> section={section} levelKey="level" keywordsKey="keywords">
      {(item) => (
        <div>
          <div className="font-bold">{item.name}</div>
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Interests = () => {
  const section = useArtboardStore((state) => state.resume.sections.interests);

  return (
    <Section<Interest> section={section} keywordsKey="keywords" className="space-y-0.5">
      {(item) => <div className="font-bold">{item.name}</div>}
    </Section>
  );
};

const Publications = () => {
  const section = useArtboardStore((state) => state.resume.sections.publications);

  return (
    <Section<Publication> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <LinkedEntity
              name={item.name}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.publisher}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Volunteer = () => {
  const section = useArtboardStore((state) => state.resume.sections.volunteer);

  return (
    <Section<Volunteer> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <LinkedEntity
              name={item.organization}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.position}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
            <div>{item.location}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Languages = () => {
  const section = useArtboardStore((state) => state.resume.sections.languages);

  return (
    <Section<Language> section={section} levelKey="level">
      {(item) => (
        <div className="space-y-0.5">
          <div className="font-bold">{item.name}</div>
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Projects = () => {
  const section = useArtboardStore((state) => state.resume.sections.projects);

  return (
    <Section<Project> section={section} urlKey="url" summaryKey="summary" keywordsKey="keywords">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <LinkedEntity
              name={item.name}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.description}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const References = () => {
  const section = useArtboardStore((state) => state.resume.sections.references);

  return (
    <Section<Reference> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div>
          <LinkedEntity
            name={item.name}
            url={item.url}
            separateLinks={section.separateLinks}
            className="font-bold"
          />
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Custom = ({ id }: { id: string }) => {
  const section = useArtboardStore((state) => state.resume.sections.custom[id]);

  return (
    <Section<CustomSection>
      section={section}
      urlKey="url"
      summaryKey="summary"
      keywordsKey="keywords"
    >
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <LinkedEntity
              name={item.name}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.description}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
            <div>{item.location}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const mapSectionToComponent = (section: SectionKey) => {
  switch (section) {
    case "profiles": {
      return <Profiles />;
    }
    case "summary": {
      return <Summary />;
    }
    case "experience": {
      return <Experience />;
    }
    case "education": {
      return <Education />;
    }
    case "awards": {
      return <Awards />;
    }
    case "certifications": {
      return <Certifications />;
    }
    case "skills": {
      return <Skills />;
    }
    case "interests": {
      return <Interests />;
    }
    case "publications": {
      return <Publications />;
    }
    case "volunteer": {
      return <Volunteer />;
    }
    case "languages": {
      return <Languages />;
    }
    case "projects": {
      return <Projects />;
    }
    case "references": {
      return <References />;
    }
    default: {
      if (section.startsWith("custom.")) return <Custom id={section.split(".")[1]} />;

      return null;
    }
  }
};

export const Chikorita = ({ columns, isFirstPage = false }: TemplateProps) => {
  const [main, sidebar] = columns;

  return (
    <div className="grid min-h-[inherit] grid-cols-3">
      <div
        className={cn(
          "main p-custom group space-y-4",
          sidebar.length > 0 ? "col-span-2" : "col-span-3",
        )}
      >
        {isFirstPage && <Header />}

        {main.map((section) => (
          <Fragment key={section}>{mapSectionToComponent(section)}</Fragment>
        ))}
      </div>

      <div
        className={cn(
          "sidebar p-custom group h-full space-y-4 bg-primary text-background",
          sidebar.length === 0 && "hidden",
        )}
      >
        {sidebar.map((section) => (
          <Fragment key={section}>{mapSectionToComponent(section)}</Fragment>
        ))}
      </div>
    </div>
  );
};


================================================
File: apps/artboard/src/templates/ditto.tsx
================================================
import type {
  Award,
  Certification,
  CustomSection,
  CustomSectionGroup,
  Interest,
  Language,
  Profile,
  Project,
  Publication,
  Reference,
  SectionKey,
  SectionWithItem,
  Skill,
  URL,
} from "@reactive-resume/schema";
import { Education, Experience, Volunteer } from "@reactive-resume/schema";
import { cn, isEmptyString, isUrl, sanitize } from "@reactive-resume/utils";
import get from "lodash.get";
import { Fragment } from "react";

import { BrandIcon } from "../components/brand-icon";
import { Picture } from "../components/picture";
import { useArtboardStore } from "../store/artboard";
import type { TemplateProps } from "../types/template";

const Header = () => {
  const basics = useArtboardStore((state) => state.resume.basics);

  return (
    <div className="p-custom relative grid grid-cols-3 space-x-4 pb-0">
      <Picture className="mx-auto" />

      <div className="relative z-10 col-span-2 text-background">
        <div className="space-y-0.5">
          <h2 className="text-3xl font-bold">{basics.name}</h2>
          <p>{basics.headline}</p>
        </div>

        <div className="col-span-2 col-start-2 mt-10 text-foreground">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm">
            {basics.location && (
              <>
                <div className="flex items-center gap-x-1.5">
                  <i className="ph ph-bold ph-map-pin text-primary" />
                  <div>{basics.location}</div>
                </div>
                <div className="bg-text size-1 rounded-full last:hidden" />
              </>
            )}

            {basics.phone && (
              <>
                <div className="flex items-center gap-x-1.5">
                  <i className="ph ph-bold ph-phone text-primary" />
                  <a href={`tel:${basics.phone}`} target="_blank" rel="noreferrer">
                    {basics.phone}
                  </a>
                </div>
                <div className="bg-text size-1 rounded-full last:hidden" />
              </>
            )}
            {basics.email && (
              <>
                <div className="flex items-center gap-x-1.5">
                  <i className="ph ph-bold ph-at text-primary" />
                  <a href={`mailto:${basics.email}`} target="_blank" rel="noreferrer">
                    {basics.email}
                  </a>
                </div>
                <div className="bg-text size-1 rounded-full last:hidden" />
              </>
            )}
            {isUrl(basics.url.href) && (
              <>
                <Link url={basics.url} />
                <div className="bg-text size-1 rounded-full last:hidden" />
              </>
            )}
            {basics.customFields.map((item) => (
              <Fragment key={item.id}>
                <div className="flex items-center gap-x-1.5">
                  <i className={cn(`ph ph-bold ph-${item.icon}`, "text-primary")} />
                  {isUrl(item.value) ? (
                    <a href={item.value} target="_blank" rel="noreferrer noopener nofollow">
                      {item.name || item.value}
                    </a>
                  ) : (
                    <span>{[item.name, item.value].filter(Boolean).join(": ")}</span>
                  )}
                </div>
                <div className="bg-text size-1 rounded-full last:hidden" />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Summary = () => {
  const section = useArtboardStore((state) => state.resume.sections.summary);

  if (!section.visible || isEmptyString(section.content)) return null;

  return (
    <section id={section.id}>
      <h4 className="mb-2 text-base font-bold">{section.name}</h4>

      <div
        dangerouslySetInnerHTML={{ __html: sanitize(section.content) }}
        style={{ columns: section.columns }}
        className="wysiwyg"
      />
    </section>
  );
};

type RatingProps = { level: number };

const Rating = ({ level }: RatingProps) => (
  <div className="flex items-center gap-x-1.5">
    {Array.from({ length: 5 }).map((_, index) => (
      <div
        key={index}
        className={cn("h-2 w-4 border border-primary", level > index && "bg-primary")}
      />
    ))}
  </div>
);

type LinkProps = {
  url: URL;
  icon?: React.ReactNode;
  iconOnRight?: boolean;
  label?: string;
  className?: string;
};

const Link = ({ url, icon, iconOnRight, label, className }: LinkProps) => {
  if (!isUrl(url.href)) return null;

  return (
    <div className="flex items-center gap-x-1.5">
      {!iconOnRight && (icon ?? <i className="ph ph-bold ph-link text-primary" />)}
      <a
        href={url.href}
        target="_blank"
        rel="noreferrer noopener nofollow"
        className={cn("inline-block", className)}
      >
        {label ?? (url.label || url.href)}
      </a>
      {iconOnRight && (icon ?? <i className="ph ph-bold ph-link text-primary" />)}
    </div>
  );
};

type LinkedEntityProps = {
  name: string;
  url: URL;
  separateLinks: boolean;
  className?: string;
};

const LinkedEntity = ({ name, url, separateLinks, className }: LinkedEntityProps) => {
  return !separateLinks && isUrl(url.href) ? (
    <Link
      url={url}
      label={name}
      icon={<i className="ph ph-bold ph-globe text-primary" />}
      iconOnRight={true}
      className={className}
    />
  ) : (
    <div className={className}>{name}</div>
  );
};

type SectionProps<T> = {
  section: SectionWithItem<T> | CustomSectionGroup;
  children?: (item: T) => React.ReactNode;
  className?: string;
  urlKey?: keyof T;
  levelKey?: keyof T;
  summaryKey?: keyof T;
  keywordsKey?: keyof T;
};

const Section = <T,>({
  section,
  children,
  className,
  urlKey,
  levelKey,
  summaryKey,
  keywordsKey,
}: SectionProps<T>) => {
  if (!section.visible || section.items.length === 0) return null;

  return (
    <section id={section.id} className="grid">
      <h4 className="mb-2 text-base font-bold">{section.name}</h4>

      <div
        className="grid gap-x-6 gap-y-3"
        style={{ gridTemplateColumns: `repeat(${section.columns}, 1fr)` }}
      >
        {section.items
          .filter((item) => item.visible)
          .map((item) => {
            const url = (urlKey && get(item, urlKey)) as URL | undefined;
            const level = (levelKey && get(item, levelKey, 0)) as number | undefined;
            const summary = (summaryKey && get(item, summaryKey, "")) as string | undefined;
            const keywords = (keywordsKey && get(item, keywordsKey, [])) as string[] | undefined;

            return (
              <div
                key={item.id}
                className={cn("relative space-y-2 pl-4 group-[.sidebar]:pl-0", className)}
              >
                <div className="relative -ml-4 group-[.sidebar]:ml-0">
                  <div className="pl-4 group-[.sidebar]:pl-0">
                    {children?.(item as T)}
                    {url !== undefined && section.separateLinks && <Link url={url} />}
                  </div>

                  <div className="absolute inset-y-0 -left-px border-l-4 border-primary group-[.sidebar]:hidden" />
                </div>

                {summary !== undefined && !isEmptyString(summary) && (
                  <div
                    dangerouslySetInnerHTML={{ __html: sanitize(summary) }}
                    className="wysiwyg"
                  />
                )}

                {level !== undefined && level > 0 && <Rating level={level} />}

                {keywords !== undefined && keywords.length > 0 && (
                  <p className="text-sm">{keywords.join(", ")}</p>
                )}

                <div className="absolute inset-y-0 left-0 border-l border-primary group-[.sidebar]:hidden" />
              </div>
            );
          })}
      </div>
    </section>
  );
};

const Profiles = () => {
  const section = useArtboardStore((state) => state.resume.sections.profiles);

  return (
    <Section<Profile> section={section}>
      {(item) => (
        <div>
          {isUrl(item.url.href) ? (
            <Link url={item.url} label={item.username} icon={<BrandIcon slug={item.icon} />} />
          ) : (
            <p>{item.username}</p>
          )}
          {!item.icon && <p className="text-sm">{item.network}</p>}
        </div>
      )}
    </Section>
  );
};

const Experience = () => {
  const section = useArtboardStore((state) => state.resume.sections.experience);

  return (
    <Section<Experience> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <LinkedEntity
              name={item.company}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.position}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
            <div>{item.location}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Education = () => {
  const section = useArtboardStore((state) => state.resume.sections.education);

  return (
    <Section<Education> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <LinkedEntity
              name={item.institution}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.area}</div>
            <div>{item.score}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
            <div>{item.studyType}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Awards = () => {
  const section = useArtboardStore((state) => state.resume.sections.awards);

  return (
    <Section<Award> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <div className="font-bold">{item.title}</div>
            <LinkedEntity
              name={item.awarder}
              url={item.url}
              separateLinks={section.separateLinks}
            />
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Certifications = () => {
  const section = useArtboardStore((state) => state.resume.sections.certifications);

  return (
    <Section<Certification> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <div className="font-bold">{item.name}</div>
            <LinkedEntity name={item.issuer} url={item.url} separateLinks={section.separateLinks} />
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Skills = () => {
  const section = useArtboardStore((state) => state.resume.sections.skills);

  return (
    <Section<Skill> section={section} levelKey="level" keywordsKey="keywords">
      {(item) => (
        <div>
          <div className="font-bold">{item.name}</div>
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Interests = () => {
  const section = useArtboardStore((state) => state.resume.sections.interests);

  return (
    <Section<Interest> section={section} className="space-y-0" keywordsKey="keywords">
      {(item) => <div className="font-bold">{item.name}</div>}
    </Section>
  );
};

const Publications = () => {
  const section = useArtboardStore((state) => state.resume.sections.publications);

  return (
    <Section<Publication> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <LinkedEntity
              name={item.name}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.publisher}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Volunteer = () => {
  const section = useArtboardStore((state) => state.resume.sections.volunteer);

  return (
    <Section<Volunteer> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <LinkedEntity
              name={item.organization}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.position}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
            <div>{item.location}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Languages = () => {
  const section = useArtboardStore((state) => state.resume.sections.languages);

  return (
    <Section<Language> section={section} levelKey="level">
      {(item) => (
        <div>
          <div className="font-bold">{item.name}</div>
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Projects = () => {
  const section = useArtboardStore((state) => state.resume.sections.projects);

  return (
    <Section<Project> section={section} urlKey="url" summaryKey="summary" keywordsKey="keywords">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <LinkedEntity
              name={item.name}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.description}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const References = () => {
  const section = useArtboardStore((state) => state.resume.sections.references);

  return (
    <Section<Reference> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div>
          <LinkedEntity
            name={item.name}
            url={item.url}
            separateLinks={section.separateLinks}
            className="font-bold"
          />
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Custom = ({ id }: { id: string }) => {
  const section = useArtboardStore((state) => state.resume.sections.custom[id]);

  return (
    <Section<CustomSection>
      section={section}
      urlKey="url"
      summaryKey="summary"
      keywordsKey="keywords"
    >
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <LinkedEntity
              name={item.name}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.description}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
            <div>{item.location}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const mapSectionToComponent = (section: SectionKey) => {
  switch (section) {
    case "profiles": {
      return <Profiles />;
    }
    case "summary": {
      return <Summary />;
    }
    case "experience": {
      return <Experience />;
    }
    case "education": {
      return <Education />;
    }
    case "awards": {
      return <Awards />;
    }
    case "certifications": {
      return <Certifications />;
    }
    case "skills": {
      return <Skills />;
    }
    case "interests": {
      return <Interests />;
    }
    case "publications": {
      return <Publications />;
    }
    case "volunteer": {
      return <Volunteer />;
    }
    case "languages": {
      return <Languages />;
    }
    case "projects": {
      return <Projects />;
    }
    case "references": {
      return <References />;
    }
    default: {
      if (section.startsWith("custom.")) return <Custom id={section.split(".")[1]} />;

      return null;
    }
  }
};

export const Ditto = ({ columns, isFirstPage = false }: TemplateProps) => {
  const [main, sidebar] = columns;

  return (
    <div>
      {isFirstPage && (
        <div className="relative">
          <Header />
          <div className="absolute inset-x-0 top-0 h-[85px] w-full bg-primary" />
        </div>
      )}

      <div className="grid grid-cols-3">
        <div className="sidebar p-custom group space-y-4">
          {sidebar.map((section) => (
            <Fragment key={section}>{mapSectionToComponent(section)}</Fragment>
          ))}
        </div>

        <div
          className={cn(
            "main p-custom group space-y-4",
            sidebar.length > 0 ? "col-span-2" : "col-span-3",
          )}
        >
          {main.map((section) => (
            <Fragment key={section}>{mapSectionToComponent(section)}</Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};


================================================
File: apps/artboard/src/templates/gengar.tsx
================================================
import type {
  Award,
  Certification,
  CustomSection,
  CustomSectionGroup,
  Interest,
  Language,
  Profile,
  Project,
  Publication,
  Reference,
  SectionKey,
  SectionWithItem,
  Skill,
  URL,
} from "@reactive-resume/schema";
import { Education, Experience, Volunteer } from "@reactive-resume/schema";
import { cn, hexToRgb, isEmptyString, isUrl, sanitize } from "@reactive-resume/utils";
import get from "lodash.get";
import { Fragment } from "react";

import { BrandIcon } from "../components/brand-icon";
import { Picture } from "../components/picture";
import { useArtboardStore } from "../store/artboard";
import type { TemplateProps } from "../types/template";

const Header = () => {
  const basics = useArtboardStore((state) => state.resume.basics);

  return (
    <div className="p-custom space-y-4 bg-primary text-background">
      <Picture className="border-background" />

      <div>
        <h2 className="text-2xl font-bold">{basics.name}</h2>
        <p>{basics.headline}</p>
      </div>

      <div className="flex flex-col items-start gap-y-2 text-sm">
        {basics.location && (
          <div className="flex items-center gap-x-1.5">
            <i className="ph ph-bold ph-map-pin" />
            <div>{basics.location}</div>
          </div>
        )}
        {basics.phone && (
          <div className="flex items-center gap-x-1.5">
            <i className="ph ph-bold ph-phone" />
            <a href={`tel:${basics.phone}`} target="_blank" rel="noreferrer">
              {basics.phone}
            </a>
          </div>
        )}
        {basics.email && (
          <div className="flex items-center gap-x-1.5">
            <i className="ph ph-bold ph-at" />
            <a href={`mailto:${basics.email}`} target="_blank" rel="noreferrer">
              {basics.email}
            </a>
          </div>
        )}
        {isUrl(basics.url.href) && <Link url={basics.url} />}
        {basics.customFields.map((item) => (
          <Fragment key={item.id}>
            <div className="flex items-center gap-x-1.5">
              <i className={cn(`ph ph-bold ph-${item.icon}`)} />
              {isUrl(item.value) ? (
                <a href={item.value} target="_blank" rel="noreferrer noopener nofollow">
                  {item.name || item.value}
                </a>
              ) : (
                <span>{[item.name, item.value].filter(Boolean).join(": ")}</span>
              )}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

const Summary = () => {
  const section = useArtboardStore((state) => state.resume.sections.summary);
  const primaryColor = useArtboardStore((state) => state.resume.metadata.theme.primary);

  if (!section.visible || isEmptyString(section.content)) return null;

  return (
    <div className="p-custom space-y-4" style={{ backgroundColor: hexToRgb(primaryColor, 0.2) }}>
      <section id={section.id}>
        <div
          dangerouslySetInnerHTML={{ __html: sanitize(section.content) }}
          style={{ columns: section.columns }}
          className="wysiwyg"
        />
      </section>
    </div>
  );
};

type RatingProps = { level: number };

const Rating = ({ level }: RatingProps) => (
  <div className="flex items-center gap-x-1">
    {Array.from({ length: 5 }).map((_, index) => (
      <div
        key={index}
        className={cn("h-2.5 w-5 border border-primary", level > index && "bg-primary")}
      />
    ))}
  </div>
);

type LinkProps = {
  url: URL;
  icon?: React.ReactNode;
  iconOnRight?: boolean;
  label?: string;
  className?: string;
};

const Link = ({ url, icon, iconOnRight, label, className }: LinkProps) => {
  if (!isUrl(url.href)) return null;

  return (
    <div className="flex items-center gap-x-1.5">
      {!iconOnRight &&
        (icon ?? (
          <i className="ph ph-bold ph-link text-primary group-[.sidebar]:text-background" />
        ))}
      <a
        href={url.href}
        target="_blank"
        rel="noreferrer noopener nofollow"
        className={cn("inline-block", className)}
      >
        {label ?? (url.label || url.href)}
      </a>
      {iconOnRight &&
        (icon ?? (
          <i className="ph ph-bold ph-link text-primary group-[.sidebar]:text-background" />
        ))}
    </div>
  );
};

type LinkedEntityProps = {
  name: string;
  url: URL;
  separateLinks: boolean;
  className?: string;
};

const LinkedEntity = ({ name, url, separateLinks, className }: LinkedEntityProps) => {
  return !separateLinks && isUrl(url.href) ? (
    <Link
      url={url}
      label={name}
      icon={<i className="ph ph-bold ph-globe text-primary group-[.sidebar]:text-primary" />}
      iconOnRight={true}
      className={className}
    />
  ) : (
    <div className={className}>{name}</div>
  );
};

type SectionProps<T> = {
  section: SectionWithItem<T> | CustomSectionGroup;
  children?: (item: T) => React.ReactNode;
  className?: string;
  urlKey?: keyof T;
  levelKey?: keyof T;
  summaryKey?: keyof T;
  keywordsKey?: keyof T;
};

const Section = <T,>({
  section,
  children,
  className,
  urlKey,
  levelKey,
  summaryKey,
  keywordsKey,
}: SectionProps<T>) => {
  if (!section.visible || section.items.length === 0) return null;

  return (
    <section id={section.id} className="grid">
      <h4 className="mb-2 border-b border-primary text-base font-bold">{section.name}</h4>

      <div
        className="grid gap-x-6 gap-y-3"
        style={{ gridTemplateColumns: `repeat(${section.columns}, 1fr)` }}
      >
        {section.items
          .filter((item) => item.visible)
          .map((item) => {
            const url = (urlKey && get(item, urlKey)) as URL | undefined;
            const level = (levelKey && get(item, levelKey, 0)) as number | undefined;
            const summary = (summaryKey && get(item, summaryKey, "")) as string | undefined;
            const keywords = (keywordsKey && get(item, keywordsKey, [])) as string[] | undefined;

            return (
              <div key={item.id} className={cn("space-y-2", className)}>
                <div>
                  {children?.(item as T)}
                  {url !== undefined && section.separateLinks && <Link url={url} />}
                </div>

                {summary !== undefined && !isEmptyString(summary) && (
                  <div
                    dangerouslySetInnerHTML={{ __html: sanitize(summary) }}
                    className="wysiwyg"
                  />
                )}

                {level !== undefined && level > 0 && <Rating level={level} />}

                {keywords !== undefined && keywords.length > 0 && (
                  <p className="text-sm">{keywords.join(", ")}</p>
                )}
              </div>
            );
          })}
      </div>
    </section>
  );
};

const Profiles = () => {
  const section = useArtboardStore((state) => state.resume.sections.profiles);

  return (
    <Section<Profile> section={section}>
      {(item) => (
        <div>
          {isUrl(item.url.href) ? (
            <Link url={item.url} label={item.username} icon={<BrandIcon slug={item.icon} />} />
          ) : (
            <p>{item.username}</p>
          )}
          {!item.icon && <p className="text-sm">{item.network}</p>}
        </div>
      )}
    </Section>
  );
};

const Experience = () => {
  const section = useArtboardStore((state) => state.resume.sections.experience);

  return (
    <Section<Experience> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <LinkedEntity
              name={item.company}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.position}</div>
          </div>

          <div className="shrink-0 text-right group-[.sidebar]:text-left">
            <div className="font-bold">{item.date}</div>
            <div>{item.location}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Education = () => {
  const section = useArtboardStore((state) => state.resume.sections.education);

  return (
    <Section<Education> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <LinkedEntity
              name={item.institution}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.area}</div>
            <div>{item.score}</div>
          </div>

          <div className="shrink-0 text-right group-[.sidebar]:text-left">
            <div className="font-bold">{item.date}</div>
            <div>{item.studyType}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Awards = () => {
  const section = useArtboardStore((state) => state.resume.sections.awards);

  return (
    <Section<Award> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <div className="font-bold">{item.title}</div>
            <LinkedEntity
              name={item.awarder}
              url={item.url}
              separateLinks={section.separateLinks}
            />
          </div>

          <div className="shrink-0 text-right group-[.sidebar]:text-left">
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Certifications = () => {
  const section = useArtboardStore((state) => state.resume.sections.certifications);

  return (
    <Section<Certification> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <div className="font-bold">{item.name}</div>
            <LinkedEntity name={item.issuer} url={item.url} separateLinks={section.separateLinks} />
          </div>

          <div className="shrink-0 text-right group-[.sidebar]:text-left">
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Skills = () => {
  const section = useArtboardStore((state) => state.resume.sections.skills);

  return (
    <Section<Skill> section={section} levelKey="level" keywordsKey="keywords">
      {(item) => (
        <div>
          <div className="font-bold">{item.name}</div>
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Interests = () => {
  const section = useArtboardStore((state) => state.resume.sections.interests);

  return (
    <Section<Interest> section={section} className="space-y-1" keywordsKey="keywords">
      {(item) => <div className="font-bold">{item.name}</div>}
    </Section>
  );
};

const Publications = () => {
  const section = useArtboardStore((state) => state.resume.sections.publications);

  return (
    <Section<Publication> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <LinkedEntity
              name={item.name}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.publisher}</div>
          </div>

          <div className="shrink-0 text-right group-[.sidebar]:text-left">
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Volunteer = () => {
  const section = useArtboardStore((state) => state.resume.sections.volunteer);

  return (
    <Section<Volunteer> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <LinkedEntity
              name={item.organization}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.position}</div>
          </div>

          <div className="shrink-0 text-right group-[.sidebar]:text-left">
            <div className="font-bold">{item.date}</div>
            <div>{item.location}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Languages = () => {
  const section = useArtboardStore((state) => state.resume.sections.languages);

  return (
    <Section<Language> section={section} levelKey="level">
      {(item) => (
        <div>
          <div className="font-bold">{item.name}</div>
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Projects = () => {
  const section = useArtboardStore((state) => state.resume.sections.projects);

  return (
    <Section<Project> section={section} urlKey="url" summaryKey="summary" keywordsKey="keywords">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <LinkedEntity
              name={item.name}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.description}</div>
          </div>

          <div className="shrink-0 text-right group-[.sidebar]:text-left">
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const References = () => {
  const section = useArtboardStore((state) => state.resume.sections.references);

  return (
    <Section<Reference> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div>
          <LinkedEntity
            name={item.name}
            url={item.url}
            separateLinks={section.separateLinks}
            className="font-bold"
          />
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Custom = ({ id }: { id: string }) => {
  const section = useArtboardStore((state) => state.resume.sections.custom[id]);

  return (
    <Section<CustomSection>
      section={section}
      urlKey="url"
      summaryKey="summary"
      keywordsKey="keywords"
    >
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <LinkedEntity
              name={item.name}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.description}</div>
          </div>

          <div className="shrink-0 text-right group-[.sidebar]:text-left">
            <div className="font-bold">{item.date}</div>
            <div>{item.location}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const mapSectionToComponent = (section: SectionKey) => {
  switch (section) {
    case "profiles": {
      return <Profiles />;
    }
    case "experience": {
      return <Experience />;
    }
    case "education": {
      return <Education />;
    }
    case "awards": {
      return <Awards />;
    }
    case "certifications": {
      return <Certifications />;
    }
    case "skills": {
      return <Skills />;
    }
    case "interests": {
      return <Interests />;
    }
    case "publications": {
      return <Publications />;
    }
    case "volunteer": {
      return <Volunteer />;
    }
    case "languages": {
      return <Languages />;
    }
    case "projects": {
      return <Projects />;
    }
    case "references": {
      return <References />;
    }
    default: {
      if (section.startsWith("custom.")) return <Custom id={section.split(".")[1]} />;

      return null;
    }
  }
};

export const Gengar = ({ columns, isFirstPage = false }: TemplateProps) => {
  const [main, sidebar] = columns;

  const primaryColor = useArtboardStore((state) => state.resume.metadata.theme.primary);

  return (
    <div className="grid min-h-[inherit] grid-cols-3">
      <div
        className={cn(
          "sidebar group flex flex-col",
          !(isFirstPage || sidebar.length > 0) && "hidden",
        )}
      >
        {isFirstPage && <Header />}

        <div
          className="p-custom flex-1 space-y-4"
          style={{ backgroundColor: hexToRgb(primaryColor, 0.2) }}
        >
          {sidebar.map((section) => (
            <Fragment key={section}>{mapSectionToComponent(section)}</Fragment>
          ))}
        </div>
      </div>

      <div className={cn("main group", sidebar.length > 0 ? "col-span-2" : "col-span-3")}>
        {isFirstPage && <Summary />}

        <div className="p-custom space-y-4">
          {main.map((section) => (
            <Fragment key={section}>{mapSectionToComponent(section)}</Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};


================================================
File: apps/artboard/src/templates/glalie.tsx
================================================
import type {
  Award,
  Certification,
  CustomSection,
  CustomSectionGroup,
  Interest,
  Language,
  Profile,
  Project,
  Publication,
  Reference,
  SectionKey,
  SectionWithItem,
  Skill,
  URL,
} from "@reactive-resume/schema";
import { Education, Experience, Volunteer } from "@reactive-resume/schema";
import {
  cn,
  hexToRgb,
  isEmptyString,
  isUrl,
  linearTransform,
  sanitize,
} from "@reactive-resume/utils";
import get from "lodash.get";
import { Fragment } from "react";

import { BrandIcon } from "../components/brand-icon";
import { Picture } from "../components/picture";
import { useArtboardStore } from "../store/artboard";
import type { TemplateProps } from "../types/template";

const Header = () => {
  const basics = useArtboardStore((state) => state.resume.basics);

  return (
    <div className="flex flex-col items-center space-y-4 text-center">
      <Picture />

      <div className="space-y-4">
        <div>
          <div className="text-2xl font-bold">{basics.name}</div>
          <div className="text-base">{basics.headline}</div>
        </div>

        <div className="flex flex-col items-start gap-y-1.5 rounded border border-primary px-3 py-4 text-left text-sm">
          {basics.location && (
            <div className="flex items-center gap-x-1.5">
              <i className="ph ph-bold ph-map-pin text-primary" />
              <div>{basics.location}</div>
            </div>
          )}
          {basics.phone && (
            <div className="flex items-center gap-x-1.5">
              <i className="ph ph-bold ph-phone text-primary" />
              <a href={`tel:${basics.phone}`} target="_blank" rel="noreferrer">
                {basics.phone}
              </a>
            </div>
          )}
          {basics.email && (
            <div className="flex items-center gap-x-1.5">
              <i className="ph ph-bold ph-at text-primary" />
              <a href={`mailto:${basics.email}`} target="_blank" rel="noreferrer">
                {basics.email}
              </a>
            </div>
          )}
          <Link url={basics.url} />
          {basics.customFields.map((item) => (
            <div key={item.id} className="flex items-center gap-x-1.5">
              <i className={cn(`ph ph-bold ph-${item.icon} text-primary`)} />
              {isUrl(item.value) ? (
                <a href={item.value} target="_blank" rel="noreferrer noopener nofollow">
                  {item.name || item.value}
                </a>
              ) : (
                <span>{[item.name, item.value].filter(Boolean).join(": ")}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Summary = () => {
  const section = useArtboardStore((state) => state.resume.sections.summary);

  if (!section.visible || isEmptyString(section.content)) return null;

  return (
    <section id={section.id}>
      <h4 className="mb-2 border-b pb-0.5 text-sm font-bold">{section.name}</h4>

      <div
        dangerouslySetInnerHTML={{ __html: sanitize(section.content) }}
        style={{ columns: section.columns }}
        className="wysiwyg"
      />
    </section>
  );
};

type RatingProps = { level: number };

const Rating = ({ level }: RatingProps) => {
  const primaryColor = useArtboardStore((state) => state.resume.metadata.theme.primary);

  return (
    <div className="relative">
      <div
        className="h-2.5 w-full rounded-sm"
        style={{ backgroundColor: hexToRgb(primaryColor, 0.4) }}
      />
      <div
        className="absolute inset-y-0 left-0 h-2.5 w-full rounded-sm bg-primary"
        style={{ width: `${linearTransform(level, 0, 5, 0, 100)}%` }}
      />
    </div>
  );
};

type LinkProps = {
  url: URL;
  icon?: React.ReactNode;
  iconOnRight?: boolean;
  label?: string;
  className?: string;
};

const Link = ({ url, icon, iconOnRight, label, className }: LinkProps) => {
  if (!isUrl(url.href)) return null;

  return (
    <div className="flex items-center gap-x-1.5">
      {!iconOnRight &&
        (icon ?? <i className="ph ph-bold ph-link text-primary group-[.sidebar]:text-primary" />)}
      <a
        href={url.href}
        target="_blank"
        rel="noreferrer noopener nofollow"
        className={cn("inline-block", className)}
      >
        {label ?? (url.label || url.href)}
      </a>
      {iconOnRight &&
        (icon ?? <i className="ph ph-bold ph-link text-primary group-[.sidebar]:text-primary" />)}
    </div>
  );
};

type LinkedEntityProps = {
  name: string;
  url: URL;
  separateLinks: boolean;
  className?: string;
};

const LinkedEntity = ({ name, url, separateLinks, className }: LinkedEntityProps) => {
  return !separateLinks && isUrl(url.href) ? (
    <Link
      url={url}
      label={name}
      icon={<i className="ph ph-bold ph-globe text-primary group-[.sidebar]:text-primary" />}
      iconOnRight={true}
      className={className}
    />
  ) : (
    <div className={className}>{name}</div>
  );
};

type SectionProps<T> = {
  section: SectionWithItem<T> | CustomSectionGroup;
  children?: (item: T) => React.ReactNode;
  className?: string;
  urlKey?: keyof T;
  levelKey?: keyof T;
  summaryKey?: keyof T;
  keywordsKey?: keyof T;
};

const Section = <T,>({
  section,
  children,
  className,
  urlKey,
  levelKey,
  summaryKey,
  keywordsKey,
}: SectionProps<T>) => {
  if (!section.visible || section.items.length === 0) return null;

  return (
    <section id={section.id} className="grid">
      <h4 className="mb-2 border-b pb-0.5 text-sm font-bold group-[.sidebar]:text-primary">
        {section.name}
      </h4>

      <div
        className="grid gap-x-6 gap-y-3"
        style={{ gridTemplateColumns: `repeat(${section.columns}, 1fr)` }}
      >
        {section.items
          .filter((item) => item.visible)
          .map((item) => {
            const url = (urlKey && get(item, urlKey)) as URL | undefined;
            const level = (levelKey && get(item, levelKey, 0)) as number | undefined;
            const summary = (summaryKey && get(item, summaryKey, "")) as string | undefined;
            const keywords = (keywordsKey && get(item, keywordsKey, [])) as string[] | undefined;

            return (
              <div key={item.id} className={cn("space-y-2", className)}>
                <div>
                  {children?.(item as T)}
                  {url !== undefined && section.separateLinks && <Link url={url} />}
                </div>

                {summary !== undefined && !isEmptyString(summary) && (
                  <div
                    dangerouslySetInnerHTML={{ __html: sanitize(summary) }}
                    className="wysiwyg"
                  />
                )}

                {level !== undefined && level > 0 && <Rating level={level} />}

                {keywords !== undefined && keywords.length > 0 && (
                  <p className="text-sm">{keywords.join(", ")}</p>
                )}
              </div>
            );
          })}
      </div>
    </section>
  );
};

const Experience = () => {
  const section = useArtboardStore((state) => state.resume.sections.experience);

  return (
    <Section<Experience> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <LinkedEntity
              name={item.company}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.position}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
            <div>{item.location}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Education = () => {
  const section = useArtboardStore((state) => state.resume.sections.education);

  return (
    <Section<Education> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <LinkedEntity
              name={item.institution}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.area}</div>
            <div>{item.score}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
            <div>{item.studyType}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Profiles = () => {
  const section = useArtboardStore((state) => state.resume.sections.profiles);

  return (
    <Section<Profile> section={section}>
      {(item) => (
        <div>
          {isUrl(item.url.href) ? (
            <Link url={item.url} label={item.username} icon={<BrandIcon slug={item.icon} />} />
          ) : (
            <p>{item.username}</p>
          )}
          {!item.icon && <p className="text-sm">{item.network}</p>}
        </div>
      )}
    </Section>
  );
};

const Awards = () => {
  const section = useArtboardStore((state) => state.resume.sections.awards);

  return (
    <Section<Award> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <div className="font-bold">{item.title}</div>
            <LinkedEntity
              name={item.awarder}
              url={item.url}
              separateLinks={section.separateLinks}
            />
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Certifications = () => {
  const section = useArtboardStore((state) => state.resume.sections.certifications);

  return (
    <Section<Certification> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <div className="font-bold">{item.name}</div>
            <LinkedEntity name={item.issuer} url={item.url} separateLinks={section.separateLinks} />
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Skills = () => {
  const section = useArtboardStore((state) => state.resume.sections.skills);

  return (
    <Section<Skill> section={section} levelKey="level" keywordsKey="keywords">
      {(item) => (
        <div>
          <div className="font-bold">{item.name}</div>
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Interests = () => {
  const section = useArtboardStore((state) => state.resume.sections.interests);

  return (
    <Section<Interest> section={section} keywordsKey="keywords" className="space-y-0.5">
      {(item) => <div className="font-bold">{item.name}</div>}
    </Section>
  );
};

const Publications = () => {
  const section = useArtboardStore((state) => state.resume.sections.publications);

  return (
    <Section<Publication> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <LinkedEntity
              name={item.name}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.publisher}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Volunteer = () => {
  const section = useArtboardStore((state) => state.resume.sections.volunteer);

  return (
    <Section<Volunteer> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <LinkedEntity
              name={item.organization}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.position}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
            <div>{item.location}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Languages = () => {
  const section = useArtboardStore((state) => state.resume.sections.languages);

  return (
    <Section<Language> section={section} levelKey="level">
      {(item) => (
        <div className="space-y-0.5">
          <div className="font-bold">{item.name}</div>
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Projects = () => {
  const section = useArtboardStore((state) => state.resume.sections.projects);

  return (
    <Section<Project> section={section} urlKey="url" summaryKey="summary" keywordsKey="keywords">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <LinkedEntity
              name={item.name}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.description}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const References = () => {
  const section = useArtboardStore((state) => state.resume.sections.references);

  return (
    <Section<Reference> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div>
          <LinkedEntity
            name={item.name}
            url={item.url}
            separateLinks={section.separateLinks}
            className="font-bold"
          />
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Custom = ({ id }: { id: string }) => {
  const section = useArtboardStore((state) => state.resume.sections.custom[id]);

  return (
    <Section<CustomSection>
      section={section}
      urlKey="url"
      summaryKey="summary"
      keywordsKey="keywords"
    >
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <LinkedEntity
              name={item.name}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.description}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
            <div>{item.location}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const mapSectionToComponent = (section: SectionKey) => {
  switch (section) {
    case "profiles": {
      return <Profiles />;
    }
    case "summary": {
      return <Summary />;
    }
    case "experience": {
      return <Experience />;
    }
    case "education": {
      return <Education />;
    }
    case "awards": {
      return <Awards />;
    }
    case "certifications": {
      return <Certifications />;
    }
    case "skills": {
      return <Skills />;
    }
    case "interests": {
      return <Interests />;
    }
    case "publications": {
      return <Publications />;
    }
    case "volunteer": {
      return <Volunteer />;
    }
    case "languages": {
      return <Languages />;
    }
    case "projects": {
      return <Projects />;
    }
    case "references": {
      return <References />;
    }
    default: {
      if (section.startsWith("custom.")) return <Custom id={section.split(".")[1]} />;

      return null;
    }
  }
};

export const Glalie = ({ columns, isFirstPage = false }: TemplateProps) => {
  const [main, sidebar] = columns;

  const primaryColor = useArtboardStore((state) => state.resume.metadata.theme.primary);

  return (
    <div className="grid min-h-[inherit] grid-cols-3">
      <div
        className={cn("sidebar p-custom group space-y-4", sidebar.length === 0 && "hidden")}
        style={{ backgroundColor: hexToRgb(primaryColor, 0.2) }}
      >
        {isFirstPage && <Header />}

        {sidebar.map((section) => (
          <Fragment key={section}>{mapSectionToComponent(section)}</Fragment>
        ))}
      </div>

      <div
        className={cn(
          "main p-custom group space-y-4",
          sidebar.length > 0 ? "col-span-2" : "col-span-3",
        )}
      >
        {main.map((section) => (
          <Fragment key={section}>{mapSectionToComponent(section)}</Fragment>
        ))}
      </div>
    </div>
  );
};


================================================
File: apps/artboard/src/templates/index.tsx
================================================
import type { Template } from "@reactive-resume/utils";

import { Azurill } from "./azurill";
import { Bronzor } from "./bronzor";
import { Chikorita } from "./chikorita";
import { Ditto } from "./ditto";
import { Gengar } from "./gengar";
import { Glalie } from "./glalie";
import { Kakuna } from "./kakuna";
import { Leafish } from "./leafish";
import { Nosepass } from "./nosepass";
import { Onyx } from "./onyx";
import { Pikachu } from "./pikachu";
import { Rhyhorn } from "./rhyhorn";

export const getTemplate = (template: Template) => {
  switch (template) {
    case "azurill": {
      return Azurill;
    }
    case "bronzor": {
      return Bronzor;
    }
    case "chikorita": {
      return Chikorita;
    }
    case "ditto": {
      return Ditto;
    }
    case "gengar": {
      return Gengar;
    }
    case "glalie": {
      return Glalie;
    }
    case "kakuna": {
      return Kakuna;
    }
    case "leafish": {
      return Leafish;
    }
    case "nosepass": {
      return Nosepass;
    }
    case "onyx": {
      return Onyx;
    }
    case "pikachu": {
      return Pikachu;
    }
    case "rhyhorn": {
      return Rhyhorn;
    }
    default: {
      return Onyx;
    }
  }
};


================================================
File: apps/artboard/src/templates/kakuna.tsx
================================================
import type {
  Award,
  Certification,
  CustomSection,
  CustomSectionGroup,
  Interest,
  Language,
  Project,
  Publication,
  Reference,
  SectionKey,
  SectionWithItem,
  Skill,
  URL,
} from "@reactive-resume/schema";
import { Education, Experience, Volunteer } from "@reactive-resume/schema";
import { cn, isEmptyString, isUrl, sanitize } from "@reactive-resume/utils";
import get from "lodash.get";
import React, { Fragment } from "react";

import { BrandIcon } from "../components/brand-icon";
import { Picture } from "../components/picture";
import { useArtboardStore } from "../store/artboard";
import type { TemplateProps } from "../types/template";

const Header = () => {
  const basics = useArtboardStore((state) => state.resume.basics);
  const profiles = useArtboardStore((state) => state.resume.sections.profiles);

  return (
    <div className="flex flex-col items-center justify-center space-y-2 pb-2 text-center">
      <Picture />

      <div>
        <div className="text-2xl font-bold">{basics.name}</div>
        <div className="text-base">{basics.headline}</div>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-sm">
        {basics.location && (
          <div className="flex items-center gap-x-1.5">
            <i className="ph ph-bold ph-map-pin text-primary" />
            <div>{basics.location}</div>
          </div>
        )}
        {basics.phone && (
          <div className="flex items-center gap-x-1.5">
            <i className="ph ph-bold ph-phone text-primary" />
            <a href={`tel:${basics.phone}`} target="_blank" rel="noreferrer">
              {basics.phone}
            </a>
          </div>
        )}
        {basics.email && (
          <div className="flex items-center gap-x-1.5">
            <i className="ph ph-bold ph-at text-primary" />
            <a href={`mailto:${basics.email}`} target="_blank" rel="noreferrer">
              {basics.email}
            </a>
          </div>
        )}

        <Link url={basics.url} />

        {basics.customFields.map((item) => (
          <div key={item.id} className="flex items-center gap-x-1.5">
            <i className={cn(`ph ph-bold ph-${item.icon}`, "text-primary")} />
            {isUrl(item.value) ? (
              <a href={item.value} target="_blank" rel="noreferrer noopener nofollow">
                {item.name || item.value}
              </a>
            ) : (
              <span>{[item.name, item.value].filter(Boolean).join(": ")}</span>
            )}
          </div>
        ))}
      </div>

      {profiles.visible && profiles.items.length > 0 && (
        <div className="flex items-center gap-x-3 gap-y-0.5">
          {profiles.items
            .filter((item) => item.visible)
            .map((item) => (
              <div key={item.id} className="flex items-center gap-x-2">
                <Link
                  url={item.url}
                  label={item.username}
                  className="text-sm"
                  icon={<BrandIcon slug={item.icon} />}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

const Summary = () => {
  const section = useArtboardStore((state) => state.resume.sections.summary);

  if (!section.visible || isEmptyString(section.content)) return null;

  return (
    <section id={section.id}>
      <h4 className="mb-2 border-b border-primary text-center font-bold text-primary">
        {section.name}
      </h4>

      <div
        dangerouslySetInnerHTML={{ __html: sanitize(section.content) }}
        style={{ columns: section.columns }}
        className="wysiwyg"
      />
    </section>
  );
};

type RatingProps = { level: number };

const Rating = ({ level }: RatingProps) => (
  <div className="flex items-center gap-x-1.5">
    {Array.from({ length: 5 }).map((_, index) => (
      <div
        key={index}
        className={cn("h-3 w-5 rounded border-2 border-primary", level > index && "bg-primary")}
      />
    ))}
  </div>
);

type LinkProps = {
  url: URL;
  icon?: React.ReactNode;
  iconOnRight?: boolean;
  label?: string;
  className?: string;
};

const Link = ({ url, icon, iconOnRight, label, className }: LinkProps) => {
  if (!isUrl(url.href)) return null;

  return (
    <div className="flex items-center gap-x-1.5">
      {!iconOnRight && (icon ?? <i className="ph ph-bold ph-link text-primary" />)}
      <a
        href={url.href}
        target="_blank"
        rel="noreferrer noopener nofollow"
        className={cn("inline-block", className)}
      >
        {label ?? (url.label || url.href)}
      </a>
      {iconOnRight && (icon ?? <i className="ph ph-bold ph-link text-primary" />)}
    </div>
  );
};

type LinkedEntityProps = {
  name: string;
  url: URL;
  separateLinks: boolean;
  className?: string;
};

const LinkedEntity = ({ name, url, separateLinks, className }: LinkedEntityProps) => {
  return !separateLinks && isUrl(url.href) ? (
    <Link
      url={url}
      label={name}
      icon={<i className="ph ph-bold ph-globe text-primary" />}
      iconOnRight={true}
      className={className}
    />
  ) : (
    <div className={className}>{name}</div>
  );
};

type SectionProps<T> = {
  section: SectionWithItem<T> | CustomSectionGroup;
  children?: (item: T) => React.ReactNode;
  className?: string;
  urlKey?: keyof T;
  levelKey?: keyof T;
  summaryKey?: keyof T;
  keywordsKey?: keyof T;
};

const Section = <T,>({
  section,
  children,
  className,
  urlKey,
  levelKey,
  summaryKey,
  keywordsKey,
}: SectionProps<T>) => {
  if (!section.visible || section.items.length === 0) return null;

  return (
    <section id={section.id} className="grid">
      <h4 className="mb-2 border-b border-primary text-center font-bold text-primary">
        {section.name}
      </h4>

      <div
        className="grid gap-x-6 gap-y-3"
        style={{ gridTemplateColumns: `repeat(${section.columns}, 1fr)` }}
      >
        {section.items
          .filter((item) => item.visible)
          .map((item) => {
            const url = (urlKey && get(item, urlKey)) as URL | undefined;
            const level = (levelKey && get(item, levelKey, 0)) as number | undefined;
            const summary = (summaryKey && get(item, summaryKey, "")) as string | undefined;
            const keywords = (keywordsKey && get(item, keywordsKey, [])) as string[] | undefined;

            return (
              <div key={item.id} className={cn("space-y-2", className)}>
                <div>{children?.(item as T)}</div>

                {summary !== undefined && !isEmptyString(summary) && (
                  <div
                    dangerouslySetInnerHTML={{ __html: sanitize(summary) }}
                    className="wysiwyg"
                  />
                )}

                {level !== undefined && level > 0 && <Rating level={level} />}

                {keywords !== undefined && keywords.length > 0 && (
                  <p className="text-sm">{keywords.join(", ")}</p>
                )}

                {url !== undefined && section.separateLinks && <Link url={url} />}
              </div>
            );
          })}
      </div>
    </section>
  );
};

const Experience = () => {
  const section = useArtboardStore((state) => state.resume.sections.experience);

  return (
    <Section<Experience> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div>
          <LinkedEntity
            name={item.company}
            url={item.url}
            separateLinks={section.separateLinks}
            className="font-bold"
          />
          <div>{item.position}</div>
          <div>{item.location}</div>
          <div className="font-bold">{item.date}</div>
        </div>
      )}
    </Section>
  );
};

const Education = () => {
  const section = useArtboardStore((state) => state.resume.sections.education);

  return (
    <Section<Education> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div>
          <LinkedEntity
            name={item.institution}
            url={item.url}
            separateLinks={section.separateLinks}
            className="font-bold"
          />
          <div>{item.area}</div>
          <div>{item.score}</div>
          <div>{item.studyType}</div>
          <div className="font-bold">{item.date}</div>
        </div>
      )}
    </Section>
  );
};

const Awards = () => {
  const section = useArtboardStore((state) => state.resume.sections.awards);

  return (
    <Section<Award> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div>
          <div className="font-bold">{item.title}</div>
          <LinkedEntity name={item.awarder} url={item.url} separateLinks={section.separateLinks} />
          <div className="font-bold">{item.date}</div>
        </div>
      )}
    </Section>
  );
};

const Certifications = () => {
  const section = useArtboardStore((state) => state.resume.sections.certifications);

  return (
    <Section<Certification> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div>
          <div className="font-bold">{item.name}</div>
          <LinkedEntity name={item.issuer} url={item.url} separateLinks={section.separateLinks} />
          <div className="font-bold">{item.date}</div>
        </div>
      )}
    </Section>
  );
};

const Skills = () => {
  const section = useArtboardStore((state) => state.resume.sections.skills);

  return (
    <Section<Skill> section={section} levelKey="level" keywordsKey="keywords">
      {(item) => (
        <div>
          <div className="font-bold">{item.name}</div>
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Interests = () => {
  const section = useArtboardStore((state) => state.resume.sections.interests);

  return (
    <Section<Interest> section={section} keywordsKey="keywords" className="space-y-0.5">
      {(item) => <div className="font-bold">{item.name}</div>}
    </Section>
  );
};

const Publications = () => {
  const section = useArtboardStore((state) => state.resume.sections.publications);

  return (
    <Section<Publication> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div>
          <LinkedEntity
            name={item.name}
            url={item.url}
            separateLinks={section.separateLinks}
            className="font-bold"
          />
          <div>{item.publisher}</div>
          <div className="font-bold">{item.date}</div>
        </div>
      )}
    </Section>
  );
};

const Volunteer = () => {
  const section = useArtboardStore((state) => state.resume.sections.volunteer);

  return (
    <Section<Volunteer> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div>
          <LinkedEntity
            name={item.organization}
            url={item.url}
            separateLinks={section.separateLinks}
            className="font-bold"
          />
          <div>{item.position}</div>
          <div>{item.location}</div>
          <div className="font-bold">{item.date}</div>
        </div>
      )}
    </Section>
  );
};

const Languages = () => {
  const section = useArtboardStore((state) => state.resume.sections.languages);

  return (
    <Section<Language> section={section} levelKey="level">
      {(item) => (
        <div>
          <div className="font-bold">{item.name}</div>
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Projects = () => {
  const section = useArtboardStore((state) => state.resume.sections.projects);

  return (
    <Section<Project> section={section} urlKey="url" summaryKey="summary" keywordsKey="keywords">
      {(item) => (
        <div>
          <div>
            <LinkedEntity
              name={item.name}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.description}</div>
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const References = () => {
  const section = useArtboardStore((state) => state.resume.sections.references);

  return (
    <Section<Reference> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div>
          <LinkedEntity
            name={item.name}
            url={item.url}
            separateLinks={section.separateLinks}
            className="font-bold"
          />
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Custom = ({ id }: { id: string }) => {
  const section = useArtboardStore((state) => state.resume.sections.custom[id]);

  return (
    <Section<CustomSection>
      section={section}
      urlKey="url"
      summaryKey="summary"
      keywordsKey="keywords"
    >
      {(item) => (
        <div>
          <div>
            <LinkedEntity
              name={item.name}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.description}</div>
            <div>{item.location}</div>
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const mapSectionToComponent = (section: SectionKey) => {
  switch (section) {
    case "summary": {
      return <Summary />;
    }
    case "experience": {
      return <Experience />;
    }
    case "education": {
      return <Education />;
    }
    case "awards": {
      return <Awards />;
    }
    case "certifications": {
      return <Certifications />;
    }
    case "skills": {
      return <Skills />;
    }
    case "interests": {
      return <Interests />;
    }
    case "publications": {
      return <Publications />;
    }
    case "volunteer": {
      return <Volunteer />;
    }
    case "languages": {
      return <Languages />;
    }
    case "projects": {
      return <Projects />;
    }
    case "references": {
      return <References />;
    }
    default: {
      if (section.startsWith("custom.")) return <Custom id={section.split(".")[1]} />;

      return null;
    }
  }
};

export const Kakuna = ({ columns, isFirstPage = false }: TemplateProps) => {
  const [main, sidebar] = columns;

  return (
    <div className="p-custom space-y-4">
      {isFirstPage && <Header />}

      <div className="space-y-4">
        {main.map((section) => (
          <Fragment key={section}>{mapSectionToComponent(section)}</Fragment>
        ))}

        {sidebar.map((section) => (
          <Fragment key={section}>{mapSectionToComponent(section)}</Fragment>
        ))}
      </div>
    </div>
  );
};


================================================
File: apps/artboard/src/templates/leafish.tsx
================================================
import type {
  Award,
  Certification,
  CustomSection,
  CustomSectionGroup,
  Interest,
  Language,
  Project,
  Publication,
  Reference,
  SectionKey,
  SectionWithItem,
  Skill,
  URL,
} from "@reactive-resume/schema";
import { Education, Experience, Volunteer } from "@reactive-resume/schema";
import { cn, hexToRgb, isEmptyString, isUrl, sanitize } from "@reactive-resume/utils";
import get from "lodash.get";
import React, { Fragment } from "react";

import { BrandIcon } from "../components/brand-icon";
import { Picture } from "../components/picture";
import { useArtboardStore } from "../store/artboard";
import type { TemplateProps } from "../types/template";

const Header = () => {
  const basics = useArtboardStore((state) => state.resume.basics);
  const section = useArtboardStore((state) => state.resume.sections.summary);
  const profiles = useArtboardStore((state) => state.resume.sections.profiles);
  const primaryColor = useArtboardStore((state) => state.resume.metadata.theme.primary);

  return (
    <div>
      <div
        className="p-custom flex items-center space-x-8"
        style={{ backgroundColor: hexToRgb(primaryColor, 0.2) }}
      >
        <div className="space-y-3">
          <div>
            <div className="text-3xl font-bold">{basics.name}</div>
            <div className="text-base font-medium text-primary">{basics.headline}</div>
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: sanitize(section.content) }}
            style={{ columns: section.columns }}
            className="wysiwyg"
          />
        </div>

        <Picture />
      </div>

      <div className="p-custom space-y-3" style={{ backgroundColor: hexToRgb(primaryColor, 0.4) }}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-sm">
          {basics.location && (
            <div className="flex items-center gap-x-1.5">
              <i className="ph ph-bold ph-map-pin text-primary" />
              <div>{basics.location}</div>
            </div>
          )}
          {basics.phone && (
            <div className="flex items-center gap-x-1.5">
              <i className="ph ph-bold ph-phone text-primary" />
              <a href={`tel:${basics.phone}`} target="_blank" rel="noreferrer">
                {basics.phone}
              </a>
            </div>
          )}
          {basics.email && (
            <div className="flex items-center gap-x-1.5">
              <i className="ph ph-bold ph-at text-primary" />
              <a href={`mailto:${basics.email}`} target="_blank" rel="noreferrer">
                {basics.email}
              </a>
            </div>
          )}
          <Link url={basics.url} />
          {basics.customFields.map((item) => (
            <div key={item.id} className="flex items-center gap-x-1.5">
              <i className={cn(`ph ph-bold ph-${item.icon}`, "text-primary")} />
              {isUrl(item.value) ? (
                <a href={item.value} target="_blank" rel="noreferrer noopener nofollow">
                  {item.name || item.value}
                </a>
              ) : (
                <span>{[item.name, item.value].filter(Boolean).join(": ")}</span>
              )}
            </div>
          ))}
        </div>

        {profiles.visible && profiles.items.length > 0 && (
          <div className="flex items-center gap-x-3 gap-y-0.5">
            {profiles.items
              .filter((item) => item.visible)
              .map((item) => (
                <div key={item.id} className="flex items-center gap-x-2">
                  <Link
                    url={item.url}
                    label={item.username}
                    className="text-sm"
                    icon={<BrandIcon slug={item.icon} />}
                  />
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

type RatingProps = { level: number };

const Rating = ({ level }: RatingProps) => (
  <div className="flex items-center gap-x-1.5">
    {Array.from({ length: 5 }).map((_, index) => (
      <div
        key={index}
        className={cn("h-3 w-6 border-2 border-primary", level > index && "bg-primary")}
      />
    ))}
  </div>
);

type LinkProps = {
  url: URL;
  icon?: React.ReactNode;
  iconOnRight?: boolean;
  label?: string;
  className?: string;
};

const Link = ({ url, icon, iconOnRight, label, className }: LinkProps) => {
  if (!isUrl(url.href)) return null;

  return (
    <div className="flex items-center gap-x-1.5">
      {!iconOnRight && (icon ?? <i className="ph ph-bold ph-link text-primary" />)}
      <a
        href={url.href}
        target="_blank"
        rel="noreferrer noopener nofollow"
        className={cn("inline-block", className)}
      >
        {label ?? (url.label || url.href)}
      </a>
      {iconOnRight && (icon ?? <i className="ph ph-bold ph-link text-primary" />)}
    </div>
  );
};

type LinkedEntityProps = {
  name: string;
  url: URL;
  separateLinks: boolean;
  className?: string;
};

const LinkedEntity = ({ name, url, separateLinks, className }: LinkedEntityProps) => {
  return !separateLinks && isUrl(url.href) ? (
    <Link
      url={url}
      label={name}
      icon={<i className="ph ph-bold ph-globe text-primary" />}
      iconOnRight={true}
      className={className}
    />
  ) : (
    <div className={className}>{name}</div>
  );
};

type SectionProps<T> = {
  section: SectionWithItem<T> | CustomSectionGroup;
  children?: (item: T) => React.ReactNode;
  className?: string;
  urlKey?: keyof T;
  levelKey?: keyof T;
  summaryKey?: keyof T;
  keywordsKey?: keyof T;
};

const Section = <T,>({
  section,
  children,
  className,
  urlKey,
  levelKey,
  summaryKey,
  keywordsKey,
}: SectionProps<T>) => {
  if (!section.visible || section.items.length === 0) return null;

  return (
    <section id={section.id} className="grid">
      <h4 className="mb-2 border-b border-primary text-left font-bold text-primary">
        {section.name}
      </h4>

      <div
        className="grid gap-x-6 gap-y-3"
        style={{ gridTemplateColumns: `repeat(${section.columns}, 1fr)` }}
      >
        {section.items
          .filter((item) => item.visible)
          .map((item) => {
            const url = (urlKey && get(item, urlKey)) as URL | undefined;
            const level = (levelKey && get(item, levelKey, 0)) as number | undefined;
            const summary = (summaryKey && get(item, summaryKey, "")) as string | undefined;
            const keywords = (keywordsKey && get(item, keywordsKey, [])) as string[] | undefined;

            return (
              <div key={item.id} className={cn("space-y-2", className)}>
                <div>{children?.(item as T)}</div>

                {summary !== undefined && !isEmptyString(summary) && (
                  <div
                    dangerouslySetInnerHTML={{ __html: sanitize(summary) }}
                    className="wysiwyg"
                  />
                )}

                {level !== undefined && level > 0 && <Rating level={level} />}

                {keywords !== undefined && keywords.length > 0 && (
                  <p className="text-sm">{keywords.join(", ")}</p>
                )}

                {url !== undefined && section.separateLinks && <Link url={url} />}
              </div>
            );
          })}
      </div>
    </section>
  );
};

const Experience = () => {
  const section = useArtboardStore((state) => state.resume.sections.experience);

  return (
    <Section<Experience> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div>
          <LinkedEntity
            name={item.company}
            url={item.url}
            separateLinks={section.separateLinks}
            className="font-bold"
          />
          <div>{item.position}</div>
          <div>{item.location}</div>
          <div className="font-bold">{item.date}</div>
        </div>
      )}
    </Section>
  );
};

const Education = () => {
  const section = useArtboardStore((state) => state.resume.sections.education);

  return (
    <Section<Education> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div>
          <LinkedEntity
            name={item.institution}
            url={item.url}
            separateLinks={section.separateLinks}
            className="font-bold"
          />
          <div>{item.area}</div>
          <div>{item.score}</div>
          <div>{item.studyType}</div>
          <div className="font-bold">{item.date}</div>
        </div>
      )}
    </Section>
  );
};

const Awards = () => {
  const section = useArtboardStore((state) => state.resume.sections.awards);

  return (
    <Section<Award> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div>
          <div className="font-bold">{item.title}</div>
          <LinkedEntity name={item.awarder} url={item.url} separateLinks={section.separateLinks} />
          <div className="font-bold">{item.date}</div>
        </div>
      )}
    </Section>
  );
};

const Certifications = () => {
  const section = useArtboardStore((state) => state.resume.sections.certifications);

  return (
    <Section<Certification> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div>
          <div className="font-bold">{item.name}</div>
          <LinkedEntity name={item.issuer} url={item.url} separateLinks={section.separateLinks} />
          <div className="font-bold">{item.date}</div>
        </div>
      )}
    </Section>
  );
};

const Skills = () => {
  const section = useArtboardStore((state) => state.resume.sections.skills);

  return (
    <Section<Skill> section={section} levelKey="level" keywordsKey="keywords">
      {(item) => (
        <div>
          <div className="font-bold">{item.name}</div>
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Interests = () => {
  const section = useArtboardStore((state) => state.resume.sections.interests);

  return (
    <Section<Interest> section={section} keywordsKey="keywords" className="space-y-0.5">
      {(item) => <div className="font-bold">{item.name}</div>}
    </Section>
  );
};

const Publications = () => {
  const section = useArtboardStore((state) => state.resume.sections.publications);

  return (
    <Section<Publication> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div>
          <LinkedEntity
            name={item.name}
            url={item.url}
            separateLinks={section.separateLinks}
            className="font-bold"
          />
          <div>{item.publisher}</div>
          <div className="font-bold">{item.date}</div>
        </div>
      )}
    </Section>
  );
};

const Volunteer = () => {
  const section = useArtboardStore((state) => state.resume.sections.volunteer);

  return (
    <Section<Volunteer> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div>
          <LinkedEntity
            name={item.organization}
            url={item.url}
            separateLinks={section.separateLinks}
            className="font-bold"
          />
          <div>{item.position}</div>
          <div>{item.location}</div>
          <div className="font-bold">{item.date}</div>
        </div>
      )}
    </Section>
  );
};

const Languages = () => {
  const section = useArtboardStore((state) => state.resume.sections.languages);

  return (
    <Section<Language> section={section} levelKey="level">
      {(item) => (
        <div>
          <div className="font-bold">{item.name}</div>
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Projects = () => {
  const section = useArtboardStore((state) => state.resume.sections.projects);

  return (
    <Section<Project> section={section} urlKey="url" summaryKey="summary" keywordsKey="keywords">
      {(item) => (
        <div>
          <div>
            <LinkedEntity
              name={item.name}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.description}</div>
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const References = () => {
  const section = useArtboardStore((state) => state.resume.sections.references);

  return (
    <Section<Reference> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div>
          <LinkedEntity
            name={item.name}
            url={item.url}
            separateLinks={section.separateLinks}
            className="font-bold"
          />
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Custom = ({ id }: { id: string }) => {
  const section = useArtboardStore((state) => state.resume.sections.custom[id]);

  return (
    <Section<CustomSection>
      section={section}
      urlKey="url"
      summaryKey="summary"
      keywordsKey="keywords"
    >
      {(item) => (
        <div>
          <div>
            <LinkedEntity
              name={item.name}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.description}</div>
            <div>{item.location}</div>
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const mapSectionToComponent = (section: SectionKey) => {
  switch (section) {
    case "experience": {
      return <Experience />;
    }
    case "education": {
      return <Education />;
    }
    case "awards": {
      return <Awards />;
    }
    case "certifications": {
      return <Certifications />;
    }
    case "skills": {
      return <Skills />;
    }
    case "interests": {
      return <Interests />;
    }
    case "publications": {
      return <Publications />;
    }
    case "volunteer": {
      return <Volunteer />;
    }
    case "languages": {
      return <Languages />;
    }
    case "projects": {
      return <Projects />;
    }
    case "references": {
      return <References />;
    }
    default: {
      if (section.startsWith("custom.")) return <Custom id={section.split(".")[1]} />;

      return null;
    }
  }
};

export const Leafish = ({ columns, isFirstPage = false }: TemplateProps) => {
  const [main, sidebar] = columns;

  return (
    <div>
      {isFirstPage && <Header />}

      <div className="p-custom grid grid-cols-2 items-start space-x-6">
        <div className={cn("grid gap-y-4", sidebar.length === 0 && "col-span-2")}>
          {main.map((section) => (
            <Fragment key={section}>{mapSectionToComponent(section)}</Fragment>
          ))}
        </div>

        <div className={cn("grid gap-y-4", sidebar.length === 0 && "hidden")}>
          {sidebar.map((section) => (
            <Fragment key={section}>{mapSectionToComponent(section)}</Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};


================================================
File: apps/artboard/src/templates/nosepass.tsx
================================================
import type {
  Award,
  Certification,
  CustomSection,
  CustomSectionGroup,
  Interest,
  Language,
  Profile,
  Project,
  Publication,
  Reference,
  SectionKey,
  SectionWithItem,
  Skill,
  URL,
} from "@reactive-resume/schema";
import { Education, Experience, Volunteer } from "@reactive-resume/schema";
import { cn, isEmptyString, isUrl, sanitize } from "@reactive-resume/utils";
import get from "lodash.get";
import { Fragment } from "react";

import { BrandIcon } from "../components/brand-icon";
import { Picture } from "../components/picture";
import { useArtboardStore } from "../store/artboard";
import type { TemplateProps } from "../types/template";

const Header = () => {
  const basics = useArtboardStore((state) => state.resume.basics);

  return (
    <div className="grid grid-cols-4 gap-x-6">
      <div className="mt-1 space-y-2 text-right">
        <Picture className="ml-auto" />
      </div>

      <div className="col-span-3 space-y-2">
        <div>
          <div className="text-2xl font-bold">{basics.name}</div>
          <div className="text-base">{basics.headline}</div>
        </div>

        <div className="space-y-1 text-sm">
          {basics.location && (
            <div className="flex items-center gap-x-1.5">
              <i className="ph ph-bold ph-map-pin text-primary" />
              <div>{basics.location}</div>
            </div>
          )}
          {basics.phone && (
            <div className="flex items-center gap-x-1.5">
              <i className="ph ph-bold ph-phone text-primary" />
              <a href={`tel:${basics.phone}`} target="_blank" rel="noreferrer">
                {basics.phone}
              </a>
            </div>
          )}
          {basics.email && (
            <div className="flex items-center gap-x-1.5">
              <i className="ph ph-bold ph-at text-primary" />
              <a href={`mailto:${basics.email}`} target="_blank" rel="noreferrer">
                {basics.email}
              </a>
            </div>
          )}
          <Link url={basics.url} />
        </div>

        <div className="flex flex-wrap gap-x-3 text-sm">
          {basics.customFields.map((item) => (
            <div key={item.id} className="flex items-center gap-x-1.5">
              <i className={cn(`ph ph-bold ph-${item.icon}`, "text-primary")} />
              {isUrl(item.value) ? (
                <a href={item.value} target="_blank" rel="noreferrer noopener nofollow">
                  {item.name || item.value}
                </a>
              ) : (
                <>
                  <span className="text-primary">{item.name}</span>
                  <span>{item.value}</span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Summary = () => {
  const section = useArtboardStore((state) => state.resume.sections.summary);

  if (!section.visible || isEmptyString(section.content)) return null;

  return (
    <section id={section.id} className="grid grid-cols-4 gap-x-6">
      <div className="text-right">
        <h4 className="font-medium text-primary">{section.name}</h4>
      </div>

      <div className="col-span-3">
        <div className="relative">
          <hr className="mt-3 border-primary pb-3" />
          <div className="absolute bottom-3 right-0 size-3 bg-primary" />
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: sanitize(section.content) }}
          style={{ columns: section.columns }}
          className="wysiwyg"
        />
      </div>
    </section>
  );
};

type LinkProps = {
  url: URL;
  icon?: React.ReactNode;
  iconOnRight?: boolean;
  label?: string;
  className?: string;
};

const Link = ({ url, icon, iconOnRight, label, className }: LinkProps) => {
  if (!isUrl(url.href)) return null;

  return (
    <div className="flex items-center gap-x-1.5">
      {!iconOnRight && (icon ?? <i className="ph ph-bold ph-link text-primary" />)}
      <a
        href={url.href}
        target="_blank"
        rel="noreferrer noopener nofollow"
        className={cn("inline-block", className)}
      >
        {label ?? (url.label || url.href)}
      </a>
      {iconOnRight && (icon ?? <i className="ph ph-bold ph-link text-primary" />)}
    </div>
  );
};

type LinkedEntityProps = {
  name: string;
  url: URL;
  separateLinks: boolean;
  className?: string;
};

const LinkedEntity = ({ name, url, separateLinks, className }: LinkedEntityProps) => {
  return !separateLinks && isUrl(url.href) ? (
    <Link
      url={url}
      label={name}
      icon={<i className="ph ph-bold ph-globe text-primary" />}
      iconOnRight={true}
      className={className}
    />
  ) : (
    <div className={className}>{name}</div>
  );
};

type SectionProps<T> = {
  section: SectionWithItem<T> | CustomSectionGroup;
  children?: (item: T) => React.ReactNode;
  urlKey?: keyof T;
  dateKey?: keyof T;
  levelKey?: keyof T;
  summaryKey?: keyof T;
  keywordsKey?: keyof T;
};

const Section = <T,>({
  section,
  children,
  urlKey,
  dateKey,
  summaryKey,
  keywordsKey,
}: SectionProps<T>) => {
  if (!section.visible || section.items.length === 0) return null;

  return (
    <section id={section.id} className={cn("grid", dateKey !== undefined && "gap-y-4")}>
      <div className="grid grid-cols-4 gap-x-6">
        <div className="text-right">
          <h4 className="font-medium text-primary">{section.name}</h4>
        </div>

        <div className="col-span-3">
          <div className="relative">
            <hr className="mt-3 border-primary" />
            <div className="absolute bottom-0 right-0 size-3 bg-primary" />
          </div>
        </div>
      </div>

      {dateKey !== undefined && (
        <div className="grid grid-cols-4 gap-x-6 gap-y-4">
          {section.items
            .filter((item) => item.visible)
            .map((item) => {
              const url = (urlKey && get(item, urlKey)) as URL | undefined;
              const date = (dateKey && get(item, dateKey, "")) as string | undefined;
              const summary = (summaryKey && get(item, summaryKey, "")) as string | undefined;
              const keywords = (keywordsKey && get(item, keywordsKey, [])) as string[] | undefined;

              return (
                <Fragment key={item.id}>
                  <div className="text-right font-medium text-primary">{date}</div>

                  <div className="col-span-3 space-y-1">
                    {children?.(item as T)}

                    {url !== undefined && section.separateLinks && <Link url={url} />}

                    {summary !== undefined && !isEmptyString(summary) && (
                      <div
                        dangerouslySetInnerHTML={{ __html: sanitize(summary) }}
                        className="wysiwyg"
                      />
                    )}

                    {keywords !== undefined && keywords.length > 0 && (
                      <p className="text-sm">{keywords.join(", ")}</p>
                    )}
                  </div>
                </Fragment>
              );
            })}
        </div>
      )}

      {dateKey === undefined && (
        <div className="grid grid-cols-4 gap-x-6">
          <div
            className="col-span-3 col-start-2 grid gap-x-6 gap-y-3"
            style={{ gridTemplateColumns: `repeat(${section.columns}, 1fr)` }}
          >
            {section.items
              .filter((item) => item.visible)
              .map((item) => {
                const url = (urlKey && get(item, urlKey)) as URL | undefined;
                const summary = (summaryKey && get(item, summaryKey, "")) as string | undefined;
                const keywords = (keywordsKey && get(item, keywordsKey, [])) as
                  | string[]
                  | undefined;

                return (
                  <div key={item.id}>
                    {children?.(item as T)}

                    {url !== undefined && section.separateLinks && <Link url={url} />}

                    {summary !== undefined && !isEmptyString(summary) && (
                      <div
                        dangerouslySetInnerHTML={{ __html: sanitize(summary) }}
                        className="wysiwyg"
                      />
                    )}

                    {keywords !== undefined && keywords.length > 0 && (
                      <p className="text-sm">{keywords.join(", ")}</p>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </section>
  );
};

const Profiles = () => {
  const section = useArtboardStore((state) => state.resume.sections.profiles);

  return (
    <Section<Profile> section={section}>
      {(item) => (
        <div>
          {isUrl(item.url.href) ? (
            <Link url={item.url} label={item.username} icon={<BrandIcon slug={item.icon} />} />
          ) : (
            <p>{item.username}</p>
          )}
          {!item.icon && <p className="text-sm">{item.network}</p>}
        </div>
      )}
    </Section>
  );
};

const Experience = () => {
  const section = useArtboardStore((state) => state.resume.sections.experience);

  return (
    <Section<Experience> section={section} urlKey="url" dateKey="date" summaryKey="summary">
      {(item) => (
        <div>
          <LinkedEntity
            name={item.company}
            url={item.url}
            separateLinks={section.separateLinks}
            className="font-bold"
          />
          <div>{item.position}</div>
          <div>{item.location}</div>
        </div>
      )}
    </Section>
  );
};

const Education = () => {
  const section = useArtboardStore((state) => state.resume.sections.education);

  return (
    <Section<Education> section={section} urlKey="url" dateKey="date" summaryKey="summary">
      {(item) => (
        <div>
          <LinkedEntity
            name={item.institution}
            url={item.url}
            separateLinks={section.separateLinks}
            className="font-bold"
          />
          <div>{item.area}</div>
          <div>{item.studyType}</div>
          <div>{item.score}</div>
        </div>
      )}
    </Section>
  );
};

const Awards = () => {
  const section = useArtboardStore((state) => state.resume.sections.awards);

  return (
    <Section<Award> section={section} urlKey="url" dateKey="date" summaryKey="summary">
      {(item) => (
        <div>
          <div className="font-bold">{item.title}</div>
          <LinkedEntity name={item.awarder} url={item.url} separateLinks={section.separateLinks} />
        </div>
      )}
    </Section>
  );
};

const Certifications = () => {
  const section = useArtboardStore((state) => state.resume.sections.certifications);

  return (
    <Section<Certification> section={section} urlKey="url" dateKey="date" summaryKey="summary">
      {(item) => (
        <div>
          <div className="font-bold">{item.name}</div>
          <LinkedEntity name={item.issuer} url={item.url} separateLinks={section.separateLinks} />
        </div>
      )}
    </Section>
  );
};

const Skills = () => {
  const section = useArtboardStore((state) => state.resume.sections.skills);

  return (
    <Section<Skill> section={section} levelKey="level" keywordsKey="keywords">
      {(item) => (
        <div>
          <div className="font-bold">{item.name}</div>
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Interests = () => {
  const section = useArtboardStore((state) => state.resume.sections.interests);

  return (
    <Section<Interest> section={section} keywordsKey="keywords">
      {(item) => <div className="font-bold">{item.name}</div>}
    </Section>
  );
};

const Publications = () => {
  const section = useArtboardStore((state) => state.resume.sections.publications);

  return (
    <Section<Publication> section={section} urlKey="url" dateKey="date" summaryKey="summary">
      {(item) => (
        <div>
          <LinkedEntity
            name={item.name}
            url={item.url}
            separateLinks={section.separateLinks}
            className="font-bold"
          />
          <div>{item.publisher}</div>
        </div>
      )}
    </Section>
  );
};

const Volunteer = () => {
  const section = useArtboardStore((state) => state.resume.sections.volunteer);

  return (
    <Section<Volunteer> section={section} urlKey="url" dateKey="date" summaryKey="summary">
      {(item) => (
        <div>
          <LinkedEntity
            name={item.organization}
            url={item.url}
            separateLinks={section.separateLinks}
            className="font-bold"
          />
          <div>{item.position}</div>
          <div>{item.location}</div>
        </div>
      )}
    </Section>
  );
};

const Languages = () => {
  const section = useArtboardStore((state) => state.resume.sections.languages);

  return (
    <Section<Language> section={section} levelKey="level">
      {(item) => (
        <div>
          <div className="font-bold">{item.name}</div>
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Projects = () => {
  const section = useArtboardStore((state) => state.resume.sections.projects);

  return (
    <Section<Project>
      section={section}
      urlKey="url"
      dateKey="date"
      summaryKey="summary"
      keywordsKey="keywords"
    >
      {(item) => (
        <div>
          <LinkedEntity
            name={item.name}
            url={item.url}
            separateLinks={section.separateLinks}
            className="font-bold"
          />
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const References = () => {
  const section = useArtboardStore((state) => state.resume.sections.references);

  return (
    <Section<Reference> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div>
          <LinkedEntity
            name={item.name}
            url={item.url}
            separateLinks={section.separateLinks}
            className="font-bold"
          />
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Custom = ({ id }: { id: string }) => {
  const section = useArtboardStore((state) => state.resume.sections.custom[id]);

  return (
    <Section<CustomSection>
      section={section}
      urlKey="url"
      dateKey="date"
      summaryKey="summary"
      keywordsKey="keywords"
    >
      {(item) => (
        <div>
          <LinkedEntity
            name={item.name}
            url={item.url}
            separateLinks={section.separateLinks}
            className="font-bold"
          />
          <div>{item.description}</div>
          <div>{item.location}</div>
        </div>
      )}
    </Section>
  );
};

const mapSectionToComponent = (section: SectionKey) => {
  switch (section) {
    case "profiles": {
      return <Profiles />;
    }
    case "summary": {
      return <Summary />;
    }
    case "experience": {
      return <Experience />;
    }
    case "education": {
      return <Education />;
    }
    case "awards": {
      return <Awards />;
    }
    case "certifications": {
      return <Certifications />;
    }
    case "skills": {
      return <Skills />;
    }
    case "interests": {
      return <Interests />;
    }
    case "publications": {
      return <Publications />;
    }
    case "volunteer": {
      return <Volunteer />;
    }
    case "languages": {
      return <Languages />;
    }
    case "projects": {
      return <Projects />;
    }
    case "references": {
      return <References />;
    }
    default: {
      if (section.startsWith("custom.")) return <Custom id={section.split(".")[1]} />;

      return null;
    }
  }
};

export const Nosepass = ({ columns, isFirstPage = false }: TemplateProps) => {
  const name = useArtboardStore((state) => state.resume.basics.name);

  const [main, sidebar] = columns;

  return (
    <div className="p-custom space-y-6">
      <div className="flex items-center justify-between">
        <img alt="Europass Logo" className="h-[42px]" src="/assets/europass.png" />

        <p className="font-medium text-primary">Curriculum Vitae</p>

        <p className="font-medium text-primary">{name}</p>
      </div>

      {isFirstPage && <Header />}

      <div className="space-y-4">
        {main.map((section) => (
          <Fragment key={section}>{mapSectionToComponent(section)}</Fragment>
        ))}

        {sidebar.map((section) => (
          <Fragment key={section}>{mapSectionToComponent(section)}</Fragment>
        ))}
      </div>
    </div>
  );
};


================================================
File: apps/artboard/src/templates/onyx.tsx
================================================
import type {
  Award,
  Certification,
  CustomSection,
  CustomSectionGroup,
  Interest,
  Language,
  Project,
  Publication,
  Reference,
  SectionKey,
  SectionWithItem,
  Skill,
  URL,
} from "@reactive-resume/schema";
import { Education, Experience, Volunteer } from "@reactive-resume/schema";
import { cn, isEmptyString, isUrl, sanitize } from "@reactive-resume/utils";
import get from "lodash.get";
import React, { Fragment } from "react";

import { BrandIcon } from "../components/brand-icon";
import { Picture } from "../components/picture";
import { useArtboardStore } from "../store/artboard";
import type { TemplateProps } from "../types/template";

const Header = () => {
  const basics = useArtboardStore((state) => state.resume.basics);
  const profiles = useArtboardStore((state) => state.resume.sections.profiles);

  return (
    <div className="flex items-center justify-between space-x-4 border-b border-primary pb-5">
      <Picture />

      <div className="flex-1 space-y-2">
        <div>
          <div className="text-2xl font-bold">{basics.name}</div>
          <div className="text-base">{basics.headline}</div>
        </div>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm">
          {basics.location && (
            <div className="flex items-center gap-x-1.5">
              <i className="ph ph-bold ph-map-pin text-primary" />
              <div>{basics.location}</div>
            </div>
          )}
          {basics.phone && (
            <div className="flex items-center gap-x-1.5">
              <i className="ph ph-bold ph-phone text-primary" />
              <a href={`tel:${basics.phone}`} target="_blank" rel="noreferrer">
                {basics.phone}
              </a>
            </div>
          )}
          {basics.email && (
            <div className="flex items-center gap-x-1.5">
              <i className="ph ph-bold ph-at text-primary" />
              <a href={`mailto:${basics.email}`} target="_blank" rel="noreferrer">
                {basics.email}
              </a>
            </div>
          )}
          <Link url={basics.url} />
          {basics.customFields.map((item) => (
            <div key={item.id} className="flex items-center gap-x-1.5">
              <i className={cn(`ph ph-bold ph-${item.icon}`, "text-primary")} />
              {isUrl(item.value) ? (
                <a href={item.value} target="_blank" rel="noreferrer noopener nofollow">
                  {item.name || item.value}
                </a>
              ) : (
                <span>{[item.name, item.value].filter(Boolean).join(": ")}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {profiles.visible && profiles.items.length > 0 && (
        <div
          className="grid gap-x-4 gap-y-1 text-right"
          style={{ gridTemplateColumns: `repeat(${profiles.columns}, auto)` }}
        >
          {profiles.items
            .filter((item) => item.visible)
            .map((item) => (
              <div key={item.id} className="flex items-center gap-x-2">
                <Link
                  url={item.url}
                  label={item.username}
                  className="text-sm"
                  icon={<BrandIcon slug={item.icon} />}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

const Summary = () => {
  const section = useArtboardStore((state) => state.resume.sections.summary);

  if (!section.visible || isEmptyString(section.content)) return null;

  return (
    <section id={section.id}>
      <h4 className="font-bold text-primary">{section.name}</h4>

      <div
        dangerouslySetInnerHTML={{ __html: sanitize(section.content) }}
        style={{ columns: section.columns }}
        className="wysiwyg"
      />
    </section>
  );
};

type RatingProps = { level: number };

const Rating = ({ level }: RatingProps) => (
  <div className="flex items-center gap-x-1.5">
    {Array.from({ length: 5 }).map((_, index) => (
      <div
        key={index}
        className={cn("size-3 rounded border-2 border-primary", level > index && "bg-primary")}
      />
    ))}
  </div>
);

type LinkProps = {
  url: URL;
  icon?: React.ReactNode;
  iconOnRight?: boolean;
  label?: string;
  className?: string;
};

const Link = ({ url, icon, iconOnRight, label, className }: LinkProps) => {
  if (!isUrl(url.href)) return null;

  return (
    <div className="flex items-center gap-x-1.5">
      {!iconOnRight && (icon ?? <i className="ph ph-bold ph-link text-primary" />)}
      <a
        href={url.href}
        target="_blank"
        rel="noreferrer noopener nofollow"
        className={cn("inline-block", className)}
      >
        {label ?? (url.label || url.href)}
      </a>
      {iconOnRight && (icon ?? <i className="ph ph-bold ph-link text-primary" />)}
    </div>
  );
};

type LinkedEntityProps = {
  name: string;
  url: URL;
  separateLinks: boolean;
  className?: string;
};

const LinkedEntity = ({ name, url, separateLinks, className }: LinkedEntityProps) => {
  return !separateLinks && isUrl(url.href) ? (
    <Link
      url={url}
      label={name}
      icon={<i className="ph ph-bold ph-globe text-primary" />}
      iconOnRight={true}
      className={className}
    />
  ) : (
    <div className={className}>{name}</div>
  );
};

type SectionProps<T> = {
  section: SectionWithItem<T> | CustomSectionGroup;
  children?: (item: T) => React.ReactNode;
  className?: string;
  urlKey?: keyof T;
  levelKey?: keyof T;
  summaryKey?: keyof T;
  keywordsKey?: keyof T;
};

const Section = <T,>({
  section,
  children,
  className,
  urlKey,
  levelKey,
  summaryKey,
  keywordsKey,
}: SectionProps<T>) => {
  if (!section.visible || section.items.length === 0) return null;

  return (
    <section id={section.id} className="grid">
      <h4 className="font-bold text-primary">{section.name}</h4>

      <div
        className="grid gap-x-6 gap-y-3"
        style={{ gridTemplateColumns: `repeat(${section.columns}, 1fr)` }}
      >
        {section.items
          .filter((item) => item.visible)
          .map((item) => {
            const url = (urlKey && get(item, urlKey)) as URL | undefined;
            const level = (levelKey && get(item, levelKey, 0)) as number | undefined;
            const summary = (summaryKey && get(item, summaryKey, "")) as string | undefined;
            const keywords = (keywordsKey && get(item, keywordsKey, [])) as string[] | undefined;

            return (
              <div key={item.id} className={cn("space-y-2", className)}>
                <div>
                  {children?.(item as T)}
                  {url !== undefined && section.separateLinks && <Link url={url} />}
                </div>

                {summary !== undefined && !isEmptyString(summary) && (
                  <div
                    dangerouslySetInnerHTML={{ __html: sanitize(summary) }}
                    className="wysiwyg"
                  />
                )}

                {level !== undefined && level > 0 && <Rating level={level} />}

                {keywords !== undefined && keywords.length > 0 && (
                  <p className="text-sm">{keywords.join(", ")}</p>
                )}
              </div>
            );
          })}
      </div>
    </section>
  );
};

const Experience = () => {
  const section = useArtboardStore((state) => state.resume.sections.experience);

  return (
    <Section<Experience> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between">
          <div className="text-left">
            <LinkedEntity
              name={item.company}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.position}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
            <div>{item.location}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Education = () => {
  const section = useArtboardStore((state) => state.resume.sections.education);

  return (
    <Section<Education> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between">
          <div className="text-left">
            <LinkedEntity
              name={item.institution}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.area}</div>
            <div>{item.score}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
            <div>{item.studyType}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Awards = () => {
  const section = useArtboardStore((state) => state.resume.sections.awards);

  return (
    <Section<Award> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between">
          <div className="text-left">
            <div className="font-bold">{item.title}</div>
            <LinkedEntity
              name={item.awarder}
              url={item.url}
              separateLinks={section.separateLinks}
            />
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Certifications = () => {
  const section = useArtboardStore((state) => state.resume.sections.certifications);

  return (
    <Section<Certification> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between">
          <div className="text-left">
            <div className="font-bold">{item.name}</div>
            <LinkedEntity name={item.issuer} url={item.url} separateLinks={section.separateLinks} />
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Skills = () => {
  const section = useArtboardStore((state) => state.resume.sections.skills);

  return (
    <Section<Skill> section={section} levelKey="level" keywordsKey="keywords">
      {(item) => (
        <div>
          <div className="font-bold">{item.name}</div>
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Interests = () => {
  const section = useArtboardStore((state) => state.resume.sections.interests);

  return (
    <Section<Interest> section={section} keywordsKey="keywords" className="space-y-0.5">
      {(item) => <div className="font-bold">{item.name}</div>}
    </Section>
  );
};

const Publications = () => {
  const section = useArtboardStore((state) => state.resume.sections.publications);

  return (
    <Section<Publication> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between">
          <div className="text-left">
            <LinkedEntity
              name={item.name}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.publisher}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Volunteer = () => {
  const section = useArtboardStore((state) => state.resume.sections.volunteer);

  return (
    <Section<Volunteer> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between">
          <div className="text-left">
            <LinkedEntity
              name={item.organization}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.position}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
            <div>{item.location}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Languages = () => {
  const section = useArtboardStore((state) => state.resume.sections.languages);

  return (
    <Section<Language> section={section} levelKey="level">
      {(item) => (
        <div className="space-y-0.5">
          <div className="font-bold">{item.name}</div>
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Projects = () => {
  const section = useArtboardStore((state) => state.resume.sections.projects);

  return (
    <Section<Project> section={section} urlKey="url" summaryKey="summary" keywordsKey="keywords">
      {(item) => (
        <div className="flex items-start justify-between">
          <div className="text-left">
            <LinkedEntity
              name={item.name}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.description}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const References = () => {
  const section = useArtboardStore((state) => state.resume.sections.references);

  return (
    <Section<Reference> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div>
          <LinkedEntity
            name={item.name}
            url={item.url}
            separateLinks={section.separateLinks}
            className="font-bold"
          />
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Custom = ({ id }: { id: string }) => {
  const section = useArtboardStore((state) => state.resume.sections.custom[id]);

  return (
    <Section<CustomSection>
      section={section}
      urlKey="url"
      summaryKey="summary"
      keywordsKey="keywords"
    >
      {(item) => (
        <div className="flex items-start justify-between">
          <div className="text-left">
            <LinkedEntity
              name={item.name}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.description}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
            <div>{item.location}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const mapSectionToComponent = (section: SectionKey) => {
  switch (section) {
    case "summary": {
      return <Summary />;
    }
    case "experience": {
      return <Experience />;
    }
    case "education": {
      return <Education />;
    }
    case "awards": {
      return <Awards />;
    }
    case "certifications": {
      return <Certifications />;
    }
    case "skills": {
      return <Skills />;
    }
    case "interests": {
      return <Interests />;
    }
    case "publications": {
      return <Publications />;
    }
    case "volunteer": {
      return <Volunteer />;
    }
    case "languages": {
      return <Languages />;
    }
    case "projects": {
      return <Projects />;
    }
    case "references": {
      return <References />;
    }
    default: {
      if (section.startsWith("custom.")) return <Custom id={section.split(".")[1]} />;

      return null;
    }
  }
};

export const Onyx = ({ columns, isFirstPage = false }: TemplateProps) => {
  const [main, sidebar] = columns;

  return (
    <div className="p-custom space-y-4">
      {isFirstPage && <Header />}

      {main.map((section) => (
        <Fragment key={section}>{mapSectionToComponent(section)}</Fragment>
      ))}

      {sidebar.map((section) => (
        <Fragment key={section}>{mapSectionToComponent(section)}</Fragment>
      ))}
    </div>
  );
};


================================================
File: apps/artboard/src/templates/pikachu.tsx
================================================
import type {
  Award,
  Certification,
  CustomSection,
  CustomSectionGroup,
  Interest,
  Language,
  Profile,
  Project,
  Publication,
  Reference,
  SectionKey,
  SectionWithItem,
  Skill,
  URL,
} from "@reactive-resume/schema";
import { Education, Experience, Volunteer } from "@reactive-resume/schema";
import { cn, isEmptyString, isUrl, sanitize } from "@reactive-resume/utils";
import get from "lodash.get";
import { Fragment } from "react";

import { BrandIcon } from "../components/brand-icon";
import { Picture } from "../components/picture";
import { useArtboardStore } from "../store/artboard";
import type { TemplateProps } from "../types/template";

const Header = () => {
  const basics = useArtboardStore((state) => state.resume.basics);
  const borderRadius = useArtboardStore((state) => state.resume.basics.picture.borderRadius);

  return (
    <div
      className="summary group bg-primary px-6 pb-7 pt-6 text-background"
      style={{ borderRadius: `calc(${borderRadius}px - 2px)` }}
    >
      <div className="col-span-2 space-y-2.5">
        <div>
          <h2 className="text-2xl font-bold">{basics.name}</h2>
          <p>{basics.headline}</p>
        </div>

        <hr className="border-background opacity-50" />

        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm">
          {basics.location && (
            <>
              <div className="flex items-center gap-x-1.5">
                <i className="ph ph-bold ph-map-pin" />
                <div>{basics.location}</div>
              </div>
              <div className="size-1 rounded-full bg-background last:hidden" />
            </>
          )}
          {basics.phone && (
            <>
              <div className="flex items-center gap-x-1.5">
                <i className="ph ph-bold ph-phone" />
                <a href={`tel:${basics.phone}`} target="_blank" rel="noreferrer">
                  {basics.phone}
                </a>
              </div>
              <div className="size-1 rounded-full bg-background last:hidden" />
            </>
          )}
          {basics.email && (
            <>
              <div className="flex items-center gap-x-1.5">
                <i className="ph ph-bold ph-at" />
                <a href={`mailto:${basics.email}`} target="_blank" rel="noreferrer">
                  {basics.email}
                </a>
              </div>
              <div className="size-1 rounded-full bg-background last:hidden" />
            </>
          )}
          {isUrl(basics.url.href) && (
            <>
              <Link url={basics.url} />
              <div className="size-1 rounded-full bg-background last:hidden" />
            </>
          )}
          {basics.customFields.map((item) => (
            <Fragment key={item.id}>
              <div className="flex items-center gap-x-1.5">
                <i className={cn(`ph ph-bold ph-${item.icon}`)} />
                {isUrl(item.value) ? (
                  <a href={item.value} target="_blank" rel="noreferrer noopener nofollow">
                    {item.name || item.value}
                  </a>
                ) : (
                  <span>{[item.name, item.value].filter(Boolean).join(": ")}</span>
                )}
              </div>
              <div className="size-1 rounded-full bg-background last:hidden" />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

const Summary = () => {
  const section = useArtboardStore((state) => state.resume.sections.summary);

  if (!section.visible || isEmptyString(section.content)) return null;

  return (
    <section id={section.id}>
      <h4 className="mb-2 border-b border-primary text-base font-bold">{section.name}</h4>

      <div
        dangerouslySetInnerHTML={{ __html: sanitize(section.content) }}
        style={{ columns: section.columns }}
        className="wysiwyg"
      />
    </section>
  );
};

type RatingProps = { level: number };

const Rating = ({ level }: RatingProps) => (
  <div className="flex items-center gap-x-1.5">
    {Array.from({ length: 5 }).map((_, index) => (
      <i
        key={index}
        className={cn(
          "ph ph-diamond text-primary",
          level > index && "ph-fill",
          level <= index && "ph-bold",
        )}
      />
      // <div
      //   key={index}
      //   className={cn("h-2 w-4 border border-primary", level > index && "bg-primary")}
      // />
    ))}
  </div>
);

type LinkProps = {
  url: URL;
  icon?: React.ReactNode;
  iconOnRight?: boolean;
  label?: string;
  className?: string;
};

const Link = ({ url, icon, iconOnRight, label, className }: LinkProps) => {
  if (!isUrl(url.href)) return null;

  return (
    <div className="flex items-center gap-x-1.5">
      {!iconOnRight &&
        (icon ?? (
          <i className="ph ph-bold ph-link text-primary group-[.summary]:text-background" />
        ))}
      <a
        href={url.href}
        target="_blank"
        rel="noreferrer noopener nofollow"
        className={cn("inline-block", className)}
      >
        {label ?? (url.label || url.href)}
      </a>
      {iconOnRight &&
        (icon ?? (
          <i className="ph ph-bold ph-link text-primary group-[.summary]:text-background" />
        ))}
    </div>
  );
};

type LinkedEntityProps = {
  name: string;
  url: URL;
  separateLinks: boolean;
  className?: string;
};

const LinkedEntity = ({ name, url, separateLinks, className }: LinkedEntityProps) => {
  return !separateLinks && isUrl(url.href) ? (
    <Link
      url={url}
      label={name}
      icon={<i className="ph ph-bold ph-globe text-primary group-[.summary]:text-background" />}
      iconOnRight={true}
      className={className}
    />
  ) : (
    <div className={className}>{name}</div>
  );
};

type SectionProps<T> = {
  section: SectionWithItem<T> | CustomSectionGroup;
  children?: (item: T) => React.ReactNode;
  className?: string;
  urlKey?: keyof T;
  levelKey?: keyof T;
  summaryKey?: keyof T;
  keywordsKey?: keyof T;
};

const Section = <T,>({
  section,
  children,
  className,
  urlKey,
  levelKey,
  summaryKey,
  keywordsKey,
}: SectionProps<T>) => {
  if (!section.visible || section.items.length === 0) return null;

  return (
    <section id={section.id} className="grid">
      <h4 className="mb-2 border-b border-primary text-base font-bold">{section.name}</h4>

      <div
        className="grid gap-x-6 gap-y-3"
        style={{ gridTemplateColumns: `repeat(${section.columns}, 1fr)` }}
      >
        {section.items
          .filter((item) => item.visible)
          .map((item) => {
            const url = (urlKey && get(item, urlKey)) as URL | undefined;
            const level = (levelKey && get(item, levelKey, 0)) as number | undefined;
            const summary = (summaryKey && get(item, summaryKey, "")) as string | undefined;
            const keywords = (keywordsKey && get(item, keywordsKey, [])) as string[] | undefined;

            return (
              <div key={item.id} className={cn("space-y-2", className)}>
                <div>
                  {children?.(item as T)}
                  {url !== undefined && section.separateLinks && <Link url={url} />}
                </div>

                {summary !== undefined && !isEmptyString(summary) && (
                  <div
                    dangerouslySetInnerHTML={{ __html: sanitize(summary) }}
                    className="wysiwyg"
                  />
                )}

                {level !== undefined && level > 0 && <Rating level={level} />}

                {keywords !== undefined && keywords.length > 0 && (
                  <p className="text-sm">{keywords.join(", ")}</p>
                )}
              </div>
            );
          })}
      </div>
    </section>
  );
};

const Profiles = () => {
  const section = useArtboardStore((state) => state.resume.sections.profiles);

  return (
    <Section<Profile> section={section}>
      {(item) => (
        <div>
          {isUrl(item.url.href) ? (
            <Link url={item.url} label={item.username} icon={<BrandIcon slug={item.icon} />} />
          ) : (
            <p>{item.username}</p>
          )}
          {!item.icon && <p className="text-sm">{item.network}</p>}
        </div>
      )}
    </Section>
  );
};

const Experience = () => {
  const section = useArtboardStore((state) => state.resume.sections.experience);

  return (
    <Section<Experience> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <LinkedEntity
              name={item.company}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.position}</div>
          </div>

          <div className="shrink-0 text-right group-[.sidebar]:text-left">
            <div className="font-bold">{item.date}</div>
            <div>{item.location}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Education = () => {
  const section = useArtboardStore((state) => state.resume.sections.education);

  return (
    <Section<Education> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <LinkedEntity
              name={item.institution}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.area}</div>
            <div>{item.score}</div>
          </div>

          <div className="shrink-0 text-right group-[.sidebar]:text-left">
            <div className="font-bold">{item.date}</div>
            <div>{item.studyType}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Awards = () => {
  const section = useArtboardStore((state) => state.resume.sections.awards);

  return (
    <Section<Award> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <div className="font-bold">{item.title}</div>
            <LinkedEntity
              name={item.awarder}
              url={item.url}
              separateLinks={section.separateLinks}
            />
          </div>

          <div className="shrink-0 text-right group-[.sidebar]:text-left">
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Certifications = () => {
  const section = useArtboardStore((state) => state.resume.sections.certifications);

  return (
    <Section<Certification> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <div className="font-bold">{item.name}</div>
            <LinkedEntity name={item.issuer} url={item.url} separateLinks={section.separateLinks} />
          </div>

          <div className="shrink-0 text-right group-[.sidebar]:text-left">
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Skills = () => {
  const section = useArtboardStore((state) => state.resume.sections.skills);

  return (
    <Section<Skill> section={section} levelKey="level" keywordsKey="keywords">
      {(item) => (
        <div>
          <div className="font-bold">{item.name}</div>
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Interests = () => {
  const section = useArtboardStore((state) => state.resume.sections.interests);

  return (
    <Section<Interest> section={section} className="space-y-1" keywordsKey="keywords">
      {(item) => <div className="font-bold">{item.name}</div>}
    </Section>
  );
};

const Publications = () => {
  const section = useArtboardStore((state) => state.resume.sections.publications);

  return (
    <Section<Publication> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <LinkedEntity
              name={item.name}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.publisher}</div>
          </div>

          <div className="shrink-0 text-right group-[.sidebar]:text-left">
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Volunteer = () => {
  const section = useArtboardStore((state) => state.resume.sections.volunteer);

  return (
    <Section<Volunteer> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <LinkedEntity
              name={item.organization}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.position}</div>
          </div>

          <div className="shrink-0 text-right group-[.sidebar]:text-left">
            <div className="font-bold">{item.date}</div>
            <div>{item.location}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Languages = () => {
  const section = useArtboardStore((state) => state.resume.sections.languages);

  return (
    <Section<Language> section={section} levelKey="level">
      {(item) => (
        <div>
          <div className="font-bold">{item.name}</div>
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Projects = () => {
  const section = useArtboardStore((state) => state.resume.sections.projects);

  return (
    <Section<Project> section={section} urlKey="url" summaryKey="summary" keywordsKey="keywords">
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <LinkedEntity
              name={item.name}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.description}</div>
          </div>

          <div className="shrink-0 text-right group-[.sidebar]:text-left">
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const References = () => {
  const section = useArtboardStore((state) => state.resume.sections.references);

  return (
    <Section<Reference> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div>
          <LinkedEntity
            name={item.name}
            url={item.url}
            separateLinks={section.separateLinks}
            className="font-bold"
          />
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Custom = ({ id }: { id: string }) => {
  const section = useArtboardStore((state) => state.resume.sections.custom[id]);

  return (
    <Section<CustomSection>
      section={section}
      urlKey="url"
      summaryKey="summary"
      keywordsKey="keywords"
    >
      {(item) => (
        <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
          <div className="text-left">
            <LinkedEntity
              name={item.name}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.description}</div>
          </div>

          <div className="shrink-0 text-right group-[.sidebar]:text-left">
            <div className="font-bold">{item.date}</div>
            <div>{item.location}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const mapSectionToComponent = (section: SectionKey) => {
  switch (section) {
    case "profiles": {
      return <Profiles />;
    }
    case "summary": {
      return <Summary />;
    }
    case "experience": {
      return <Experience />;
    }
    case "education": {
      return <Education />;
    }
    case "awards": {
      return <Awards />;
    }
    case "certifications": {
      return <Certifications />;
    }
    case "skills": {
      return <Skills />;
    }
    case "interests": {
      return <Interests />;
    }
    case "publications": {
      return <Publications />;
    }
    case "volunteer": {
      return <Volunteer />;
    }
    case "languages": {
      return <Languages />;
    }
    case "projects": {
      return <Projects />;
    }
    case "references": {
      return <References />;
    }
    default: {
      if (section.startsWith("custom.")) return <Custom id={section.split(".")[1]} />;

      return null;
    }
  }
};

export const Pikachu = ({ columns, isFirstPage = false }: TemplateProps) => {
  const [main, sidebar] = columns;

  return (
    <div className="p-custom grid grid-cols-3 space-x-6">
      <div className="sidebar group space-y-4">
        {isFirstPage && <Picture className="w-full !max-w-none" />}

        {sidebar.map((section) => (
          <Fragment key={section}>{mapSectionToComponent(section)}</Fragment>
        ))}
      </div>

      <div className={cn("main group space-y-4", sidebar.length > 0 ? "col-span-2" : "col-span-3")}>
        {isFirstPage && <Header />}

        {main.map((section) => (
          <Fragment key={section}>{mapSectionToComponent(section)}</Fragment>
        ))}
      </div>
    </div>
  );
};


================================================
File: apps/artboard/src/templates/rhyhorn.tsx
================================================
import type {
  Award,
  Certification,
  CustomSection,
  CustomSectionGroup,
  Interest,
  Language,
  Profile,
  Project,
  Publication,
  Reference,
  SectionKey,
  SectionWithItem,
  Skill,
  URL,
} from "@reactive-resume/schema";
import { Education, Experience, Volunteer } from "@reactive-resume/schema";
import { cn, isEmptyString, isUrl, sanitize } from "@reactive-resume/utils";
import get from "lodash.get";
import { Fragment } from "react";

import { BrandIcon } from "../components/brand-icon";
import { Picture } from "../components/picture";
import { useArtboardStore } from "../store/artboard";
import type { TemplateProps } from "../types/template";

const Header = () => {
  const basics = useArtboardStore((state) => state.resume.basics);

  return (
    <div className="flex items-center space-x-4">
      <Picture />

      <div className="space-y-0.5">
        <div className="text-2xl font-bold">{basics.name}</div>
        <div className="text-base">{basics.headline}</div>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm">
          {basics.location && (
            <div className="flex items-center gap-x-1.5 border-r pr-2 last:border-r-0 last:pr-0">
              <i className="ph ph-bold ph-map-pin text-primary" />
              <div>{basics.location}</div>
            </div>
          )}
          {basics.phone && (
            <div className="flex items-center gap-x-1.5 border-r pr-2 last:border-r-0 last:pr-0">
              <i className="ph ph-bold ph-phone text-primary" />
              <a href={`tel:${basics.phone}`} target="_blank" rel="noreferrer">
                {basics.phone}
              </a>
            </div>
          )}
          {basics.email && (
            <div className="flex items-center gap-x-1.5 border-r pr-2 last:border-r-0 last:pr-0">
              <i className="ph ph-bold ph-at text-primary" />
              <a href={`mailto:${basics.email}`} target="_blank" rel="noreferrer">
                {basics.email}
              </a>
            </div>
          )}
          <Link url={basics.url} />
          {basics.customFields.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-x-1.5 border-r pr-2 last:border-r-0 last:pr-0"
            >
              <i className={cn(`ph ph-bold ph-${item.icon}`, "text-primary")} />
              {isUrl(item.value) ? (
                <a href={item.value} target="_blank" rel="noreferrer noopener nofollow">
                  {item.name || item.value}
                </a>
              ) : (
                <span>{[item.name, item.value].filter(Boolean).join(": ")}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Summary = () => {
  const section = useArtboardStore((state) => state.resume.sections.summary);

  if (!section.visible || isEmptyString(section.content)) return null;

  return (
    <section id={section.id}>
      <h4 className="mb-2 border-b pb-0.5 text-sm font-bold">{section.name}</h4>

      <div
        dangerouslySetInnerHTML={{ __html: sanitize(section.content) }}
        style={{ columns: section.columns }}
        className="wysiwyg"
      />
    </section>
  );
};

type RatingProps = { level: number };

const Rating = ({ level }: RatingProps) => (
  <div className="flex items-center gap-x-1.5">
    {Array.from({ length: 5 }).map((_, index) => (
      <div
        key={index}
        className={cn("size-2 rounded-full border border-primary", level > index && "bg-primary")}
      />
    ))}
  </div>
);

type LinkProps = {
  url: URL;
  icon?: React.ReactNode;
  iconOnRight?: boolean;
  label?: string;
  className?: string;
};

const Link = ({ url, icon, iconOnRight, label, className }: LinkProps) => {
  if (!isUrl(url.href)) return null;

  return (
    <div className="flex items-center gap-x-1.5 border-r pr-2 last:border-r-0 last:pr-0">
      {!iconOnRight && (icon ?? <i className="ph ph-bold ph-link text-primary" />)}
      <a
        href={url.href}
        target="_blank"
        rel="noreferrer noopener nofollow"
        className={cn("inline-block", className)}
      >
        {label ?? (url.label || url.href)}
      </a>
      {iconOnRight && (icon ?? <i className="ph ph-bold ph-link text-primary" />)}
    </div>
  );
};

type LinkedEntityProps = {
  name: string;
  url: URL;
  separateLinks: boolean;
  className?: string;
};

const LinkedEntity = ({ name, url, separateLinks, className }: LinkedEntityProps) => {
  return !separateLinks && isUrl(url.href) ? (
    <Link
      url={url}
      label={name}
      icon={<i className="ph ph-bold ph-globe text-primary" />}
      iconOnRight={true}
      className={className}
    />
  ) : (
    <div className={className}>{name}</div>
  );
};

type SectionProps<T> = {
  section: SectionWithItem<T> | CustomSectionGroup;
  children?: (item: T) => React.ReactNode;
  className?: string;
  urlKey?: keyof T;
  levelKey?: keyof T;
  summaryKey?: keyof T;
  keywordsKey?: keyof T;
};

const Section = <T,>({
  section,
  children,
  className,
  urlKey,
  levelKey,
  summaryKey,
  keywordsKey,
}: SectionProps<T>) => {
  if (!section.visible || section.items.length === 0) return null;

  return (
    <section id={section.id} className="grid">
      <h4 className="mb-2 border-b pb-0.5 text-sm font-bold">{section.name}</h4>

      <div
        className="grid gap-x-6 gap-y-3"
        style={{ gridTemplateColumns: `repeat(${section.columns}, 1fr)` }}
      >
        {section.items
          .filter((item) => item.visible)
          .map((item) => {
            const url = (urlKey && get(item, urlKey)) as URL | undefined;
            const level = (levelKey && get(item, levelKey, 0)) as number | undefined;
            const summary = (summaryKey && get(item, summaryKey, "")) as string | undefined;
            const keywords = (keywordsKey && get(item, keywordsKey, [])) as string[] | undefined;

            return (
              <div key={item.id} className={cn("space-y-2", className)}>
                <div>
                  {children?.(item as T)}
                  {url !== undefined && section.separateLinks && <Link url={url} />}
                </div>

                {summary !== undefined && !isEmptyString(summary) && (
                  <div
                    dangerouslySetInnerHTML={{ __html: sanitize(summary) }}
                    className="wysiwyg"
                  />
                )}

                {level !== undefined && level > 0 && <Rating level={level} />}

                {keywords !== undefined && keywords.length > 0 && (
                  <p className="text-sm">{keywords.join(", ")}</p>
                )}
              </div>
            );
          })}
      </div>
    </section>
  );
};

const Profiles = () => {
  const section = useArtboardStore((state) => state.resume.sections.profiles);

  return (
    <Section<Profile> section={section}>
      {(item) => (
        <div>
          {isUrl(item.url.href) ? (
            <Link url={item.url} label={item.username} icon={<BrandIcon slug={item.icon} />} />
          ) : (
            <p>{item.username}</p>
          )}
          {!item.icon && <p className="text-sm">{item.network}</p>}
        </div>
      )}
    </Section>
  );
};

const Experience = () => {
  const section = useArtboardStore((state) => state.resume.sections.experience);

  return (
    <Section<Experience> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between">
          <div className="text-left">
            <LinkedEntity
              name={item.company}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.position}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
            <div>{item.location}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Education = () => {
  const section = useArtboardStore((state) => state.resume.sections.education);

  return (
    <Section<Education> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between">
          <div className="text-left">
            <LinkedEntity
              name={item.institution}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.area}</div>
            <div>{item.score}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
            <div>{item.studyType}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Awards = () => {
  const section = useArtboardStore((state) => state.resume.sections.awards);

  return (
    <Section<Award> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between">
          <div className="text-left">
            <div className="font-bold">{item.title}</div>
            <LinkedEntity
              name={item.awarder}
              url={item.url}
              separateLinks={section.separateLinks}
            />
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Certifications = () => {
  const section = useArtboardStore((state) => state.resume.sections.certifications);

  return (
    <Section<Certification> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between">
          <div className="text-left">
            <div className="font-bold">{item.name}</div>
            <LinkedEntity name={item.issuer} url={item.url} separateLinks={section.separateLinks} />
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Skills = () => {
  const section = useArtboardStore((state) => state.resume.sections.skills);

  return (
    <Section<Skill> section={section} levelKey="level" keywordsKey="keywords">
      {(item) => (
        <div>
          <div className="font-bold">{item.name}</div>
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Interests = () => {
  const section = useArtboardStore((state) => state.resume.sections.interests);

  return (
    <Section<Interest> section={section} keywordsKey="keywords" className="space-y-0.5">
      {(item) => <div className="font-bold">{item.name}</div>}
    </Section>
  );
};

const Publications = () => {
  const section = useArtboardStore((state) => state.resume.sections.publications);

  return (
    <Section<Publication> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between">
          <div className="text-left">
            <LinkedEntity
              name={item.name}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.publisher}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Volunteer = () => {
  const section = useArtboardStore((state) => state.resume.sections.volunteer);

  return (
    <Section<Volunteer> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div className="flex items-start justify-between">
          <div className="text-left">
            <LinkedEntity
              name={item.organization}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.position}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
            <div>{item.location}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Languages = () => {
  const section = useArtboardStore((state) => state.resume.sections.languages);

  return (
    <Section<Language> section={section} levelKey="level">
      {(item) => (
        <div className="space-y-0.5">
          <div className="font-bold">{item.name}</div>
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Projects = () => {
  const section = useArtboardStore((state) => state.resume.sections.projects);

  return (
    <Section<Project> section={section} urlKey="url" summaryKey="summary" keywordsKey="keywords">
      {(item) => (
        <div className="flex items-start justify-between">
          <div className="text-left">
            <LinkedEntity
              name={item.name}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.description}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const References = () => {
  const section = useArtboardStore((state) => state.resume.sections.references);

  return (
    <Section<Reference> section={section} urlKey="url" summaryKey="summary">
      {(item) => (
        <div>
          <LinkedEntity
            name={item.name}
            url={item.url}
            separateLinks={section.separateLinks}
            className="font-bold"
          />
          <div>{item.description}</div>
        </div>
      )}
    </Section>
  );
};

const Custom = ({ id }: { id: string }) => {
  const section = useArtboardStore((state) => state.resume.sections.custom[id]);

  return (
    <Section<CustomSection>
      section={section}
      urlKey="url"
      summaryKey="summary"
      keywordsKey="keywords"
    >
      {(item) => (
        <div className="flex items-start justify-between">
          <div className="text-left">
            <LinkedEntity
              name={item.name}
              url={item.url}
              separateLinks={section.separateLinks}
              className="font-bold"
            />
            <div>{item.description}</div>
          </div>

          <div className="shrink-0 text-right">
            <div className="font-bold">{item.date}</div>
            <div>{item.location}</div>
          </div>
        </div>
      )}
    </Section>
  );
};

const mapSectionToComponent = (section: SectionKey) => {
  switch (section) {
    case "profiles": {
      return <Profiles />;
    }
    case "summary": {
      return <Summary />;
    }
    case "experience": {
      return <Experience />;
    }
    case "education": {
      return <Education />;
    }
    case "awards": {
      return <Awards />;
    }
    case "certifications": {
      return <Certifications />;
    }
    case "skills": {
      return <Skills />;
    }
    case "interests": {
      return <Interests />;
    }
    case "publications": {
      return <Publications />;
    }
    case "volunteer": {
      return <Volunteer />;
    }
    case "languages": {
      return <Languages />;
    }
    case "projects": {
      return <Projects />;
    }
    case "references": {
      return <References />;
    }
    default: {
      if (section.startsWith("custom.")) return <Custom id={section.split(".")[1]} />;

      return null;
    }
  }
};

export const Rhyhorn = ({ columns, isFirstPage = false }: TemplateProps) => {
  const [main, sidebar] = columns;

  return (
    <div className="p-custom space-y-4">
      {isFirstPage && <Header />}

      {main.map((section) => (
        <Fragment key={section}>{mapSectionToComponent(section)}</Fragment>
      ))}

      {sidebar.map((section) => (
        <Fragment key={section}>{mapSectionToComponent(section)}</Fragment>
      ))}
    </div>
  );
};


================================================
File: apps/client/public/templates/json/azurill.json
================================================
{
  "basics": {
    "name": "John Doe",
    "headline": "Creative and Innovative Web Developer",
    "email": "john.doe@gmail.com",
    "phone": "(555) 123-4567",
    "location": "Pleasantville, CA 94588",
    "url": {
      "label": "",
      "href": "https://johndoe.me/"
    },
    "customFields": [],
    "picture": {
      "url": "https://i.imgur.com/HgwyOuJ.jpg",
      "size": 120,
      "aspectRatio": 1.2,
      "borderRadius": 4,
      "effects": {
        "hidden": false,
        "border": false,
        "grayscale": false
      }
    }
  },
  "sections": {
    "summary": {
      "name": "Summary",
      "columns": 1,
      "visible": true,
      "id": "summary",
      "content": "<p>Innovative Web Developer with 5 years of experience in building impactful and user-friendly websites and applications. Specializes in <strong>front-end technologies</strong> and passionate about modern web standards and cutting-edge development techniques. Proven track record of leading successful projects from concept to deployment.</p>"
    },
    "awards": {
      "name": "Awards",
      "columns": 1,
      "visible": true,
      "id": "awards",
      "items": []
    },
    "certifications": {
      "name": "Certifications",
      "columns": 1,
      "visible": true,
      "id": "certifications",
      "items": [
        {
          "id": "spdhh9rrqi1gvj0yqnbqunlo",
          "visible": true,
          "name": "Full-Stack Web Development",
          "issuer": "CodeAcademy",
          "date": "2020",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        },
        {
          "id": "n838rddyqv47zexn6cxauwqp",
          "visible": true,
          "name": "AWS Certified Developer",
          "issuer": "Amazon Web Services",
          "date": "2019",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "education": {
      "name": "Education",
      "columns": 1,
      "visible": true,
      "id": "education",
      "items": [
        {
          "id": "yo3p200zo45c6cdqc6a2vtt3",
          "visible": true,
          "institution": "University of California",
          "studyType": "Bachelor's in Computer Science",
          "area": "Berkeley, CA",
          "score": "",
          "date": "August 2012 to May 2016",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "experience": {
      "name": "Experience",
      "columns": 1,
      "visible": true,
      "id": "experience",
      "items": [
        {
          "id": "lhw25d7gf32wgdfpsktf6e0x",
          "visible": true,
          "company": "Creative Solutions Inc.",
          "position": "Senior Web Developer",
          "location": "San Francisco, CA",
          "date": "January 2019 to Present",
          "summary": "<ul><li><p>Spearheaded the redesign of the main product website, resulting in a 40% increase in user engagement.</p></li><li><p>Developed and implemented a new responsive framework, improving cross-device compatibility.</p></li><li><p>Mentored a team of four junior developers, fostering a culture of technical excellence.</p></li></ul>",
          "url": {
            "label": "",
            "href": "https://creativesolutions.inc/"
          }
        },
        {
          "id": "r6543lil53ntrxmvel53gbtm",
          "visible": true,
          "company": "TechAdvancers",
          "position": "Web Developer",
          "location": "San Jose, CA",
          "date": "June 2016 to December 2018",
          "summary": "<ul><li><p>Collaborated in a team of 10 to develop high-quality web applications using React.js and Node.js.</p></li><li><p>Managed the integration of third-party services such as Stripe for payments and Twilio for SMS services.</p></li><li><p>Optimized application performance, achieving a 30% reduction in load times.</p></li></ul>",
          "url": {
            "label": "",
            "href": "https://techadvancers.com/"
          }
        }
      ]
    },
    "volunteer": {
      "name": "Volunteering",
      "columns": 1,
      "visible": true,
      "id": "volunteer",
      "items": []
    },
    "interests": {
      "name": "Interests",
      "columns": 1,
      "visible": true,
      "id": "interests",
      "items": []
    },
    "languages": {
      "name": "Languages",
      "columns": 1,
      "visible": true,
      "id": "languages",
      "items": []
    },
    "profiles": {
      "name": "Profiles",
      "columns": 1,
      "visible": true,
      "id": "profiles",
      "items": [
        {
          "id": "cnbk5f0aeqvhx69ebk7hktwd",
          "visible": true,
          "network": "LinkedIn",
          "username": "johndoe",
          "icon": "linkedin",
          "url": {
            "label": "",
            "href": "https://linkedin.com/in/johndoe"
          }
        },
        {
          "id": "ukl0uecvzkgm27mlye0wazlb",
          "visible": true,
          "network": "GitHub",
          "username": "johndoe",
          "icon": "github",
          "url": {
            "label": "",
            "href": "https://github.com/johndoe"
          }
        }
      ]
    },
    "projects": {
      "name": "Projects",
      "columns": 1,
      "visible": true,
      "id": "projects",
      "items": [
        {
          "id": "yw843emozcth8s1ubi1ubvlf",
          "visible": true,
          "name": "E-Commerce Platform",
          "description": "Project Lead",
          "date": "",
          "summary": "<p>Led the development of a full-stack e-commerce platform, improving sales conversion by 25%.</p>",
          "keywords": [],
          "url": {
            "label": "",
            "href": ""
          }
        },
        {
          "id": "ncxgdjjky54gh59iz2t1xi1v",
          "visible": true,
          "name": "Interactive Dashboard",
          "description": "Frontend Developer",
          "date": "",
          "summary": "<p>Created an interactive analytics dashboard for a SaaS application, enhancing data visualization for clients.</p>",
          "keywords": [],
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "publications": {
      "name": "Publications",
      "columns": 1,
      "visible": true,
      "id": "publications",
      "items": []
    },
    "references": {
      "name": "References",
      "columns": 1,
      "visible": false,
      "id": "references",
      "items": [
        {
          "id": "f2sv5z0cce6ztjl87yuk8fak",
          "visible": true,
          "name": "Available upon request",
          "description": "",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "skills": {
      "name": "Skills",
      "columns": 1,
      "visible": true,
      "id": "skills",
      "items": [
        {
          "id": "hn0keriukh6c0ojktl9gsgjm",
          "visible": true,
          "name": "Web Technologies",
          "description": "Advanced",
          "level": 0,
          "keywords": ["HTML5", "JavaScript", "PHP", "Python"]
        },
        {
          "id": "r8c3y47vykausqrgmzwg5pur",
          "visible": true,
          "name": "Web Frameworks",
          "description": "Intermediate",
          "level": 0,
          "keywords": ["React.js", "Angular", "Vue.js", "Laravel", "Django"]
        },
        {
          "id": "b5l75aseexqv17quvqgh73fe",
          "visible": true,
          "name": "Tools",
          "description": "Intermediate",
          "level": 0,
          "keywords": ["Webpack", "Git", "Jenkins", "Docker", "JIRA"]
        }
      ]
    },
    "custom": {}
  },
  "metadata": {
    "template": "azurill",
    "layout": [
      [
        ["summary", "experience", "education", "references"],
        [
          "profiles",
          "skills",
          "certifications",
          "projects",
          "interests",
          "languages",
          "awards",
          "volunteer",
          "publications"
        ]
      ]
    ],
    "css": {
      "value": "* {\n\toutline: 1px solid #000;\n\toutline-offset: 4px;\n}",
      "visible": false
    },
    "page": {
      "margin": 14,
      "format": "a4",
      "options": {
        "breakLine": true,
        "pageNumbers": true
      }
    },
    "theme": {
      "background": "#ffffff",
      "text": "#000000",
      "primary": "#ca8a04"
    },
    "typography": {
      "font": {
        "family": "Merriweather",
        "subset": "latin",
        "variants": ["regular"],
        "size": 13
      },
      "lineHeight": 1.75,
      "hideIcons": false,
      "underlineLinks": true
    },
    "notes": ""
  }
}


================================================
File: apps/client/public/templates/json/bronzor.json
================================================
{
  "basics": {
    "name": "John Doe",
    "headline": "Creative and Innovative Web Developer",
    "email": "john.doe@gmail.com",
    "phone": "(555) 123-4567",
    "location": "Pleasantville, CA 94588",
    "url": {
      "label": "",
      "href": "https://johndoe.me/"
    },
    "customFields": [],
    "picture": {
      "url": "https://i.imgur.com/HgwyOuJ.jpg",
      "size": 140,
      "aspectRatio": 1,
      "borderRadius": 4,
      "effects": {
        "hidden": true,
        "border": false,
        "grayscale": false
      }
    }
  },
  "sections": {
    "summary": {
      "name": "Summary",
      "columns": 1,
      "visible": true,
      "id": "summary",
      "content": "<p>Innovative Web Developer with 5 years of experience in building impactful and user-friendly websites and applications. Specializes in <strong>front-end technologies</strong> and passionate about modern web standards and cutting-edge development techniques. Proven track record of leading successful projects from concept to deployment.</p>"
    },
    "awards": {
      "name": "Awards",
      "columns": 1,
      "visible": true,
      "id": "awards",
      "items": []
    },
    "certifications": {
      "name": "Certifications",
      "columns": 2,
      "visible": true,
      "id": "certifications",
      "items": [
        {
          "id": "spdhh9rrqi1gvj0yqnbqunlo",
          "visible": true,
          "name": "Full-Stack Web Development",
          "issuer": "CodeAcademy",
          "date": "2020",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        },
        {
          "id": "n838rddyqv47zexn6cxauwqp",
          "visible": true,
          "name": "AWS Certified Developer",
          "issuer": "Amazon Web Services",
          "date": "2019",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "education": {
      "name": "Education",
      "columns": 1,
      "visible": true,
      "id": "education",
      "items": [
        {
          "id": "yo3p200zo45c6cdqc6a2vtt3",
          "visible": true,
          "institution": "University of California",
          "studyType": "Bachelor's in Computer Science",
          "area": "Berkeley, CA",
          "score": "",
          "date": "August 2012 to May 2016",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "experience": {
      "name": "Experience",
      "columns": 1,
      "visible": true,
      "id": "experience",
      "items": [
        {
          "id": "lhw25d7gf32wgdfpsktf6e0x",
          "visible": true,
          "company": "Creative Solutions Inc.",
          "position": "Senior Web Developer",
          "location": "San Francisco, CA",
          "date": "January 2019 to Present",
          "summary": "<ul><li><p>Spearheaded the redesign of the main product website, resulting in a 40% increase in user engagement.</p></li><li><p>Developed and implemented a new responsive framework, improving cross-device compatibility.</p></li><li><p>Mentored a team of four junior developers, fostering a culture of technical excellence.</p></li></ul>",
          "url": {
            "label": "",
            "href": "https://creativesolutions.inc/"
          }
        },
        {
          "id": "r6543lil53ntrxmvel53gbtm",
          "visible": true,
          "company": "TechAdvancers",
          "position": "Web Developer",
          "location": "San Jose, CA",
          "date": "June 2016 to December 2018",
          "summary": "<ul><li><p>Collaborated in a team of 10 to develop high-quality web applications using React.js and Node.js.</p></li><li><p>Managed the integration of third-party services such as Stripe for payments and Twilio for SMS services.</p></li><li><p>Optimized application performance, achieving a 30% reduction in load times.</p></li></ul>",
          "url": {
            "label": "",
            "href": "https://techadvancers.com/"
          }
        }
      ]
    },
    "volunteer": {
      "name": "Volunteering",
      "columns": 1,
      "visible": true,
      "id": "volunteer",
      "items": []
    },
    "interests": {
      "name": "Interests",
      "columns": 1,
      "visible": true,
      "id": "interests",
      "items": []
    },
    "languages": {
      "name": "Languages",
      "columns": 2,
      "visible": true,
      "id": "languages",
      "items": [
        {
          "id": "ey0c353j3apepzqmyl8zd37c",
          "visible": true,
          "name": "English",
          "description": "Native Speaker",
          "level": 0
        },
        {
          "id": "a4dnf32wyj5phgln2rx97qk2",
          "visible": true,
          "name": "Spanish",
          "description": "Intermediate",
          "level": 0
        }
      ]
    },
    "profiles": {
      "name": "Profiles",
      "columns": 3,
      "visible": true,
      "id": "profiles",
      "items": [
        {
          "id": "cnbk5f0aeqvhx69ebk7hktwd",
          "visible": true,
          "network": "LinkedIn",
          "username": "johndoe",
          "icon": "linkedin",
          "url": {
            "label": "",
            "href": "https://linkedin.com/in/johndoe"
          }
        },
        {
          "id": "ukl0uecvzkgm27mlye0wazlb",
          "visible": true,
          "network": "GitHub",
          "username": "johndoe",
          "icon": "github",
          "url": {
            "label": "",
            "href": "https://github.com/johndoe"
          }
        },
        {
          "id": "k97vdxzmssmgel79km48kxgg",
          "visible": true,
          "network": "StackOverflow",
          "username": "johndoe",
          "icon": "stackoverflow",
          "url": {
            "label": "",
            "href": "https://stackoverflow.com/u/johndoe"
          }
        }
      ]
    },
    "projects": {
      "name": "Projects",
      "columns": 2,
      "visible": true,
      "id": "projects",
      "items": [
        {
          "id": "yw843emozcth8s1ubi1ubvlf",
          "visible": true,
          "name": "E-Commerce Platform",
          "description": "Project Lead",
          "date": "",
          "summary": "<p>Led the development of a full-stack e-commerce platform, improving sales conversion by 25%.</p>",
          "keywords": [],
          "url": {
            "label": "",
            "href": ""
          }
        },
        {
          "id": "ncxgdjjky54gh59iz2t1xi1v",
          "visible": true,
          "name": "Interactive Dashboard",
          "description": "Frontend Developer",
          "date": "",
          "summary": "<p>Created an interactive analytics dashboard for a SaaS application, enhancing data visualization for clients.</p>",
          "keywords": [],
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "publications": {
      "name": "Publications",
      "columns": 1,
      "visible": true,
      "id": "publications",
      "items": []
    },
    "references": {
      "name": "References",
      "columns": 1,
      "visible": true,
      "id": "references",
      "items": [
        {
          "id": "f2sv5z0cce6ztjl87yuk8fak",
          "visible": true,
          "name": "Available upon request",
          "description": "",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "skills": {
      "name": "Skills",
      "columns": 3,
      "visible": true,
      "id": "skills",
      "items": [
        {
          "id": "hn0keriukh6c0ojktl9gsgjm",
          "visible": true,
          "name": "Web Technologies",
          "description": "Advanced",
          "level": 0,
          "keywords": ["HTML5", "JavaScript", "PHP", "Python"]
        },
        {
          "id": "r8c3y47vykausqrgmzwg5pur",
          "visible": true,
          "name": "Web Frameworks",
          "description": "Intermediate",
          "level": 0,
          "keywords": ["React.js", "Angular", "Vue.js", "Laravel", "Django"]
        },
        {
          "id": "b5l75aseexqv17quvqgh73fe",
          "visible": true,
          "name": "Tools",
          "description": "Intermediate",
          "level": 0,
          "keywords": ["Webpack", "Git", "Jenkins", "Docker", "JIRA"]
        }
      ]
    },
    "custom": {}
  },
  "metadata": {
    "template": "bronzor",
    "layout": [
      [
        ["profiles", "summary", "experience", "education", "projects"],
        [
          "skills",
          "certifications",
          "languages",
          "references",
          "interests",
          "awards",
          "volunteer",
          "publications"
        ]
      ]
    ],
    "css": {
      "value": "* {\n\toutline: 1px solid #000;\n\toutline-offset: 4px;\n}",
      "visible": false
    },
    "page": {
      "margin": 14,
      "format": "a4",
      "options": {
        "breakLine": true,
        "pageNumbers": true
      }
    },
    "theme": {
      "background": "#ffffff",
      "text": "#000000",
      "primary": "#059669"
    },
    "typography": {
      "font": {
        "family": "IBM Plex Sans",
        "subset": "latin",
        "variants": ["regular", "500"],
        "size": 13
      },
      "lineHeight": 1.5,
      "hideIcons": false,
      "underlineLinks": true
    },
    "notes": ""
  }
}


================================================
File: apps/client/public/templates/json/chikorita.json
================================================
{
  "basics": {
    "name": "John Doe",
    "headline": "Creative and Innovative Web Developer",
    "email": "john.doe@gmail.com",
    "phone": "(555) 123-4567",
    "location": "Pleasantville, CA 94588",
    "url": {
      "label": "",
      "href": "https://johndoe.me/"
    },
    "customFields": [],
    "picture": {
      "url": "https://i.imgur.com/HgwyOuJ.jpg",
      "size": 140,
      "aspectRatio": 1,
      "borderRadius": 4,
      "effects": {
        "hidden": false,
        "border": false,
        "grayscale": false
      }
    }
  },
  "sections": {
    "summary": {
      "name": "Summary",
      "columns": 1,
      "visible": true,
      "id": "summary",
      "content": "<p>Innovative Web Developer with 5 years of experience in building impactful and user-friendly websites and applications. Specializes in <strong>front-end technologies</strong> and passionate about modern web standards and cutting-edge development techniques. Proven track record of leading successful projects from concept to deployment.</p>"
    },
    "awards": {
      "name": "Awards",
      "columns": 1,
      "visible": true,
      "id": "awards",
      "items": []
    },
    "certifications": {
      "name": "Certifications",
      "columns": 1,
      "visible": true,
      "id": "certifications",
      "items": [
        {
          "id": "spdhh9rrqi1gvj0yqnbqunlo",
          "visible": true,
          "name": "Full-Stack Web Development",
          "issuer": "CodeAcademy",
          "date": "2020",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        },
        {
          "id": "n838rddyqv47zexn6cxauwqp",
          "visible": true,
          "name": "AWS Certified Developer",
          "issuer": "Amazon Web Services",
          "date": "2019",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "education": {
      "name": "Education",
      "columns": 1,
      "visible": true,
      "id": "education",
      "items": [
        {
          "id": "yo3p200zo45c6cdqc6a2vtt3",
          "visible": true,
          "institution": "University of California",
          "studyType": "Bachelor's in Computer Science",
          "area": "Berkeley, CA",
          "score": "",
          "date": "August 2012 to May 2016",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "experience": {
      "name": "Experience",
      "columns": 1,
      "visible": true,
      "id": "experience",
      "items": [
        {
          "id": "lhw25d7gf32wgdfpsktf6e0x",
          "visible": true,
          "company": "Creative Solutions Inc.",
          "position": "Senior Web Developer",
          "location": "San Francisco, CA",
          "date": "January 2019 to Present",
          "summary": "<ul><li><p>Spearheaded the redesign of the main product website, resulting in a 40% increase in user engagement.</p></li><li><p>Developed and implemented a new responsive framework, improving cross-device compatibility.</p></li><li><p>Mentored a team of four junior developers, fostering a culture of technical excellence.</p></li></ul>",
          "url": {
            "label": "",
            "href": "https://creativesolutions.inc/"
          }
        },
        {
          "id": "r6543lil53ntrxmvel53gbtm",
          "visible": true,
          "company": "TechAdvancers",
          "position": "Web Developer",
          "location": "San Jose, CA",
          "date": "June 2016 to December 2018",
          "summary": "<ul><li><p>Collaborated in a team of 10 to develop high-quality web applications using React.js and Node.js.</p></li><li><p>Managed the integration of third-party services such as Stripe for payments and Twilio for SMS services.</p></li><li><p>Optimized application performance, achieving a 30% reduction in load times.</p></li></ul>",
          "url": {
            "label": "",
            "href": "https://techadvancers.com/"
          }
        }
      ]
    },
    "volunteer": {
      "name": "Volunteering",
      "columns": 1,
      "visible": true,
      "id": "volunteer",
      "items": []
    },
    "interests": {
      "name": "Interests",
      "columns": 1,
      "visible": true,
      "id": "interests",
      "items": []
    },
    "languages": {
      "name": "Languages",
      "columns": 1,
      "visible": true,
      "id": "languages",
      "items": [
        {
          "id": "ey0c353j3apepzqmyl8zd37c",
          "visible": true,
          "name": "English",
          "description": "Native Speaker",
          "level": 0
        },
        {
          "id": "a4dnf32wyj5phgln2rx97qk2",
          "visible": true,
          "name": "Spanish",
          "description": "Intermediate",
          "level": 0
        }
      ]
    },
    "profiles": {
      "name": "Profiles",
      "columns": 3,
      "visible": true,
      "id": "profiles",
      "items": [
        {
          "id": "cnbk5f0aeqvhx69ebk7hktwd",
          "visible": true,
          "network": "LinkedIn",
          "username": "johndoe",
          "icon": "linkedin",
          "url": {
            "label": "",
            "href": "https://linkedin.com/in/johndoe"
          }
        },
        {
          "id": "ukl0uecvzkgm27mlye0wazlb",
          "visible": true,
          "network": "GitHub",
          "username": "johndoe",
          "icon": "github",
          "url": {
            "label": "",
            "href": "https://github.com/johndoe"
          }
        },
        {
          "id": "k97vdxzmssmgel79km48kxgg",
          "visible": true,
          "network": "StackOverflow",
          "username": "johndoe",
          "icon": "stackoverflow",
          "url": {
            "label": "",
            "href": "https://stackoverflow.com/u/johndoe"
          }
        }
      ]
    },
    "projects": {
      "name": "Projects",
      "columns": 2,
      "visible": true,
      "id": "projects",
      "items": [
        {
          "id": "yw843emozcth8s1ubi1ubvlf",
          "visible": true,
          "name": "E-Commerce Platform",
          "description": "Project Lead",
          "date": "",
          "summary": "<p>Led the development of a full-stack e-commerce platform, improving sales conversion by 25%.</p>",
          "keywords": [],
          "url": {
            "label": "",
            "href": ""
          }
        },
        {
          "id": "ncxgdjjky54gh59iz2t1xi1v",
          "visible": true,
          "name": "Interactive Dashboard",
          "description": "Frontend Developer",
          "date": "",
          "summary": "<p>Created an interactive analytics dashboard for a SaaS application, enhancing data visualization for clients.</p>",
          "keywords": [],
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "publications": {
      "name": "Publications",
      "columns": 1,
      "visible": true,
      "id": "publications",
      "items": []
    },
    "references": {
      "name": "References",
      "columns": 1,
      "visible": true,
      "id": "references",
      "items": [
        {
          "id": "f2sv5z0cce6ztjl87yuk8fak",
          "visible": true,
          "name": "Available upon request",
          "description": "",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "skills": {
      "name": "Skills",
      "columns": 1,
      "visible": true,
      "id": "skills",
      "items": [
        {
          "id": "hn0keriukh6c0ojktl9gsgjm",
          "visible": true,
          "name": "Web Technologies",
          "description": "Advanced",
          "level": 0,
          "keywords": ["HTML5", "JavaScript", "PHP", "Python"]
        },
        {
          "id": "r8c3y47vykausqrgmzwg5pur",
          "visible": true,
          "name": "Web Frameworks",
          "description": "Intermediate",
          "level": 0,
          "keywords": ["React.js", "Angular", "Vue.js", "Laravel", "Django"]
        },
        {
          "id": "b5l75aseexqv17quvqgh73fe",
          "visible": true,
          "name": "Tools",
          "description": "Intermediate",
          "level": 0,
          "keywords": ["Webpack", "Git", "Jenkins", "Docker", "JIRA"]
        }
      ]
    },
    "custom": {}
  },
  "metadata": {
    "template": "chikorita",
    "layout": [
      [
        ["profiles", "summary", "experience", "education", "projects"],
        [
          "skills",
          "certifications",
          "languages",
          "references",
          "interests",
          "awards",
          "volunteer",
          "publications"
        ]
      ]
    ],
    "css": {
      "value": "* {\n\toutline: 1px solid #000;\n\toutline-offset: 4px;\n}",
      "visible": false
    },
    "page": {
      "margin": 14,
      "format": "a4",
      "options": {
        "breakLine": true,
        "pageNumbers": true
      }
    },
    "theme": {
      "background": "#ffffff",
      "text": "#000000",
      "primary": "#059669"
    },
    "typography": {
      "font": {
        "family": "Merriweather",
        "subset": "latin",
        "variants": ["regular"],
        "size": 13
      },
      "lineHeight": 1.5,
      "hideIcons": false,
      "underlineLinks": true
    },
    "notes": ""
  }
}


================================================
File: apps/client/public/templates/json/ditto.json
================================================
{
  "basics": {
    "name": "John Doe",
    "headline": "Creative and Innovative Web Developer",
    "email": "john.doe@gmail.com",
    "phone": "(555) 123-4567",
    "location": "Pleasantville, CA 94588",
    "url": {
      "label": "",
      "href": "https://johndoe.me/"
    },
    "customFields": [],
    "picture": {
      "url": "https://i.imgur.com/HgwyOuJ.jpg",
      "size": 140,
      "aspectRatio": 1,
      "borderRadius": 4,
      "effects": {
        "hidden": false,
        "border": false,
        "grayscale": false
      }
    }
  },
  "sections": {
    "summary": {
      "name": "Summary",
      "columns": 1,
      "visible": true,
      "id": "summary",
      "content": "<p>Innovative Web Developer with 5 years of experience in building impactful and user-friendly websites and applications. Specializes in <strong>front-end technologies</strong> and passionate about modern web standards and cutting-edge development techniques. Proven track record of leading successful projects from concept to deployment.</p>"
    },
    "awards": {
      "name": "Awards",
      "columns": 1,
      "visible": true,
      "id": "awards",
      "items": []
    },
    "certifications": {
      "name": "Certifications",
      "columns": 1,
      "visible": true,
      "id": "certifications",
      "items": [
        {
          "id": "spdhh9rrqi1gvj0yqnbqunlo",
          "visible": true,
          "name": "Full-Stack Web Development",
          "issuer": "CodeAcademy",
          "date": "2020",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        },
        {
          "id": "n838rddyqv47zexn6cxauwqp",
          "visible": true,
          "name": "AWS Certified Developer",
          "issuer": "Amazon Web Services",
          "date": "2019",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "education": {
      "name": "Education",
      "columns": 1,
      "visible": true,
      "id": "education",
      "items": [
        {
          "id": "yo3p200zo45c6cdqc6a2vtt3",
          "visible": true,
          "institution": "University of California",
          "studyType": "Bachelor's in Computer Science",
          "area": "Berkeley, CA",
          "score": "",
          "date": "August 2012 to May 2016",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "experience": {
      "name": "Experience",
      "columns": 1,
      "visible": true,
      "id": "experience",
      "items": [
        {
          "id": "lhw25d7gf32wgdfpsktf6e0x",
          "visible": true,
          "company": "Creative Solutions Inc.",
          "position": "Senior Web Developer",
          "location": "San Francisco, CA",
          "date": "January 2019 to Present",
          "summary": "<ul><li><p>Spearheaded the redesign of the main product website, resulting in a 40% increase in user engagement.</p></li><li><p>Developed and implemented a new responsive framework, improving cross-device compatibility.</p></li><li><p>Mentored a team of four junior developers, fostering a culture of technical excellence.</p></li></ul>",
          "url": {
            "label": "",
            "href": "https://creativesolutions.inc/"
          }
        },
        {
          "id": "r6543lil53ntrxmvel53gbtm",
          "visible": true,
          "company": "TechAdvancers",
          "position": "Web Developer",
          "location": "San Jose, CA",
          "date": "June 2016 to December 2018",
          "summary": "<ul><li><p>Collaborated in a team of 10 to develop high-quality web applications using React.js and Node.js.</p></li><li><p>Managed the integration of third-party services such as Stripe for payments and Twilio for SMS services.</p></li><li><p>Optimized application performance, achieving a 30% reduction in load times.</p></li></ul>",
          "url": {
            "label": "",
            "href": "https://techadvancers.com/"
          }
        }
      ]
    },
    "volunteer": {
      "name": "Volunteering",
      "columns": 1,
      "visible": true,
      "id": "volunteer",
      "items": []
    },
    "interests": {
      "name": "Interests",
      "columns": 1,
      "visible": true,
      "id": "interests",
      "items": []
    },
    "languages": {
      "name": "Languages",
      "columns": 1,
      "visible": true,
      "id": "languages",
      "items": [
        {
          "id": "ey0c353j3apepzqmyl8zd37c",
          "visible": true,
          "name": "English",
          "description": "Native Speaker",
          "level": 0
        },
        {
          "id": "a4dnf32wyj5phgln2rx97qk2",
          "visible": true,
          "name": "Spanish",
          "description": "Intermediate",
          "level": 0
        }
      ]
    },
    "profiles": {
      "name": "Profiles",
      "columns": 1,
      "visible": true,
      "id": "profiles",
      "items": [
        {
          "id": "cnbk5f0aeqvhx69ebk7hktwd",
          "visible": true,
          "network": "LinkedIn",
          "username": "johndoe",
          "icon": "linkedin",
          "url": {
            "label": "",
            "href": "https://linkedin.com/in/johndoe"
          }
        },
        {
          "id": "ukl0uecvzkgm27mlye0wazlb",
          "visible": true,
          "network": "GitHub",
          "username": "johndoe",
          "icon": "github",
          "url": {
            "label": "",
            "href": "https://github.com/johndoe"
          }
        },
        {
          "id": "k97vdxzmssmgel79km48kxgg",
          "visible": true,
          "network": "StackOverflow",
          "username": "johndoe",
          "icon": "stackoverflow",
          "url": {
            "label": "",
            "href": "https://stackoverflow.com/u/johndoe"
          }
        }
      ]
    },
    "projects": {
      "name": "Projects",
      "columns": 2,
      "visible": true,
      "id": "projects",
      "items": [
        {
          "id": "yw843emozcth8s1ubi1ubvlf",
          "visible": true,
          "name": "E-Commerce Platform",
          "description": "Project Lead",
          "date": "",
          "summary": "<p>Led the development of a full-stack e-commerce platform, improving sales conversion by 25%.</p>",
          "keywords": [],
          "url": {
            "label": "",
            "href": ""
          }
        },
        {
          "id": "ncxgdjjky54gh59iz2t1xi1v",
          "visible": true,
          "name": "Interactive Dashboard",
          "description": "Frontend Developer",
          "date": "",
          "summary": "<p>Created an interactive analytics dashboard for a SaaS application, enhancing data visualization for clients.</p>",
          "keywords": [],
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "publications": {
      "name": "Publications",
      "columns": 1,
      "visible": true,
      "id": "publications",
      "items": []
    },
    "references": {
      "name": "References",
      "columns": 1,
      "visible": true,
      "id": "references",
      "items": [
        {
          "id": "f2sv5z0cce6ztjl87yuk8fak",
          "visible": true,
          "name": "Available upon request",
          "description": "",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "skills": {
      "name": "Skills",
      "columns": 1,
      "visible": true,
      "id": "skills",
      "items": [
        {
          "id": "hn0keriukh6c0ojktl9gsgjm",
          "visible": true,
          "name": "Web Technologies",
          "description": "Advanced",
          "level": 0,
          "keywords": ["HTML5", "JavaScript", "PHP", "Python"]
        },
        {
          "id": "r8c3y47vykausqrgmzwg5pur",
          "visible": true,
          "name": "Web Frameworks",
          "description": "Intermediate",
          "level": 0,
          "keywords": ["React.js", "Angular", "Vue.js", "Laravel", "Django"]
        },
        {
          "id": "b5l75aseexqv17quvqgh73fe",
          "visible": true,
          "name": "Tools",
          "description": "Intermediate",
          "level": 0,
          "keywords": ["Webpack", "Git", "Jenkins", "Docker", "JIRA"]
        }
      ]
    },
    "custom": {}
  },
  "metadata": {
    "template": "ditto",
    "layout": [
      [
        ["summary", "experience", "education", "projects"],
        [
          "profiles",
          "skills",
          "certifications",
          "languages",
          "references",
          "interests",
          "awards",
          "volunteer",
          "publications"
        ]
      ]
    ],
    "css": {
      "value": "* {\n\toutline: 1px solid #000;\n\toutline-offset: 4px;\n}",
      "visible": false
    },
    "page": {
      "margin": 14,
      "format": "a4",
      "options": {
        "breakLine": true,
        "pageNumbers": true
      }
    },
    "theme": {
      "background": "#ffffff",
      "text": "#000000",
      "primary": "#0891b2"
    },
    "typography": {
      "font": {
        "family": "Merriweather",
        "subset": "latin",
        "variants": ["regular"],
        "size": 13
      },
      "lineHeight": 1.75,
      "hideIcons": false,
      "underlineLinks": true
    },
    "notes": ""
  }
}


================================================
File: apps/client/public/templates/json/gengar.json
================================================
{
  "basics": {
    "name": "John Doe",
    "headline": "Creative and Innovative Web Developer",
    "email": "john.doe@gmail.com",
    "phone": "(555) 123-4567",
    "location": "Pleasantville, CA 94588",
    "url": {
      "label": "",
      "href": "https://johndoe.me/"
    },
    "customFields": [],
    "picture": {
      "url": "https://i.imgur.com/HgwyOuJ.jpg",
      "size": 120,
      "aspectRatio": 1,
      "borderRadius": 0,
      "effects": {
        "hidden": false,
        "border": false,
        "grayscale": false
      }
    }
  },
  "sections": {
    "summary": {
      "name": "Summary",
      "columns": 1,
      "visible": true,
      "id": "summary",
      "content": "<p>Innovative Web Developer with 5 years of experience in building impactful and user-friendly websites and applications. Specializes in <strong>front-end technologies</strong> and passionate about modern web standards and cutting-edge development techniques. Proven track record of leading successful projects from concept to deployment.</p>"
    },
    "awards": {
      "name": "Awards",
      "columns": 1,
      "visible": true,
      "id": "awards",
      "items": []
    },
    "certifications": {
      "name": "Certifications",
      "columns": 1,
      "visible": true,
      "id": "certifications",
      "items": [
        {
          "id": "spdhh9rrqi1gvj0yqnbqunlo",
          "visible": true,
          "name": "Full-Stack Web Development",
          "issuer": "CodeAcademy",
          "date": "2020",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        },
        {
          "id": "n838rddyqv47zexn6cxauwqp",
          "visible": true,
          "name": "AWS Certified Developer",
          "issuer": "Amazon Web Services",
          "date": "2019",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "education": {
      "name": "Education",
      "columns": 1,
      "visible": true,
      "id": "education",
      "items": [
        {
          "id": "yo3p200zo45c6cdqc6a2vtt3",
          "visible": true,
          "institution": "University of California",
          "studyType": "Bachelor's in Computer Science",
          "area": "Berkeley, CA",
          "score": "",
          "date": "August 2012 to May 2016",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "experience": {
      "name": "Experience",
      "columns": 1,
      "visible": true,
      "id": "experience",
      "items": [
        {
          "id": "lhw25d7gf32wgdfpsktf6e0x",
          "visible": true,
          "company": "Creative Solutions Inc.",
          "position": "Senior Web Developer",
          "location": "San Francisco, CA",
          "date": "January 2019 to Present",
          "summary": "<ul><li><p>Spearheaded the redesign of the main product website, resulting in a 40% increase in user engagement.</p></li><li><p>Developed and implemented a new responsive framework, improving cross-device compatibility.</p></li><li><p>Mentored a team of four junior developers, fostering a culture of technical excellence.</p></li></ul>",
          "url": {
            "label": "",
            "href": "https://creativesolutions.inc/"
          }
        },
        {
          "id": "r6543lil53ntrxmvel53gbtm",
          "visible": true,
          "company": "TechAdvancers",
          "position": "Web Developer",
          "location": "San Jose, CA",
          "date": "June 2016 to December 2018",
          "summary": "<ul><li><p>Collaborated in a team of 10 to develop high-quality web applications using React.js and Node.js.</p></li><li><p>Managed the integration of third-party services such as Stripe for payments and Twilio for SMS services.</p></li><li><p>Optimized application performance, achieving a 30% reduction in load times.</p></li></ul>",
          "url": {
            "label": "",
            "href": "https://techadvancers.com/"
          }
        }
      ]
    },
    "volunteer": {
      "name": "Volunteering",
      "columns": 1,
      "visible": true,
      "id": "volunteer",
      "items": []
    },
    "interests": {
      "name": "Interests",
      "columns": 1,
      "visible": true,
      "id": "interests",
      "items": []
    },
    "languages": {
      "name": "Languages",
      "columns": 1,
      "visible": true,
      "id": "languages",
      "items": []
    },
    "profiles": {
      "name": "Profiles",
      "columns": 1,
      "visible": true,
      "id": "profiles",
      "items": [
        {
          "id": "cnbk5f0aeqvhx69ebk7hktwd",
          "visible": true,
          "network": "LinkedIn",
          "username": "johndoe",
          "icon": "linkedin",
          "url": {
            "label": "",
            "href": "https://linkedin.com/in/johndoe"
          }
        },
        {
          "id": "ukl0uecvzkgm27mlye0wazlb",
          "visible": true,
          "network": "GitHub",
          "username": "johndoe",
          "icon": "github",
          "url": {
            "label": "",
            "href": "https://github.com/johndoe"
          }
        }
      ]
    },
    "projects": {
      "name": "Projects",
      "columns": 1,
      "visible": true,
      "id": "projects",
      "items": [
        {
          "id": "yw843emozcth8s1ubi1ubvlf",
          "visible": true,
          "name": "E-Commerce Platform",
          "description": "Project Lead",
          "date": "",
          "summary": "<p>Led the development of a full-stack e-commerce platform, improving sales conversion by 25%.</p>",
          "keywords": [],
          "url": {
            "label": "",
            "href": ""
          }
        },
        {
          "id": "ncxgdjjky54gh59iz2t1xi1v",
          "visible": true,
          "name": "Interactive Dashboard",
          "description": "Frontend Developer",
          "date": "",
          "summary": "<p>Created an interactive analytics dashboard for a SaaS application, enhancing data visualization for clients.</p>",
          "keywords": [],
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "publications": {
      "name": "Publications",
      "columns": 1,
      "visible": true,
      "id": "publications",
      "items": []
    },
    "references": {
      "name": "References",
      "columns": 1,
      "visible": false,
      "id": "references",
      "items": [
        {
          "id": "f2sv5z0cce6ztjl87yuk8fak",
          "visible": true,
          "name": "Available upon request",
          "description": "",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "skills": {
      "name": "Skills",
      "columns": 1,
      "visible": true,
      "id": "skills",
      "items": [
        {
          "id": "hn0keriukh6c0ojktl9gsgjm",
          "visible": true,
          "name": "Web Technologies",
          "description": "Advanced",
          "level": 0,
          "keywords": ["HTML5", "JavaScript", "PHP", "Python"]
        },
        {
          "id": "r8c3y47vykausqrgmzwg5pur",
          "visible": true,
          "name": "Web Frameworks",
          "description": "Intermediate",
          "level": 0,
          "keywords": ["React.js", "Angular", "Vue.js", "Laravel", "Django"]
        },
        {
          "id": "b5l75aseexqv17quvqgh73fe",
          "visible": true,
          "name": "Tools",
          "description": "Intermediate",
          "level": 0,
          "keywords": ["Webpack", "Git", "Jenkins", "Docker", "JIRA"]
        }
      ]
    },
    "custom": {}
  },
  "metadata": {
    "template": "gengar",
    "layout": [
      [
        ["summary", "experience", "education", "projects", "references"],
        [
          "profiles",
          "skills",
          "certifications",
          "interests",
          "languages",
          "awards",
          "volunteer",
          "publications"
        ]
      ],
      [[], []]
    ],
    "css": {
      "value": "* {\n\toutline: 1px solid #000;\n\toutline-offset: 4px;\n}",
      "visible": false
    },
    "page": {
      "margin": 14,
      "format": "a4",
      "options": {
        "breakLine": true,
        "pageNumbers": true
      }
    },
    "theme": {
      "background": "#ffffff",
      "text": "#000000",
      "primary": "#0891b2"
    },
    "typography": {
      "font": {
        "family": "IBM Plex Serif",
        "subset": "latin",
        "variants": ["regular"],
        "size": 13
      },
      "lineHeight": 1.6,
      "hideIcons": false,
      "underlineLinks": true
    },
    "notes": ""
  }
}


================================================
File: apps/client/public/templates/json/glalie.json
================================================
{
  "basics": {
    "name": "John Doe",
    "headline": "Creative and Innovative Web Developer",
    "email": "john.doe@gmail.com",
    "phone": "(555) 123-4567",
    "location": "Pleasantville, CA 94588",
    "url": {
      "label": "",
      "href": "https://johndoe.me/"
    },
    "customFields": [],
    "picture": {
      "url": "https://i.imgur.com/HgwyOuJ.jpg",
      "size": 120,
      "aspectRatio": 1,
      "borderRadius": 0,
      "effects": {
        "hidden": false,
        "border": false,
        "grayscale": false
      }
    }
  },
  "sections": {
    "summary": {
      "name": "Summary",
      "columns": 1,
      "visible": true,
      "id": "summary",
      "content": "<p>Innovative Web Developer with 5 years of experience in building impactful and user-friendly websites and applications. Specializes in <strong>front-end technologies</strong> and passionate about modern web standards and cutting-edge development techniques. Proven track record of leading successful projects from concept to deployment.</p>"
    },
    "awards": {
      "name": "Awards",
      "columns": 1,
      "visible": true,
      "id": "awards",
      "items": []
    },
    "certifications": {
      "name": "Certifications",
      "columns": 1,
      "visible": true,
      "id": "certifications",
      "items": [
        {
          "id": "spdhh9rrqi1gvj0yqnbqunlo",
          "visible": true,
          "name": "Full-Stack Web Development",
          "issuer": "CodeAcademy",
          "date": "2020",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        },
        {
          "id": "n838rddyqv47zexn6cxauwqp",
          "visible": true,
          "name": "AWS Certified Developer",
          "issuer": "Amazon Web Services",
          "date": "2019",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "education": {
      "name": "Education",
      "columns": 1,
      "visible": true,
      "id": "education",
      "items": [
        {
          "id": "yo3p200zo45c6cdqc6a2vtt3",
          "visible": true,
          "institution": "University of California",
          "studyType": "Bachelor's in Computer Science",
          "area": "Berkeley, CA",
          "score": "",
          "date": "August 2012 to May 2016",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "experience": {
      "name": "Experience",
      "columns": 1,
      "visible": true,
      "id": "experience",
      "items": [
        {
          "id": "lhw25d7gf32wgdfpsktf6e0x",
          "visible": true,
          "company": "Creative Solutions Inc.",
          "position": "Senior Web Developer",
          "location": "San Francisco, CA",
          "date": "January 2019 to Present",
          "summary": "<ul><li><p>Spearheaded the redesign of the main product website, resulting in a 40% increase in user engagement.</p></li><li><p>Developed and implemented a new responsive framework, improving cross-device compatibility.</p></li><li><p>Mentored a team of four junior developers, fostering a culture of technical excellence.</p></li></ul>",
          "url": {
            "label": "",
            "href": "https://creativesolutions.inc/"
          }
        },
        {
          "id": "r6543lil53ntrxmvel53gbtm",
          "visible": true,
          "company": "TechAdvancers",
          "position": "Web Developer",
          "location": "San Jose, CA",
          "date": "June 2016 to December 2018",
          "summary": "<ul><li><p>Collaborated in a team of 10 to develop high-quality web applications using React.js and Node.js.</p></li><li><p>Managed the integration of third-party services such as Stripe for payments and Twilio for SMS services.</p></li><li><p>Optimized application performance, achieving a 30% reduction in load times.</p></li></ul>",
          "url": {
            "label": "",
            "href": "https://techadvancers.com/"
          }
        }
      ]
    },
    "volunteer": {
      "name": "Volunteering",
      "columns": 1,
      "visible": true,
      "id": "volunteer",
      "items": []
    },
    "interests": {
      "name": "Interests",
      "columns": 1,
      "visible": true,
      "id": "interests",
      "items": []
    },
    "languages": {
      "name": "Languages",
      "columns": 1,
      "visible": true,
      "id": "languages",
      "items": []
    },
    "profiles": {
      "name": "Profiles",
      "columns": 1,
      "visible": true,
      "id": "profiles",
      "items": [
        {
          "id": "cnbk5f0aeqvhx69ebk7hktwd",
          "visible": true,
          "network": "LinkedIn",
          "username": "johndoe",
          "icon": "linkedin",
          "url": {
            "label": "",
            "href": "https://linkedin.com/in/johndoe"
          }
        },
        {
          "id": "ukl0uecvzkgm27mlye0wazlb",
          "visible": true,
          "network": "GitHub",
          "username": "johndoe",
          "icon": "github",
          "url": {
            "label": "",
            "href": "https://github.com/johndoe"
          }
        }
      ]
    },
    "projects": {
      "name": "Projects",
      "columns": 1,
      "visible": true,
      "id": "projects",
      "items": [
        {
          "id": "yw843emozcth8s1ubi1ubvlf",
          "visible": true,
          "name": "E-Commerce Platform",
          "description": "Project Lead",
          "date": "",
          "summary": "<p>Led the development of a full-stack e-commerce platform, improving sales conversion by 25%.</p>",
          "keywords": [],
          "url": {
            "label": "",
            "href": ""
          }
        },
        {
          "id": "ncxgdjjky54gh59iz2t1xi1v",
          "visible": true,
          "name": "Interactive Dashboard",
          "description": "Frontend Developer",
          "date": "",
          "summary": "<p>Created an interactive analytics dashboard for a SaaS application, enhancing data visualization for clients.</p>",
          "keywords": [],
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "publications": {
      "name": "Publications",
      "columns": 1,
      "visible": true,
      "id": "publications",
      "items": []
    },
    "references": {
      "name": "References",
      "columns": 1,
      "visible": false,
      "id": "references",
      "items": [
        {
          "id": "f2sv5z0cce6ztjl87yuk8fak",
          "visible": true,
          "name": "Available upon request",
          "description": "",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "skills": {
      "name": "Skills",
      "columns": 1,
      "visible": true,
      "id": "skills",
      "items": [
        {
          "id": "hn0keriukh6c0ojktl9gsgjm",
          "visible": true,
          "name": "Web Technologies",
          "description": "Advanced",
          "level": 0,
          "keywords": ["HTML5", "JavaScript", "PHP", "Python"]
        },
        {
          "id": "r8c3y47vykausqrgmzwg5pur",
          "visible": true,
          "name": "Web Frameworks",
          "description": "Intermediate",
          "level": 0,
          "keywords": ["React.js", "Angular", "Vue.js", "Laravel", "Django"]
        },
        {
          "id": "b5l75aseexqv17quvqgh73fe",
          "visible": true,
          "name": "Tools",
          "description": "Intermediate",
          "level": 0,
          "keywords": ["Webpack", "Git", "Jenkins", "Docker", "JIRA"]
        }
      ]
    },
    "custom": {}
  },
  "metadata": {
    "template": "glalie",
    "layout": [
      [
        ["summary", "experience", "education", "projects", "references"],
        [
          "profiles",
          "skills",
          "certifications",
          "interests",
          "languages",
          "awards",
          "volunteer",
          "publications"
        ]
      ]
    ],
    "css": {
      "value": "* {\n\toutline: 1px solid #000;\n\toutline-offset: 4px;\n}",
      "visible": false
    },
    "page": {
      "margin": 14,
      "format": "a4",
      "options": {
        "breakLine": true,
        "pageNumbers": true
      }
    },
    "theme": {
      "background": "#ffffff",
      "text": "#000000",
      "primary": "#0d9488"
    },
    "typography": {
      "font": {
        "family": "IBM Plex Serif",
        "subset": "latin",
        "variants": ["regular"],
        "size": 13
      },
      "lineHeight": 1.6,
      "hideIcons": false,
      "underlineLinks": true
    },
    "notes": ""
  }
}


================================================
File: apps/client/public/templates/json/kakuna.json
================================================
{
  "basics": {
    "name": "John Doe",
    "headline": "Creative and Innovative Web Developer",
    "email": "john.doe@gmail.com",
    "phone": "(555) 123-4567",
    "location": "Pleasantville, CA 94588",
    "url": {
      "label": "",
      "href": "https://johndoe.me/"
    },
    "customFields": [],
    "picture": {
      "url": "https://i.imgur.com/HgwyOuJ.jpg",
      "size": 64,
      "aspectRatio": 1,
      "borderRadius": 0,
      "effects": {
        "hidden": false,
        "border": false,
        "grayscale": false
      }
    }
  },
  "sections": {
    "summary": {
      "name": "Summary",
      "columns": 1,
      "visible": true,
      "id": "summary",
      "content": "<p>Innovative Web Developer with 5 years of experience in building impactful and user-friendly websites and applications. Specializes in <strong>front-end technologies</strong> and passionate about modern web standards and cutting-edge development techniques. Proven track record of leading successful projects from concept to deployment.</p>"
    },
    "awards": {
      "name": "Awards",
      "columns": 1,
      "visible": true,
      "id": "awards",
      "items": []
    },
    "certifications": {
      "name": "Certifications",
      "columns": 2,
      "visible": true,
      "id": "certifications",
      "items": [
        {
          "id": "spdhh9rrqi1gvj0yqnbqunlo",
          "visible": true,
          "name": "Full-Stack Web Development",
          "issuer": "CodeAcademy",
          "date": "2020",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        },
        {
          "id": "n838rddyqv47zexn6cxauwqp",
          "visible": true,
          "name": "AWS Certified Developer",
          "issuer": "Amazon Web Services",
          "date": "2019",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "education": {
      "name": "Education",
      "columns": 1,
      "visible": true,
      "id": "education",
      "items": [
        {
          "id": "yo3p200zo45c6cdqc6a2vtt3",
          "visible": true,
          "institution": "University of California",
          "studyType": "Bachelor's in Computer Science",
          "area": "",
          "score": "",
          "date": "August 2012 to May 2016",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "experience": {
      "name": "Experience",
      "columns": 2,
      "visible": true,
      "id": "experience",
      "items": [
        {
          "id": "lhw25d7gf32wgdfpsktf6e0x",
          "visible": true,
          "company": "Creative Solutions Inc.",
          "position": "Senior Web Developer",
          "location": "San Francisco, CA",
          "date": "January 2019 to Present",
          "summary": "<ul><li><p>Spearheaded the redesign of the main product website, resulting in a 40% increase in user engagement.</p></li><li><p>Developed and implemented a new responsive framework, improving cross-device compatibility.</p></li><li><p>Mentored a team of four junior developers, fostering a culture of technical excellence.</p></li></ul>",
          "url": {
            "label": "",
            "href": "https://creativesolutions.inc/"
          }
        },
        {
          "id": "r6543lil53ntrxmvel53gbtm",
          "visible": true,
          "company": "TechAdvancers",
          "position": "Web Developer",
          "location": "San Jose, CA",
          "date": "June 2016 to December 2018",
          "summary": "<ul><li><p>Collaborated in a team of 10 to develop high-quality web applications using React.js and Node.js.</p></li><li><p>Managed the integration of third-party services such as Stripe for payments and Twilio for SMS services.</p></li><li><p>Optimized application performance, achieving a 30% reduction in load times.</p></li></ul>",
          "url": {
            "label": "",
            "href": "https://techadvancers.com/"
          }
        }
      ]
    },
    "volunteer": {
      "name": "Volunteering",
      "columns": 1,
      "visible": true,
      "id": "volunteer",
      "items": []
    },
    "interests": {
      "name": "Interests",
      "columns": 1,
      "visible": true,
      "id": "interests",
      "items": []
    },
    "languages": {
      "name": "Languages",
      "columns": 1,
      "visible": true,
      "id": "languages",
      "items": []
    },
    "profiles": {
      "name": "Profiles",
      "columns": 1,
      "visible": true,
      "id": "profiles",
      "items": [
        {
          "id": "cnbk5f0aeqvhx69ebk7hktwd",
          "visible": true,
          "network": "LinkedIn",
          "username": "johndoe",
          "icon": "linkedin",
          "url": {
            "label": "",
            "href": "https://linkedin.com/in/johndoe"
          }
        },
        {
          "id": "ukl0uecvzkgm27mlye0wazlb",
          "visible": true,
          "network": "GitHub",
          "username": "johndoe",
          "icon": "github",
          "url": {
            "label": "",
            "href": "https://github.com/johndoe"
          }
        }
      ]
    },
    "projects": {
      "name": "Projects",
      "columns": 2,
      "visible": true,
      "id": "projects",
      "items": [
        {
          "id": "yw843emozcth8s1ubi1ubvlf",
          "visible": true,
          "name": "E-Commerce Platform",
          "description": "Project Lead",
          "date": "",
          "summary": "<p>Led the development of a full-stack e-commerce platform, improving sales conversion by 25%.</p>",
          "keywords": [],
          "url": {
            "label": "",
            "href": ""
          }
        },
        {
          "id": "ncxgdjjky54gh59iz2t1xi1v",
          "visible": true,
          "name": "Interactive Dashboard",
          "description": "Frontend Developer",
          "date": "",
          "summary": "<p>Created an interactive analytics dashboard for a SaaS application, enhancing data visualization for clients.</p>",
          "keywords": [],
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "publications": {
      "name": "Publications",
      "columns": 1,
      "visible": true,
      "id": "publications",
      "items": []
    },
    "references": {
      "name": "References",
      "columns": 1,
      "visible": true,
      "id": "references",
      "items": [
        {
          "id": "f2sv5z0cce6ztjl87yuk8fak",
          "visible": true,
          "name": "Available upon request",
          "description": "",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "skills": {
      "name": "Skills",
      "columns": 3,
      "visible": true,
      "id": "skills",
      "items": [
        {
          "id": "hn0keriukh6c0ojktl9gsgjm",
          "visible": true,
          "name": "Web Technologies",
          "description": "Advanced",
          "level": 0,
          "keywords": ["HTML5", "JavaScript", "PHP", "Python"]
        },
        {
          "id": "r8c3y47vykausqrgmzwg5pur",
          "visible": true,
          "name": "Web Frameworks",
          "description": "Intermediate",
          "level": 0,
          "keywords": ["React.js", "Angular", "Vue.js", "Laravel", "Django"]
        },
        {
          "id": "b5l75aseexqv17quvqgh73fe",
          "visible": true,
          "name": "Tools",
          "description": "Intermediate",
          "level": 0,
          "keywords": ["Webpack", "Git", "Jenkins", "Docker", "JIRA"]
        }
      ]
    },
    "custom": {}
  },
  "metadata": {
    "template": "kakuna",
    "layout": [
      [
        [
          "summary",
          "experience",
          "education",
          "projects",
          "certifications",
          "skills",
          "references"
        ],
        ["profiles", "interests", "languages", "awards", "volunteer", "publications"]
      ]
    ],
    "css": {
      "value": "* {\n\toutline: 1px solid #000;\n\toutline-offset: 4px;\n}",
      "visible": false
    },
    "page": {
      "margin": 14,
      "format": "a4",
      "options": {
        "breakLine": true,
        "pageNumbers": true
      }
    },
    "theme": {
      "background": "#ffffff",
      "text": "#000000",
      "primary": "#57534e"
    },
    "typography": {
      "font": {
        "family": "Lora",
        "subset": "latin",
        "variants": ["regular"],
        "size": 13
      },
      "lineHeight": 1.5,
      "hideIcons": false,
      "underlineLinks": true
    },
    "notes": ""
  }
}


================================================
File: apps/client/public/templates/json/leafish.json
================================================
{
  "basics": {
    "name": "John Doe",
    "headline": "Creative and Innovative Web Developer",
    "email": "john.doe@gmail.com",
    "phone": "(555) 123-4567",
    "location": "Pleasantville, CA 94588",
    "url": {
      "label": "",
      "href": "https://johndoe.me/"
    },
    "customFields": [],
    "picture": {
      "url": "https://i.imgur.com/HgwyOuJ.jpg",
      "size": 120,
      "aspectRatio": 1,
      "borderRadius": 0,
      "effects": {
        "hidden": false,
        "border": false,
        "grayscale": false
      }
    }
  },
  "sections": {
    "summary": {
      "name": "Summary",
      "columns": 1,
      "visible": true,
      "id": "summary",
      "content": "<p>Innovative Web Developer with 5 years of experience in building impactful and user-friendly websites and applications. Specializes in <strong>front-end technologies</strong> and passionate about modern web standards and cutting-edge development techniques. Proven track record of leading successful projects from concept to deployment.</p>"
    },
    "awards": {
      "name": "Awards",
      "columns": 1,
      "visible": true,
      "id": "awards",
      "items": []
    },
    "certifications": {
      "name": "Certifications",
      "columns": 1,
      "visible": true,
      "id": "certifications",
      "items": [
        {
          "id": "spdhh9rrqi1gvj0yqnbqunlo",
          "visible": true,
          "name": "Full-Stack Web Development",
          "issuer": "CodeAcademy",
          "date": "2020",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        },
        {
          "id": "n838rddyqv47zexn6cxauwqp",
          "visible": true,
          "name": "AWS Certified Developer",
          "issuer": "Amazon Web Services",
          "date": "2019",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "education": {
      "name": "Education",
      "columns": 1,
      "visible": true,
      "id": "education",
      "items": [
        {
          "id": "yo3p200zo45c6cdqc6a2vtt3",
          "visible": true,
          "institution": "University of California",
          "studyType": "Bachelor's in Computer Science",
          "area": "Berkeley, CA",
          "score": "",
          "date": "August 2012 to May 2016",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "experience": {
      "name": "Experience",
      "columns": 1,
      "visible": true,
      "id": "experience",
      "items": [
        {
          "id": "lhw25d7gf32wgdfpsktf6e0x",
          "visible": true,
          "company": "Creative Solutions Inc.",
          "position": "Senior Web Developer",
          "location": "San Francisco, CA",
          "date": "January 2019 to Present",
          "summary": "<ul><li><p>Spearheaded the redesign of the main product website, resulting in a 40% increase in user engagement.</p></li><li><p>Developed and implemented a new responsive framework, improving cross-device compatibility.</p></li><li><p>Mentored a team of four junior developers, fostering a culture of technical excellence.</p></li></ul>",
          "url": {
            "label": "",
            "href": "https://creativesolutions.inc/"
          }
        },
        {
          "id": "r6543lil53ntrxmvel53gbtm",
          "visible": true,
          "company": "TechAdvancers",
          "position": "Web Developer",
          "location": "San Jose, CA",
          "date": "June 2016 to December 2018",
          "summary": "<ul><li><p>Collaborated in a team of 10 to develop high-quality web applications using React.js and Node.js.</p></li><li><p>Managed the integration of third-party services such as Stripe for payments and Twilio for SMS services.</p></li><li><p>Optimized application performance, achieving a 30% reduction in load times.</p></li></ul>",
          "url": {
            "label": "",
            "href": "https://techadvancers.com/"
          }
        }
      ]
    },
    "volunteer": {
      "name": "Volunteering",
      "columns": 1,
      "visible": true,
      "id": "volunteer",
      "items": []
    },
    "interests": {
      "name": "Interests",
      "columns": 1,
      "visible": true,
      "id": "interests",
      "items": []
    },
    "languages": {
      "name": "Languages",
      "columns": 1,
      "visible": true,
      "id": "languages",
      "items": []
    },
    "profiles": {
      "name": "Profiles",
      "columns": 1,
      "visible": true,
      "id": "profiles",
      "items": [
        {
          "id": "cnbk5f0aeqvhx69ebk7hktwd",
          "visible": true,
          "network": "LinkedIn",
          "username": "johndoe",
          "icon": "linkedin",
          "url": {
            "label": "",
            "href": "https://linkedin.com/in/johndoe"
          }
        },
        {
          "id": "ukl0uecvzkgm27mlye0wazlb",
          "visible": true,
          "network": "GitHub",
          "username": "johndoe",
          "icon": "github",
          "url": {
            "label": "",
            "href": "https://github.com/johndoe"
          }
        }
      ]
    },
    "projects": {
      "name": "Projects",
      "columns": 1,
      "visible": true,
      "id": "projects",
      "items": [
        {
          "id": "yw843emozcth8s1ubi1ubvlf",
          "visible": true,
          "name": "E-Commerce Platform",
          "description": "Project Lead",
          "date": "",
          "summary": "<p>Led the development of a full-stack e-commerce platform, improving sales conversion by 25%.</p>",
          "keywords": [],
          "url": {
            "label": "",
            "href": ""
          }
        },
        {
          "id": "ncxgdjjky54gh59iz2t1xi1v",
          "visible": true,
          "name": "Interactive Dashboard",
          "description": "Frontend Developer",
          "date": "",
          "summary": "<p>Created an interactive analytics dashboard for a SaaS application, enhancing data visualization for clients.</p>",
          "keywords": [],
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "publications": {
      "name": "Publications",
      "columns": 1,
      "visible": true,
      "id": "publications",
      "items": []
    },
    "references": {
      "name": "References",
      "columns": 1,
      "visible": false,
      "id": "references",
      "items": [
        {
          "id": "f2sv5z0cce6ztjl87yuk8fak",
          "visible": true,
          "name": "Available upon request",
          "description": "",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "skills": {
      "name": "Skills",
      "columns": 1,
      "visible": true,
      "id": "skills",
      "items": [
        {
          "id": "hn0keriukh6c0ojktl9gsgjm",
          "visible": true,
          "name": "Web Technologies",
          "description": "Advanced",
          "level": 0,
          "keywords": ["HTML5", "JavaScript", "PHP", "Python"]
        },
        {
          "id": "r8c3y47vykausqrgmzwg5pur",
          "visible": true,
          "name": "Web Frameworks",
          "description": "Intermediate",
          "level": 0,
          "keywords": ["React.js", "Angular", "Vue.js", "Laravel", "Django"]
        },
        {
          "id": "b5l75aseexqv17quvqgh73fe",
          "visible": true,
          "name": "Tools",
          "description": "Intermediate",
          "level": 0,
          "keywords": ["Webpack", "Git", "Jenkins", "Docker", "JIRA"]
        }
      ]
    },
    "custom": {}
  },
  "metadata": {
    "template": "leafish",
    "layout": [
      [
        ["summary", "experience", "education", "references"],
        [
          "profiles",
          "skills",
          "certifications",
          "interests",
          "languages",
          "projects",
          "awards",
          "volunteer",
          "publications"
        ]
      ]
    ],
    "css": {
      "value": "* {\n\toutline: 1px solid #000;\n\toutline-offset: 4px;\n}",
      "visible": false
    },
    "page": {
      "margin": 14,
      "format": "a4",
      "options": {
        "breakLine": true,
        "pageNumbers": true
      }
    },
    "theme": {
      "background": "#ffffff",
      "text": "#000000",
      "primary": "#7b4f1a"
    },
    "typography": {
      "font": {
        "family": "IBM Plex Serif",
        "subset": "latin",
        "variants": ["regular"],
        "size": 13
      },
      "lineHeight": 1.6,
      "hideIcons": false,
      "underlineLinks": true
    },
    "notes": ""
  }
}


================================================
File: apps/client/public/templates/json/nosepass.json
================================================
{
  "basics": {
    "name": "John Doe",
    "headline": "Creative and Innovative Web Developer",
    "email": "john.doe@gmail.com",
    "phone": "(555) 123-4567",
    "location": "Pleasantville, CA 94588",
    "url": {
      "label": "",
      "href": "https://johndoe.me/"
    },
    "customFields": [],
    "picture": {
      "url": "https://i.imgur.com/HgwyOuJ.jpg",
      "size": 90,
      "aspectRatio": 1,
      "borderRadius": 4,
      "effects": {
        "hidden": false,
        "border": false,
        "grayscale": false
      }
    }
  },
  "sections": {
    "summary": {
      "name": "Summary",
      "columns": 1,
      "visible": true,
      "id": "summary",
      "content": "<p>Innovative Web Developer with 5 years of experience in building impactful and user-friendly websites and applications. Specializes in <strong>front-end technologies</strong> and passionate about modern web standards and cutting-edge development techniques. Proven track record of leading successful projects from concept to deployment.</p>"
    },
    "awards": {
      "name": "Awards",
      "columns": 1,
      "visible": true,
      "id": "awards",
      "items": []
    },
    "certifications": {
      "name": "Certifications",
      "columns": 1,
      "visible": true,
      "id": "certifications",
      "items": [
        {
          "id": "spdhh9rrqi1gvj0yqnbqunlo",
          "visible": true,
          "name": "Full-Stack Web Development",
          "issuer": "CodeAcademy",
          "date": "2020",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        },
        {
          "id": "n838rddyqv47zexn6cxauwqp",
          "visible": true,
          "name": "AWS Certified Developer",
          "issuer": "Amazon Web Services",
          "date": "2019",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "education": {
      "name": "Education",
      "columns": 1,
      "visible": true,
      "id": "education",
      "items": [
        {
          "id": "yo3p200zo45c6cdqc6a2vtt3",
          "visible": true,
          "institution": "University of California",
          "studyType": "Bachelor's in Computer Science",
          "area": "Berkeley, CA",
          "score": "",
          "date": "Aug 2012 - May 2016",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "experience": {
      "name": "Experience",
      "columns": 1,
      "visible": true,
      "id": "experience",
      "items": [
        {
          "id": "lhw25d7gf32wgdfpsktf6e0x",
          "visible": true,
          "company": "Creative Solutions Inc.",
          "position": "Senior Web Developer",
          "location": "San Francisco, CA",
          "date": "Jan 2019 - Present",
          "summary": "<ul><li><p>Spearheaded the redesign of the main product website, resulting in a 40% increase in user engagement.</p></li><li><p>Developed and implemented a new responsive framework, improving cross-device compatibility.</p></li><li><p>Mentored a team of four junior developers, fostering a culture of technical excellence.</p></li></ul>",
          "url": {
            "label": "",
            "href": "https://creativesolutions.inc/"
          }
        },
        {
          "id": "r6543lil53ntrxmvel53gbtm",
          "visible": true,
          "company": "TechAdvancers",
          "position": "Web Developer",
          "location": "San Jose, CA",
          "date": "Jun 2016 - Dec 2018",
          "summary": "<ul><li><p>Collaborated in a team of 10 to develop high-quality web applications using React.js and Node.js.</p></li><li><p>Managed the integration of third-party services such as Stripe for payments and Twilio for SMS services.</p></li><li><p>Optimized application performance, achieving a 30% reduction in load times.</p></li></ul>",
          "url": {
            "label": "",
            "href": "https://techadvancers.com/"
          }
        }
      ]
    },
    "volunteer": {
      "name": "Volunteering",
      "columns": 1,
      "visible": true,
      "id": "volunteer",
      "items": []
    },
    "interests": {
      "name": "Interests",
      "columns": 1,
      "visible": true,
      "id": "interests",
      "items": []
    },
    "languages": {
      "name": "Languages",
      "columns": 1,
      "visible": true,
      "id": "languages",
      "items": [
        {
          "id": "ey0c353j3apepzqmyl8zd37c",
          "visible": true,
          "name": "English",
          "description": "Native Speaker",
          "level": 0
        },
        {
          "id": "a4dnf32wyj5phgln2rx97qk2",
          "visible": true,
          "name": "Spanish",
          "description": "Intermediate",
          "level": 0
        }
      ]
    },
    "profiles": {
      "name": "Profiles",
      "columns": 3,
      "visible": true,
      "id": "profiles",
      "items": [
        {
          "id": "cnbk5f0aeqvhx69ebk7hktwd",
          "visible": true,
          "network": "LinkedIn",
          "username": "johndoe",
          "icon": "linkedin",
          "url": {
            "label": "",
            "href": "https://linkedin.com/in/johndoe"
          }
        },
        {
          "id": "ukl0uecvzkgm27mlye0wazlb",
          "visible": true,
          "network": "GitHub",
          "username": "johndoe",
          "icon": "github",
          "url": {
            "label": "",
            "href": "https://github.com/johndoe"
          }
        },
        {
          "id": "k97vdxzmssmgel79km48kxgg",
          "visible": true,
          "network": "StackOverflow",
          "username": "johndoe",
          "icon": "stackoverflow",
          "url": {
            "label": "",
            "href": "https://stackoverflow.com/u/johndoe"
          }
        }
      ]
    },
    "projects": {
      "name": "Projects",
      "columns": 1,
      "visible": true,
      "id": "projects",
      "items": [
        {
          "id": "yw843emozcth8s1ubi1ubvlf",
          "visible": true,
          "name": "E-Commerce Platform",
          "description": "Project Lead",
          "date": "",
          "summary": "<p>Led the development of a full-stack e-commerce platform, improving sales conversion by 25%.</p>",
          "keywords": [],
          "url": {
            "label": "",
            "href": ""
          }
        },
        {
          "id": "ncxgdjjky54gh59iz2t1xi1v",
          "visible": true,
          "name": "Interactive Dashboard",
          "description": "Frontend Developer",
          "date": "",
          "summary": "<p>Created an interactive analytics dashboard for a SaaS application, enhancing data visualization for clients.</p>",
          "keywords": [],
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "publications": {
      "name": "Publications",
      "columns": 1,
      "visible": true,
      "id": "publications",
      "items": []
    },
    "references": {
      "name": "References",
      "columns": 1,
      "visible": true,
      "id": "references",
      "items": [
        {
          "id": "f2sv5z0cce6ztjl87yuk8fak",
          "visible": true,
          "name": "Available upon request",
          "description": "",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "skills": {
      "name": "Skills",
      "columns": 1,
      "visible": true,
      "id": "skills",
      "items": [
        {
          "id": "hn0keriukh6c0ojktl9gsgjm",
          "visible": true,
          "name": "Web Technologies",
          "description": "Advanced",
          "level": 0,
          "keywords": ["HTML5", "JavaScript", "PHP", "Python"]
        },
        {
          "id": "r8c3y47vykausqrgmzwg5pur",
          "visible": true,
          "name": "Web Frameworks",
          "description": "Intermediate",
          "level": 0,
          "keywords": ["React.js", "Angular", "Vue.js", "Laravel", "Django"]
        },
        {
          "id": "b5l75aseexqv17quvqgh73fe",
          "visible": true,
          "name": "Tools",
          "description": "Intermediate",
          "level": 0,
          "keywords": ["Webpack", "Git", "Jenkins", "Docker", "JIRA"]
        }
      ]
    },
    "custom": {}
  },
  "metadata": {
    "template": "nosepass",
    "layout": [
      [
        ["profiles", "summary", "experience", "education"],
        ["interests", "awards", "volunteer", "publications"]
      ],
      [["projects", "certifications", "skills", "languages", "references"], []]
    ],
    "css": {
      "value": "* {\n\toutline: 1px solid #000;\n\toutline-offset: 4px;\n}",
      "visible": false
    },
    "page": {
      "margin": 24,
      "format": "a4",
      "options": {
        "breakLine": true,
        "pageNumbers": true
      }
    },
    "theme": {
      "background": "#ffffff",
      "text": "#000000",
      "primary": "#5d93bc"
    },
    "typography": {
      "font": {
        "family": "Work Sans",
        "subset": "latin",
        "variants": ["regular"],
        "size": 13.8
      },
      "lineHeight": 1.5,
      "hideIcons": true,
      "underlineLinks": true
    },
    "notes": ""
  }
}


================================================
File: apps/client/public/templates/json/onyx.json
================================================
{
  "basics": {
    "name": "John Doe",
    "headline": "Creative and Innovative Web Developer",
    "email": "john.doe@gmail.com",
    "phone": "(555) 123-4567",
    "location": "Pleasantville, CA 94588",
    "url": {
      "label": "",
      "href": "https://johndoe.me/"
    },
    "customFields": [],
    "picture": {
      "url": "https://i.imgur.com/HgwyOuJ.jpg",
      "size": 100,
      "aspectRatio": 1,
      "borderRadius": 0,
      "effects": {
        "hidden": false,
        "border": false,
        "grayscale": false
      }
    }
  },
  "sections": {
    "summary": {
      "name": "Summary",
      "columns": 1,
      "visible": true,
      "id": "summary",
      "content": "<p>Innovative Web Developer with 5 years of experience in building impactful and user-friendly websites and applications. Specializes in <strong>front-end technologies</strong> and passionate about modern web standards and cutting-edge development techniques. Proven track record of leading successful projects from concept to deployment.</p>"
    },
    "awards": {
      "name": "Awards",
      "columns": 1,
      "visible": true,
      "id": "awards",
      "items": []
    },
    "certifications": {
      "name": "Certifications",
      "columns": 2,
      "visible": true,
      "id": "certifications",
      "items": [
        {
          "id": "spdhh9rrqi1gvj0yqnbqunlo",
          "visible": true,
          "name": "Full-Stack Web Development",
          "issuer": "CodeAcademy",
          "date": "2020",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        },
        {
          "id": "n838rddyqv47zexn6cxauwqp",
          "visible": true,
          "name": "AWS Certified Developer",
          "issuer": "Amazon Web Services",
          "date": "2019",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "education": {
      "name": "Education",
      "columns": 1,
      "visible": true,
      "id": "education",
      "items": [
        {
          "id": "yo3p200zo45c6cdqc6a2vtt3",
          "visible": true,
          "institution": "University of California",
          "studyType": "Bachelor of Science",
          "area": "Computer Science",
          "score": "Berkeley, CA",
          "date": "August 2012 to May 2016",
          "summary": "",
          "url": {
            "label": "",
            "href": "https://www.universityofcalifornia.edu/"
          }
        }
      ]
    },
    "experience": {
      "name": "Experience",
      "columns": 1,
      "visible": true,
      "id": "experience",
      "items": [
        {
          "id": "lhw25d7gf32wgdfpsktf6e0x",
          "visible": true,
          "company": "Creative Solutions Inc.",
          "position": "Senior Web Developer",
          "location": "San Francisco, CA",
          "date": "January 2019 to Present",
          "summary": "<ul><li><p>Spearheaded the redesign of the main product website, resulting in a 40% increase in user engagement.</p></li><li><p>Developed and implemented a new responsive framework, improving cross-device compatibility.</p></li><li><p>Mentored a team of four junior developers, fostering a culture of technical excellence.</p></li></ul>",
          "url": {
            "label": "",
            "href": "https://creativesolutions.inc/"
          }
        },
        {
          "id": "r6543lil53ntrxmvel53gbtm",
          "visible": true,
          "company": "TechAdvancers",
          "position": "Web Developer",
          "location": "San Jose, CA",
          "date": "June 2016 to December 2018",
          "summary": "<ul><li><p>Collaborated in a team of 10 to develop high-quality web applications using React.js and Node.js.</p></li><li><p>Managed the integration of third-party services such as Stripe for payments and Twilio for SMS services.</p></li><li><p>Optimized application performance, achieving a 30% reduction in load times.</p></li></ul>",
          "url": {
            "label": "",
            "href": "https://techadvancers.com/"
          }
        }
      ]
    },
    "volunteer": {
      "name": "Volunteering",
      "columns": 1,
      "visible": true,
      "id": "volunteer",
      "items": []
    },
    "interests": {
      "name": "Interests",
      "columns": 1,
      "visible": true,
      "id": "interests",
      "items": []
    },
    "languages": {
      "name": "Languages",
      "columns": 1,
      "visible": true,
      "id": "languages",
      "items": []
    },
    "profiles": {
      "name": "Profiles",
      "columns": 1,
      "visible": true,
      "id": "profiles",
      "items": [
        {
          "id": "cnbk5f0aeqvhx69ebk7hktwd",
          "visible": true,
          "network": "LinkedIn",
          "username": "johndoe",
          "icon": "linkedin",
          "url": {
            "label": "",
            "href": "https://linkedin.com/in/johndoe"
          }
        },
        {
          "id": "ukl0uecvzkgm27mlye0wazlb",
          "visible": true,
          "network": "GitHub",
          "username": "johndoe",
          "icon": "github",
          "url": {
            "label": "",
            "href": "https://github.com/johndoe"
          }
        }
      ]
    },
    "projects": {
      "name": "Projects",
      "columns": 1,
      "visible": true,
      "id": "projects",
      "items": [
        {
          "id": "yw843emozcth8s1ubi1ubvlf",
          "visible": true,
          "name": "E-Commerce Platform",
          "description": "Project Lead",
          "date": "",
          "summary": "<p>Led the development of a full-stack e-commerce platform, improving sales conversion by 25%.</p>",
          "keywords": [],
          "url": {
            "label": "",
            "href": ""
          }
        },
        {
          "id": "ncxgdjjky54gh59iz2t1xi1v",
          "visible": true,
          "name": "Interactive Dashboard",
          "description": "Frontend Developer",
          "date": "",
          "summary": "<p>Created an interactive analytics dashboard for a SaaS application, enhancing data visualization for clients.</p>",
          "keywords": [],
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "publications": {
      "name": "Publications",
      "columns": 1,
      "visible": true,
      "id": "publications",
      "items": []
    },
    "references": {
      "name": "References",
      "columns": 1,
      "visible": true,
      "id": "references",
      "items": [
        {
          "id": "f2sv5z0cce6ztjl87yuk8fak",
          "visible": true,
          "name": "Available upon request",
          "description": "",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "skills": {
      "name": "Skills",
      "columns": 3,
      "visible": true,
      "id": "skills",
      "items": [
        {
          "id": "hn0keriukh6c0ojktl9gsgjm",
          "visible": true,
          "name": "Web Technologies",
          "description": "Advanced",
          "level": 0,
          "keywords": ["HTML5", "JavaScript", "PHP", "Python"]
        },
        {
          "id": "r8c3y47vykausqrgmzwg5pur",
          "visible": true,
          "name": "Web Frameworks",
          "description": "Intermediate",
          "level": 0,
          "keywords": ["React.js", "Angular", "Vue.js", "Laravel", "Django"]
        },
        {
          "id": "b5l75aseexqv17quvqgh73fe",
          "visible": true,
          "name": "Tools",
          "description": "Intermediate",
          "level": 0,
          "keywords": ["Webpack", "Git", "Jenkins", "Docker", "JIRA"]
        }
      ]
    },
    "custom": {}
  },
  "metadata": {
    "template": "onyx",
    "layout": [
      [
        [
          "summary",
          "experience",
          "education",
          "projects",
          "certifications",
          "skills",
          "references"
        ],
        ["profiles", "interests", "languages", "awards", "volunteer", "publications"]
      ]
    ],
    "css": {
      "value": "* {\n\toutline: 1px solid #000;\n\toutline-offset: 4px;\n}",
      "visible": false
    },
    "page": {
      "margin": 18,
      "format": "a4",
      "options": {
        "breakLine": true,
        "pageNumbers": true
      }
    },
    "theme": {
      "background": "#ffffff",
      "text": "#000000",
      "primary": "#dc2626"
    },
    "typography": {
      "font": {
        "family": "PT Serif",
        "subset": "latin",
        "variants": ["regular"],
        "size": 13
      },
      "lineHeight": 1.5,
      "hideIcons": false,
      "underlineLinks": false
    },
    "notes": ""
  }
}


================================================
File: apps/client/public/templates/json/pikachu.json
================================================
{
  "basics": {
    "name": "John Doe",
    "headline": "Creative and Innovative Web Developer",
    "email": "john.doe@gmail.com",
    "phone": "(555) 123-4567",
    "location": "Pleasantville, CA 94588",
    "url": {
      "label": "",
      "href": "https://johndoe.me/"
    },
    "customFields": [],
    "picture": {
      "url": "https://i.imgur.com/HgwyOuJ.jpg",
      "size": 140,
      "aspectRatio": 1,
      "borderRadius": 4,
      "effects": {
        "hidden": false,
        "border": false,
        "grayscale": false
      }
    }
  },
  "sections": {
    "summary": {
      "name": "Summary",
      "columns": 1,
      "visible": true,
      "id": "summary",
      "content": "<p>Innovative Web Developer with 5 years of experience in building impactful and user-friendly websites and applications. Specializes in <strong>front-end technologies</strong> and passionate about modern web standards and cutting-edge development techniques. Proven track record of leading successful projects from concept to deployment.</p>"
    },
    "awards": {
      "name": "Awards",
      "columns": 1,
      "visible": true,
      "id": "awards",
      "items": []
    },
    "certifications": {
      "name": "Certifications",
      "columns": 1,
      "visible": true,
      "id": "certifications",
      "items": [
        {
          "id": "spdhh9rrqi1gvj0yqnbqunlo",
          "visible": true,
          "name": "Full-Stack Web Development",
          "issuer": "CodeAcademy",
          "date": "2020",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        },
        {
          "id": "n838rddyqv47zexn6cxauwqp",
          "visible": true,
          "name": "AWS Certified Developer",
          "issuer": "Amazon Web Services",
          "date": "2019",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "education": {
      "name": "Education",
      "columns": 1,
      "visible": true,
      "id": "education",
      "items": [
        {
          "id": "yo3p200zo45c6cdqc6a2vtt3",
          "visible": true,
          "institution": "University of California",
          "studyType": "Bachelor's in Computer Science",
          "area": "Berkeley, CA",
          "score": "",
          "date": "August 2012 to May 2016",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "experience": {
      "name": "Experience",
      "columns": 1,
      "visible": true,
      "id": "experience",
      "items": [
        {
          "id": "lhw25d7gf32wgdfpsktf6e0x",
          "visible": true,
          "company": "Creative Solutions Inc.",
          "position": "Senior Web Developer",
          "location": "San Francisco, CA",
          "date": "January 2019 to Present",
          "summary": "<ul><li><p>Spearheaded the redesign of the main product website, resulting in a 40% increase in user engagement.</p></li><li><p>Developed and implemented a new responsive framework, improving cross-device compatibility.</p></li><li><p>Mentored a team of four junior developers, fostering a culture of technical excellence.</p></li></ul>",
          "url": {
            "label": "",
            "href": "https://creativesolutions.inc/"
          }
        },
        {
          "id": "r6543lil53ntrxmvel53gbtm",
          "visible": true,
          "company": "TechAdvancers",
          "position": "Web Developer",
          "location": "San Jose, CA",
          "date": "June 2016 to December 2018",
          "summary": "<ul><li><p>Collaborated in a team of 10 to develop high-quality web applications using React.js and Node.js.</p></li><li><p>Managed the integration of third-party services such as Stripe for payments and Twilio for SMS services.</p></li><li><p>Optimized application performance, achieving a 30% reduction in load times.</p></li></ul>",
          "url": {
            "label": "",
            "href": "https://techadvancers.com/"
          }
        }
      ]
    },
    "volunteer": {
      "name": "Volunteering",
      "columns": 1,
      "visible": true,
      "id": "volunteer",
      "items": []
    },
    "interests": {
      "name": "Interests",
      "columns": 1,
      "visible": true,
      "id": "interests",
      "items": []
    },
    "languages": {
      "name": "Languages",
      "columns": 1,
      "visible": true,
      "id": "languages",
      "items": [
        {
          "id": "ey0c353j3apepzqmyl8zd37c",
          "visible": true,
          "name": "English",
          "description": "Native Speaker",
          "level": 0
        },
        {
          "id": "a4dnf32wyj5phgln2rx97qk2",
          "visible": true,
          "name": "Spanish",
          "description": "Intermediate",
          "level": 0
        }
      ]
    },
    "profiles": {
      "name": "Profiles",
      "columns": 1,
      "visible": true,
      "id": "profiles",
      "items": [
        {
          "id": "cnbk5f0aeqvhx69ebk7hktwd",
          "visible": true,
          "network": "LinkedIn",
          "username": "johndoe",
          "icon": "linkedin",
          "url": {
            "label": "",
            "href": "https://linkedin.com/in/johndoe"
          }
        },
        {
          "id": "ukl0uecvzkgm27mlye0wazlb",
          "visible": true,
          "network": "GitHub",
          "username": "johndoe",
          "icon": "github",
          "url": {
            "label": "",
            "href": "https://github.com/johndoe"
          }
        },
        {
          "id": "k97vdxzmssmgel79km48kxgg",
          "visible": true,
          "network": "StackOverflow",
          "username": "johndoe",
          "icon": "stackoverflow",
          "url": {
            "label": "",
            "href": "https://stackoverflow.com/u/johndoe"
          }
        }
      ]
    },
    "projects": {
      "name": "Projects",
      "columns": 1,
      "visible": true,
      "id": "projects",
      "items": [
        {
          "id": "yw843emozcth8s1ubi1ubvlf",
          "visible": true,
          "name": "E-Commerce Platform",
          "description": "Project Lead",
          "date": "",
          "summary": "<p>Led the development of a full-stack e-commerce platform, improving sales conversion by 25%.</p>",
          "keywords": [],
          "url": {
            "label": "",
            "href": ""
          }
        },
        {
          "id": "ncxgdjjky54gh59iz2t1xi1v",
          "visible": true,
          "name": "Interactive Dashboard",
          "description": "Frontend Developer",
          "date": "",
          "summary": "<p>Created an interactive analytics dashboard for a SaaS application, enhancing data visualization for clients.</p>",
          "keywords": [],
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "publications": {
      "name": "Publications",
      "columns": 1,
      "visible": true,
      "id": "publications",
      "items": []
    },
    "references": {
      "name": "References",
      "columns": 1,
      "visible": true,
      "id": "references",
      "items": [
        {
          "id": "f2sv5z0cce6ztjl87yuk8fak",
          "visible": true,
          "name": "Available upon request",
          "description": "",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "skills": {
      "name": "Skills",
      "columns": 1,
      "visible": true,
      "id": "skills",
      "items": [
        {
          "id": "hn0keriukh6c0ojktl9gsgjm",
          "visible": true,
          "name": "Web Technologies",
          "description": "Advanced",
          "level": 0,
          "keywords": ["HTML5", "JavaScript", "PHP", "Python"]
        },
        {
          "id": "r8c3y47vykausqrgmzwg5pur",
          "visible": true,
          "name": "Web Frameworks",
          "description": "Intermediate",
          "level": 0,
          "keywords": ["React.js", "Angular", "Vue.js", "Laravel", "Django"]
        },
        {
          "id": "b5l75aseexqv17quvqgh73fe",
          "visible": true,
          "name": "Tools",
          "description": "Intermediate",
          "level": 0,
          "keywords": ["Webpack", "Git", "Jenkins", "Docker", "JIRA"]
        }
      ]
    },
    "custom": {}
  },
  "metadata": {
    "template": "pikachu",
    "layout": [
      [
        ["summary", "experience", "education", "projects"],
        [
          "profiles",
          "skills",
          "certifications",
          "languages",
          "references",
          "interests",
          "awards",
          "volunteer",
          "publications"
        ]
      ]
    ],
    "css": {
      "value": "* {\n\toutline: 1px solid #000;\n\toutline-offset: 4px;\n}",
      "visible": false
    },
    "page": {
      "margin": 14,
      "format": "a4",
      "options": {
        "breakLine": true,
        "pageNumbers": true
      }
    },
    "theme": {
      "background": "#ffffff",
      "text": "#000000",
      "primary": "#ca8a04"
    },
    "typography": {
      "font": {
        "family": "Titillium Web",
        "subset": "latin",
        "variants": ["regular"],
        "size": 13.8
      },
      "lineHeight": 1.5,
      "hideIcons": false,
      "underlineLinks": false
    },
    "notes": ""
  }
}


================================================
File: apps/client/public/templates/json/rhyhorn.json
================================================
{
  "basics": {
    "name": "John Doe",
    "headline": "Creative and Innovative Web Developer",
    "email": "john.doe@gmail.com",
    "phone": "(555) 123-4567",
    "location": "Pleasantville, CA 94588",
    "url": {
      "label": "",
      "href": "https://johndoe.me/"
    },
    "customFields": [],
    "picture": {
      "url": "https://i.imgur.com/HgwyOuJ.jpg",
      "size": 64,
      "aspectRatio": 1,
      "borderRadius": 0,
      "effects": {
        "hidden": false,
        "border": false,
        "grayscale": false
      }
    }
  },
  "sections": {
    "summary": {
      "name": "Summary",
      "columns": 1,
      "visible": true,
      "id": "summary",
      "content": "<p>Innovative Web Developer with 5 years of experience in building impactful and user-friendly websites and applications. Specializes in <strong>front-end technologies</strong> and passionate about modern web standards and cutting-edge development techniques. Proven track record of leading successful projects from concept to deployment.</p>"
    },
    "awards": {
      "name": "Awards",
      "columns": 1,
      "visible": true,
      "id": "awards",
      "items": []
    },
    "certifications": {
      "name": "Certifications",
      "columns": 2,
      "visible": true,
      "id": "certifications",
      "items": [
        {
          "id": "spdhh9rrqi1gvj0yqnbqunlo",
          "visible": true,
          "name": "Full-Stack Web Development",
          "issuer": "CodeAcademy",
          "date": "2020",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        },
        {
          "id": "n838rddyqv47zexn6cxauwqp",
          "visible": true,
          "name": "AWS Certified Developer",
          "issuer": "Amazon Web Services",
          "date": "2019",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "education": {
      "name": "Education",
      "columns": 1,
      "visible": true,
      "id": "education",
      "items": [
        {
          "id": "yo3p200zo45c6cdqc6a2vtt3",
          "visible": true,
          "institution": "University of California",
          "studyType": "Bachelor's in Computer Science",
          "area": "Berkeley, CA",
          "score": "",
          "date": "August 2012 to May 2016",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "experience": {
      "name": "Experience",
      "columns": 1,
      "visible": true,
      "id": "experience",
      "items": [
        {
          "id": "lhw25d7gf32wgdfpsktf6e0x",
          "visible": true,
          "company": "Creative Solutions Inc.",
          "position": "Senior Web Developer",
          "location": "San Francisco, CA",
          "date": "January 2019 to Present",
          "summary": "<ul><li><p>Spearheaded the redesign of the main product website, resulting in a 40% increase in user engagement.</p></li><li><p>Developed and implemented a new responsive framework, improving cross-device compatibility.</p></li><li><p>Mentored a team of four junior developers, fostering a culture of technical excellence.</p></li></ul>",
          "url": {
            "label": "",
            "href": "https://creativesolutions.inc/"
          }
        },
        {
          "id": "r6543lil53ntrxmvel53gbtm",
          "visible": true,
          "company": "TechAdvancers",
          "position": "Web Developer",
          "location": "San Jose, CA",
          "date": "June 2016 to December 2018",
          "summary": "<ul><li><p>Collaborated in a team of 10 to develop high-quality web applications using React.js and Node.js.</p></li><li><p>Managed the integration of third-party services such as Stripe for payments and Twilio for SMS services.</p></li><li><p>Optimized application performance, achieving a 30% reduction in load times.</p></li></ul>",
          "url": {
            "label": "",
            "href": "https://techadvancers.com/"
          }
        }
      ]
    },
    "volunteer": {
      "name": "Volunteering",
      "columns": 1,
      "visible": true,
      "id": "volunteer",
      "items": []
    },
    "interests": {
      "name": "Interests",
      "columns": 1,
      "visible": true,
      "id": "interests",
      "items": []
    },
    "languages": {
      "name": "Languages",
      "columns": 1,
      "visible": true,
      "id": "languages",
      "items": []
    },
    "profiles": {
      "name": "Profiles",
      "columns": 4,
      "visible": true,
      "id": "profiles",
      "items": [
        {
          "id": "cnbk5f0aeqvhx69ebk7hktwd",
          "visible": true,
          "network": "LinkedIn",
          "username": "johndoe",
          "icon": "linkedin",
          "url": {
            "label": "",
            "href": "https://linkedin.com/in/johndoe"
          }
        },
        {
          "id": "ukl0uecvzkgm27mlye0wazlb",
          "visible": true,
          "network": "GitHub",
          "username": "johndoe",
          "icon": "github",
          "url": {
            "label": "",
            "href": "https://github.com/johndoe"
          }
        }
      ]
    },
    "projects": {
      "name": "Projects",
      "columns": 2,
      "visible": true,
      "id": "projects",
      "items": [
        {
          "id": "yw843emozcth8s1ubi1ubvlf",
          "visible": true,
          "name": "E-Commerce Platform",
          "description": "Project Lead",
          "date": "",
          "summary": "<p>Led the development of a full-stack e-commerce platform, improving sales conversion by 25%.</p>",
          "keywords": [],
          "url": {
            "label": "",
            "href": ""
          }
        },
        {
          "id": "ncxgdjjky54gh59iz2t1xi1v",
          "visible": true,
          "name": "Interactive Dashboard",
          "description": "Frontend Developer",
          "date": "",
          "summary": "<p>Created an interactive analytics dashboard for a SaaS application, enhancing data visualization for clients.</p>",
          "keywords": [],
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "publications": {
      "name": "Publications",
      "columns": 1,
      "visible": true,
      "id": "publications",
      "items": []
    },
    "references": {
      "name": "References",
      "columns": 1,
      "visible": false,
      "id": "references",
      "items": [
        {
          "id": "f2sv5z0cce6ztjl87yuk8fak",
          "visible": true,
          "name": "Available upon request",
          "description": "",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "skills": {
      "name": "Skills",
      "columns": 3,
      "visible": true,
      "id": "skills",
      "items": [
        {
          "id": "hn0keriukh6c0ojktl9gsgjm",
          "visible": true,
          "name": "Web Technologies",
          "description": "Advanced",
          "level": 0,
          "keywords": ["HTML5", "JavaScript", "PHP", "Python"]
        },
        {
          "id": "r8c3y47vykausqrgmzwg5pur",
          "visible": true,
          "name": "Web Frameworks",
          "description": "Intermediate",
          "level": 0,
          "keywords": ["React.js", "Angular", "Vue.js", "Laravel", "Django"]
        },
        {
          "id": "b5l75aseexqv17quvqgh73fe",
          "visible": true,
          "name": "Tools",
          "description": "Intermediate",
          "level": 0,
          "keywords": ["Webpack", "Git", "Jenkins", "Docker", "JIRA"]
        }
      ]
    },
    "custom": {}
  },
  "metadata": {
    "template": "rhyhorn",
    "layout": [
      [
        [
          "profiles",
          "summary",
          "experience",
          "education",
          "projects",
          "certifications",
          "skills",
          "references"
        ],
        ["interests", "languages", "awards", "volunteer", "publications"]
      ]
    ],
    "css": {
      "value": "* {\n\toutline: 1px solid #000;\n\toutline-offset: 4px;\n}",
      "visible": false
    },
    "page": {
      "margin": 14,
      "format": "a4",
      "options": {
        "breakLine": true,
        "pageNumbers": true
      }
    },
    "theme": {
      "background": "#ffffff",
      "text": "#000000",
      "primary": "#ca8a04"
    },
    "typography": {
      "font": {
        "family": "Merriweather",
        "subset": "latin",
        "variants": ["regular"],
        "size": 13
      },
      "lineHeight": 1.75,
      "hideIcons": false,
      "underlineLinks": true
    },
    "notes": ""
  }
}


================================================
File: apps/client/src/components/ai-actions.tsx
================================================
import { t } from "@lingui/macro";
import {
  CaretDown,
  ChatTeardropText,
  CircleNotch,
  Exam,
  MagicWand,
  PenNib,
} from "@phosphor-icons/react";
import {
  Badge,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@reactive-resume/ui";
import { cn } from "@reactive-resume/utils";
import { useState } from "react";

import { toast } from "../hooks/use-toast";
import { changeTone } from "../services/openai/change-tone";
import { fixGrammar } from "../services/openai/fix-grammar";
import { improveWriting } from "../services/openai/improve-writing";
import { useOpenAiStore } from "../stores/openai";

type Action = "improve" | "fix" | "tone";
type Mood = "casual" | "professional" | "confident" | "friendly";

type Props = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

export const AiActions = ({ value, onChange, className }: Props) => {
  const [loading, setLoading] = useState<Action | false>(false);
  const aiEnabled = useOpenAiStore((state) => !!state.apiKey);

  if (!aiEnabled) return null;

  const onClick = async (action: Action, mood?: Mood) => {
    try {
      setLoading(action);

      let result = value;

      if (action === "improve") result = await improveWriting(value);
      if (action === "fix") result = await fixGrammar(value);
      if (action === "tone" && mood) result = await changeTone(value, mood);

      onChange(result);
    } catch (error) {
      toast({
        variant: "error",
        title: t`Oops, the server returned an error.`,
        description: (error as Error).message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={cn(
        "relative mt-4 rounded bg-secondary-accent/50 p-3 outline outline-secondary-accent",
        "flex flex-wrap items-center justify-center gap-2",
        className,
      )}
    >
      <div className="absolute -left-5 z-10">
        <Badge
          outline
          variant="primary"
          className="-rotate-90 bg-background px-2 text-[10px] leading-[10px]"
        >
          <MagicWand size={10} className="mr-1" />
          {t`AI`}
        </Badge>
      </div>

      <Button size="sm" variant="outline" disabled={!!loading} onClick={() => onClick("improve")}>
        {loading === "improve" ? <CircleNotch className="animate-spin" /> : <PenNib />}
        <span className="ml-2 text-xs">{t`Improve Writing`}</span>
      </Button>

      <Button size="sm" variant="outline" disabled={!!loading} onClick={() => onClick("fix")}>
        {loading === "fix" ? <CircleNotch className="animate-spin" /> : <Exam />}
        <span className="ml-2 text-xs">{t`Fix Spelling & Grammar`}</span>
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="sm" variant="outline" disabled={!!loading}>
            {loading === "tone" ? <CircleNotch className="animate-spin" /> : <ChatTeardropText />}
            <span className="mx-2 text-xs">{t`Change Tone`}</span>
            <CaretDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => onClick("tone", "casual")}>
            <span role="img" aria-label={t`Casual`}>
              🙂
            </span>
            <span className="ml-2">{t`Casual`}</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onClick("tone", "professional")}>
            <span role="img" aria-label={t`Professional`}>
              💼
            </span>
            <span className="ml-2">{t`Professional`}</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onClick("tone", "confident")}>
            <span role="img" aria-label={t`Confident`}>
              😎
            </span>
            <span className="ml-2">{t`Confident`}</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onClick("tone", "friendly")}>
            <span role="img" aria-label={t`Friendly`}>
              😊
            </span>
            <span className="ml-2">{t`Friendly`}</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};


================================================
File: apps/client/src/pages/builder/layout.tsx
================================================
import { useBreakpoint } from "@reactive-resume/hooks";
import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  VisuallyHidden,
} from "@reactive-resume/ui";
import { cn } from "@reactive-resume/utils";
import { Outlet } from "react-router";

import { useBuilderStore } from "@/client/stores/builder";

import { BuilderHeader } from "./_components/header";
import { BuilderToolbar } from "./_components/toolbar";
import { LeftSidebar } from "./sidebars/left";
import { RightSidebar } from "./sidebars/right";

const onOpenAutoFocus = (event: Event) => {
  event.preventDefault();
};

const OutletSlot = () => (
  <>
    <BuilderHeader />

    <div className="absolute inset-0">
      <Outlet />
    </div>

    <BuilderToolbar />
  </>
);

export const BuilderLayout = () => {
  const { isDesktop } = useBreakpoint();

  const sheet = useBuilderStore((state) => state.sheet);

  const leftSetSize = useBuilderStore((state) => state.panel.left.setSize);
  const rightSetSize = useBuilderStore((state) => state.panel.right.setSize);

  const leftHandle = useBuilderStore((state) => state.panel.left.handle);
  const rightHandle = useBuilderStore((state) => state.panel.right.handle);

  if (isDesktop) {
    return (
      <div className="relative size-full overflow-hidden">
        <PanelGroup direction="horizontal">
          <Panel
            minSize={25}
            maxSize={45}
            defaultSize={30}
            className={cn("z-10 bg-background", !leftHandle.isDragging && "transition-[flex]")}
            onResize={leftSetSize}
          >
            <LeftSidebar />
          </Panel>
          <PanelResizeHandle
            isDragging={leftHandle.isDragging}
            onDragging={leftHandle.setDragging}
          />
          <Panel>
            <OutletSlot />
          </Panel>
          <PanelResizeHandle
            isDragging={rightHandle.isDragging}
            onDragging={rightHandle.setDragging}
          />
          <Panel
            minSize={25}
            maxSize={45}
            defaultSize={30}
            className={cn("z-10 bg-background", !rightHandle.isDragging && "transition-[flex]")}
            onResize={rightSetSize}
          >
            <RightSidebar />
          </Panel>
        </PanelGroup>
      </div>
    );
  }

  return (
    <div className="relative">
      <Sheet open={sheet.left.open} onOpenChange={sheet.left.setOpen}>
        <VisuallyHidden>
          <SheetHeader>
            <SheetTitle />
            <SheetDescription />
          </SheetHeader>
        </VisuallyHidden>

        <SheetContent
          side="left"
          showClose={false}
          className="top-16 p-0 sm:max-w-xl"
          onOpenAutoFocus={onOpenAutoFocus}
        >
          <LeftSidebar />
        </SheetContent>
      </Sheet>

      <OutletSlot />

      <Sheet open={sheet.right.open} onOpenChange={sheet.right.setOpen}>
        <SheetContent
          side="right"
          showClose={false}
          className="top-16 p-0 sm:max-w-xl"
          onOpenAutoFocus={onOpenAutoFocus}
        >
          <VisuallyHidden>
            <SheetHeader>
              <SheetTitle />
              <SheetDescription />
            </SheetHeader>
          </VisuallyHidden>

          <RightSidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
};


================================================
File: apps/client/src/pages/builder/page.tsx
================================================
import { t } from "@lingui/macro";
import type { ResumeDto } from "@reactive-resume/dto";
import { useCallback, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import type { LoaderFunction } from "react-router";
import { redirect } from "react-router";

import { queryClient } from "@/client/libs/query-client";
import { findResumeById } from "@/client/services/resume";
import { useBuilderStore } from "@/client/stores/builder";
import { useResumeStore } from "@/client/stores/resume";

export const BuilderPage = () => {
  const frameRef = useBuilderStore((state) => state.frame.ref);
  const setFrameRef = useBuilderStore((state) => state.frame.setRef);

  const resume = useResumeStore((state) => state.resume);
  const title = useResumeStore((state) => state.resume.title);

  const syncResumeToArtboard = useCallback(() => {
    setImmediate(() => {
      if (!frameRef?.contentWindow) return;
      const message = { type: "SET_RESUME", payload: resume.data };
      frameRef.contentWindow.postMessage(message, "*");
    });
  }, [frameRef?.contentWindow, resume.data]);

  // Send resume data to iframe on initial load
  useEffect(() => {
    if (!frameRef) return;

    frameRef.addEventListener("load", syncResumeToArtboard);

    return () => {
      frameRef.removeEventListener("load", syncResumeToArtboard);
    };
  }, [frameRef]);

  // Persistently check if iframe has loaded using setInterval
  useEffect(() => {
    const interval = setInterval(() => {
      if (frameRef?.contentWindow?.document.readyState === "complete") {
        syncResumeToArtboard();
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [frameRef]);

  // Send resume data to iframe on change of resume data
  useEffect(syncResumeToArtboard, [resume.data]);

  return (
    <>
      <Helmet>
        <title>
          {title} - {t`Reactive Resume`}
        </title>
      </Helmet>

      <iframe
        ref={setFrameRef}
        title={resume.id}
        src="/artboard/builder"
        className="mt-16 w-screen"
        style={{ height: `calc(100vh - 64px)` }}
      />
    </>
  );
};

export const builderLoader: LoaderFunction<ResumeDto> = async ({ params }) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const id = params.id!;

    const resume = await queryClient.fetchQuery({
      queryKey: ["resume", { id }],
      queryFn: () => findResumeById({ id }),
    });

    useResumeStore.setState({ resume });
    useResumeStore.temporal.getState().clear();

    return resume;
  } catch {
    return redirect("/dashboard");
  }
};


================================================
File: apps/client/src/pages/builder/_components/header.tsx
================================================
import { t } from "@lingui/macro";
import { HouseSimple, Lock, SidebarSimple } from "@phosphor-icons/react";
import { Button, Tooltip } from "@reactive-resume/ui";
import { cn } from "@reactive-resume/utils";
import { Link } from "react-router";

import { useBuilderStore } from "@/client/stores/builder";
import { useResumeStore } from "@/client/stores/resume";

export const BuilderHeader = () => {
  const title = useResumeStore((state) => state.resume.title);
  const locked = useResumeStore((state) => state.resume.locked);

  const toggle = useBuilderStore((state) => state.toggle);
  const isDragging = useBuilderStore(
    (state) => state.panel.left.handle.isDragging || state.panel.right.handle.isDragging,
  );
  const leftPanelSize = useBuilderStore((state) => state.panel.left.size);
  const rightPanelSize = useBuilderStore((state) => state.panel.right.size);

  const onToggle = (side: "left" | "right") => {
    toggle(side);
  };

  return (
    <div
      style={{ left: `${leftPanelSize}%`, right: `${rightPanelSize}%` }}
      className={cn(
        "fixed inset-x-0 top-0 z-[60] h-16 bg-secondary-accent/50 backdrop-blur-lg lg:z-20",
        !isDragging && "transition-[left,right]",
      )}
    >
      <div className="flex h-full items-center justify-between px-4">
        <Button
          size="icon"
          variant="ghost"
          className="flex lg:hidden"
          onClick={() => {
            onToggle("left");
          }}
        >
          <SidebarSimple />
        </Button>

        <div className="flex items-center justify-center gap-x-1 lg:mx-auto">
          <Button asChild size="icon" variant="ghost">
            <Link to="/dashboard/resumes">
              <HouseSimple />
            </Link>
          </Button>

          <span className="mr-2 text-xs opacity-40">{"/"}</span>

          <h1 className="font-medium">{title}</h1>

          {locked && (
            <Tooltip content={t`This resume is locked, please unlock to make further changes.`}>
              <Lock size={14} className="ml-2 opacity-75" />
            </Tooltip>
          )}
        </div>

        <Button
          size="icon"
          variant="ghost"
          className="flex lg:hidden"
          onClick={() => {
            onToggle("right");
          }}
        >
          <SidebarSimple className="-scale-x-100" />
        </Button>
      </div>
    </div>
  );
};


================================================
File: apps/client/src/pages/builder/_components/toolbar.tsx
================================================
import { t } from "@lingui/macro";
import {
  ArrowClockwise,
  ArrowCounterClockwise,
  ArrowsOutCardinal,
  CircleNotch,
  ClockClockwise,
  CubeFocus,
  FilePdf,
  Hash,
  LineSegment,
  LinkSimple,
  MagnifyingGlass,
  MagnifyingGlassMinus,
  MagnifyingGlassPlus,
} from "@phosphor-icons/react";
import { Button, Separator, Toggle, Tooltip } from "@reactive-resume/ui";
import { motion } from "framer-motion";
import { useState } from "react";

import { useToast } from "@/client/hooks/use-toast";
import { usePrintResume } from "@/client/services/resume";
import { useBuilderStore } from "@/client/stores/builder";
import { useResumeStore, useTemporalResumeStore } from "@/client/stores/resume";

const openInNewTab = (url: string) => {
  const win = window.open(url, "_blank");
  if (win) win.focus();
};

export const BuilderToolbar = () => {
  const { toast } = useToast();

  const [panMode, setPanMode] = useState<boolean>(true);

  const setValue = useResumeStore((state) => state.setValue);
  const undo = useTemporalResumeStore((state) => state.undo);
  const redo = useTemporalResumeStore((state) => state.redo);
  const frameRef = useBuilderStore((state) => state.frame.ref);

  const id = useResumeStore((state) => state.resume.id);
  const isPublic = useResumeStore((state) => state.resume.visibility === "public");
  const pageOptions = useResumeStore((state) => state.resume.data.metadata.page.options);

  const { printResume, loading } = usePrintResume();

  const onPrint = async () => {
    const { url } = await printResume({ id });

    openInNewTab(url);
  };

  const onCopy = async () => {
    const { url } = await printResume({ id });
    await navigator.clipboard.writeText(url);

    toast({
      variant: "success",
      title: t`A link has been copied to your clipboard.`,
      description: t`Anyone with this link can view and download the resume. Share it on your profile or with recruiters.`,
    });
  };

  const onZoomIn = () => frameRef?.contentWindow?.postMessage({ type: "ZOOM_IN" }, "*");
  const onZoomOut = () => frameRef?.contentWindow?.postMessage({ type: "ZOOM_OUT" }, "*");
  const onResetView = () => frameRef?.contentWindow?.postMessage({ type: "RESET_VIEW" }, "*");
  const onCenterView = () => frameRef?.contentWindow?.postMessage({ type: "CENTER_VIEW" }, "*");
  const onTogglePanMode = () => {
    setPanMode(!panMode);
    frameRef?.contentWindow?.postMessage({ type: "TOGGLE_PAN_MODE", panMode: !panMode }, "*");
  };

  return (
    <motion.div className="fixed inset-x-0 bottom-0 mx-auto hidden py-6 text-center md:block">
      <div className="inline-flex items-center justify-center rounded-full bg-background px-4 shadow-xl">
        <Tooltip content={t`Undo`}>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-none"
            onClick={() => {
              undo();
            }}
          >
            <ArrowCounterClockwise />
          </Button>
        </Tooltip>

        <Tooltip content={t`Redo`}>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-none"
            onClick={() => {
              redo();
            }}
          >
            <ArrowClockwise />
          </Button>
        </Tooltip>

        <Separator orientation="vertical" className="h-9" />

        <Tooltip content={panMode ? t`Scroll to Pan` : t`Scroll to Zoom`}>
          <Toggle className="rounded-none" pressed={panMode} onPressedChange={onTogglePanMode}>
            {panMode ? <ArrowsOutCardinal /> : <MagnifyingGlass />}
          </Toggle>
        </Tooltip>

        <Separator orientation="vertical" className="h-9" />

        <Tooltip content={t`Zoom In`}>
          <Button size="icon" variant="ghost" className="rounded-none" onClick={onZoomIn}>
            <MagnifyingGlassPlus />
          </Button>
        </Tooltip>

        <Tooltip content={t`Zoom Out`}>
          <Button size="icon" variant="ghost" className="rounded-none" onClick={onZoomOut}>
            <MagnifyingGlassMinus />
          </Button>
        </Tooltip>

        <Tooltip content={t`Reset Zoom`}>
          <Button size="icon" variant="ghost" className="rounded-none" onClick={onResetView}>
            <ClockClockwise />
          </Button>
        </Tooltip>

        <Tooltip content={t`Center Artboard`}>
          <Button size="icon" variant="ghost" className="rounded-none" onClick={onCenterView}>
            <CubeFocus />
          </Button>
        </Tooltip>

        <Separator orientation="vertical" className="h-9" />

        <Tooltip content={t`Toggle Page Break Line`}>
          <Toggle
            className="rounded-none"
            pressed={pageOptions.breakLine}
            onPressedChange={(pressed) => {
              setValue("metadata.page.options.breakLine", pressed);
            }}
          >
            <LineSegment />
          </Toggle>
        </Tooltip>

        <Tooltip content={t`Toggle Page Numbers`}>
          <Toggle
            className="rounded-none"
            pressed={pageOptions.pageNumbers}
            onPressedChange={(pressed) => {
              setValue("metadata.page.options.pageNumbers", pressed);
            }}
          >
            <Hash />
          </Toggle>
        </Tooltip>

        <Separator orientation="vertical" className="h-9" />

        <Tooltip content={t`Copy Link to Resume`}>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-none"
            disabled={!isPublic}
            onClick={onCopy}
          >
            <LinkSimple />
          </Button>
        </Tooltip>

        <Tooltip content={t`Download PDF`}>
          <Button
            size="icon"
            variant="ghost"
            disabled={loading}
            className="rounded-none"
            onClick={onPrint}
          >
            {loading ? <CircleNotch className="animate-spin" /> : <FilePdf />}
          </Button>
        </Tooltip>
      </div>
    </motion.div>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/left/index.tsx
================================================
import { t } from "@lingui/macro";
import { Plus, PlusCircle } from "@phosphor-icons/react";
import type {
  Award,
  Certification,
  CustomSection,
  Education,
  Experience,
  Interest,
  Language,
  Profile,
  Project,
  Publication,
  Reference,
  Skill,
  Volunteer,
} from "@reactive-resume/schema";
import { Button, ScrollArea, Separator } from "@reactive-resume/ui";
import { Fragment, useRef } from "react";
import { Link } from "react-router";

import { Icon } from "@/client/components/icon";
import { UserAvatar } from "@/client/components/user-avatar";
import { UserOptions } from "@/client/components/user-options";
import { useResumeStore } from "@/client/stores/resume";

import { BasicsSection } from "./sections/basics";
import { SectionBase } from "./sections/shared/section-base";
import { SectionIcon } from "./sections/shared/section-icon";
import { SummarySection } from "./sections/summary";

export const LeftSidebar = () => {
  const containterRef = useRef<HTMLDivElement | null>(null);

  const addSection = useResumeStore((state) => state.addSection);
  const customSections = useResumeStore((state) => state.resume.data.sections.custom);

  const scrollIntoView = (selector: string) => {
    const section = containterRef.current?.querySelector(selector);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex bg-secondary-accent/30">
      <div className="hidden basis-12 flex-col items-center justify-between bg-secondary-accent/30 py-4 sm:flex">
        <Button asChild size="icon" variant="ghost" className="size-8 rounded-full">
          <Link to="/dashboard">
            <Icon size={14} />
          </Link>
        </Button>

        <div className="flex flex-col items-center justify-center gap-y-2">
          <SectionIcon
            id="basics"
            name={t({
              message: "Basics",
              context:
                "The basics section of a resume consists of User's Picture, Full Name, Location etc.",
            })}
            onClick={() => {
              scrollIntoView("#basics");
            }}
          />
          <SectionIcon
            id="summary"
            onClick={() => {
              scrollIntoView("#summary");
            }}
          />
          <SectionIcon
            id="profiles"
            onClick={() => {
              scrollIntoView("#profiles");
            }}
          />
          <SectionIcon
            id="experience"
            onClick={() => {
              scrollIntoView("#experience");
            }}
          />
          <SectionIcon
            id="education"
            onClick={() => {
              scrollIntoView("#education");
            }}
          />
          <SectionIcon
            id="skills"
            onClick={() => {
              scrollIntoView("#skills");
            }}
          />
          <SectionIcon
            id="languages"
            onClick={() => {
              scrollIntoView("#languages");
            }}
          />
          <SectionIcon
            id="awards"
            onClick={() => {
              scrollIntoView("#awards");
            }}
          />
          <SectionIcon
            id="certifications"
            onClick={() => {
              scrollIntoView("#certifications");
            }}
          />
          <SectionIcon
            id="interests"
            onClick={() => {
              scrollIntoView("#interests");
            }}
          />
          <SectionIcon
            id="projects"
            onClick={() => {
              scrollIntoView("#projects");
            }}
          />
          <SectionIcon
            id="publications"
            onClick={() => {
              scrollIntoView("#publications");
            }}
          />
          <SectionIcon
            id="volunteer"
            onClick={() => {
              scrollIntoView("#volunteer");
            }}
          />
          <SectionIcon
            id="references"
            onClick={() => {
              scrollIntoView("#references");
            }}
          />

          <SectionIcon
            id="custom"
            variant="outline"
            name={t`Add a new section`}
            icon={<Plus size={14} />}
            onClick={() => {
              addSection();
              // eslint-disable-next-line lingui/no-unlocalized-strings
              scrollIntoView("& > section:last-of-type");
            }}
          />
        </div>

        <UserOptions>
          <Button size="icon" variant="ghost" className="rounded-full">
            <UserAvatar size={28} />
          </Button>
        </UserOptions>
      </div>

      <ScrollArea orientation="vertical" className="h-screen flex-1 pb-16 lg:pb-0">
        <div ref={containterRef} className="grid gap-y-10 p-6 @container/left">
          <BasicsSection />
          <Separator />
          <SummarySection />
          <Separator />
          <SectionBase<Profile>
            id="profiles"
            title={(item) => item.network}
            description={(item) => item.username}
          />
          <Separator />
          <SectionBase<Experience>
            id="experience"
            title={(item) => item.company}
            description={(item) => item.position}
          />
          <Separator />
          <SectionBase<Education>
            id="education"
            title={(item) => item.institution}
            description={(item) => item.area}
          />
          <Separator />
          <SectionBase<Skill>
            id="skills"
            title={(item) => item.name}
            description={(item) => {
              if (item.description) return item.description;
              if (item.keywords.length > 0) return `${item.keywords.length} keywords`;
            }}
          />
          <Separator />
          <SectionBase<Language>
            id="languages"
            title={(item) => item.name}
            description={(item) => item.description}
          />
          <Separator />
          <SectionBase<Award>
            id="awards"
            title={(item) => item.title}
            description={(item) => item.awarder}
          />
          <Separator />
          <SectionBase<Certification>
            id="certifications"
            title={(item) => item.name}
            description={(item) => item.issuer}
          />
          <Separator />
          <SectionBase<Interest>
            id="interests"
            title={(item) => item.name}
            description={(item) => {
              if (item.keywords.length > 0) return `${item.keywords.length} keywords`;
            }}
          />
          <Separator />
          <SectionBase<Project>
            id="projects"
            title={(item) => item.name}
            description={(item) => item.description}
          />
          <Separator />
          <SectionBase<Publication>
            id="publications"
            title={(item) => item.name}
            description={(item) => item.publisher}
          />
          <Separator />
          <SectionBase<Volunteer>
            id="volunteer"
            title={(item) => item.organization}
            description={(item) => item.position}
          />
          <Separator />
          <SectionBase<Reference>
            id="references"
            title={(item) => item.name}
            description={(item) => item.description}
          />

          {/* Custom Sections */}
          {Object.values(customSections).map((section) => (
            <Fragment key={section.id}>
              <Separator />

              <SectionBase<CustomSection>
                id={`custom.${section.id}`}
                title={(item) => item.name}
                description={(item) => item.description}
              />
            </Fragment>
          ))}

          <Separator />

          <Button size="lg" variant="outline" onClick={addSection}>
            <PlusCircle />
            <span className="ml-2">{t`Add a new section`}</span>
          </Button>
        </div>
      </ScrollArea>
    </div>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/left/dialogs/awards.tsx
================================================
import { zodResolver } from "@hookform/resolvers/zod";
import { t } from "@lingui/macro";
import { awardSchema, defaultAward } from "@reactive-resume/schema";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  RichInput,
} from "@reactive-resume/ui";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { AiActions } from "@/client/components/ai-actions";

import { SectionDialog } from "../sections/shared/section-dialog";
import { URLInput } from "../sections/shared/url-input";

const formSchema = awardSchema;

type FormValues = z.infer<typeof formSchema>;

export const AwardsDialog = () => {
  const form = useForm<FormValues>({
    defaultValues: defaultAward,
    resolver: zodResolver(formSchema),
  });

  return (
    <SectionDialog<FormValues> id="awards" form={form} defaultValues={defaultAward}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          name="title"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t({ message: "Title", context: "Name of the Award" })}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="awarder"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Awarder`}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="date"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Date`}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder={t({
                    message: "March 2023",
                    comment: "The month and year should be uniform across all languages.",
                  })}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="url"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Website`}</FormLabel>
              <FormControl>
                <URLInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="summary"
          control={form.control}
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>{t`Summary`}</FormLabel>
              <FormControl>
                <RichInput
                  {...field}
                  content={field.value}
                  footer={(editor) => (
                    <AiActions
                      value={editor.getText()}
                      onChange={(value) => {
                        editor.commands.setContent(value, true);
                        field.onChange(value);
                      }}
                    />
                  )}
                  onChange={(value) => {
                    field.onChange(value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </SectionDialog>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/left/dialogs/certifications.tsx
================================================
import { zodResolver } from "@hookform/resolvers/zod";
import { t } from "@lingui/macro";
import { certificationSchema, defaultCertification } from "@reactive-resume/schema";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  RichInput,
} from "@reactive-resume/ui";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { AiActions } from "@/client/components/ai-actions";

import { SectionDialog } from "../sections/shared/section-dialog";
import { URLInput } from "../sections/shared/url-input";

const formSchema = certificationSchema;

type FormValues = z.infer<typeof formSchema>;

export const CertificationsDialog = () => {
  const form = useForm<FormValues>({
    defaultValues: defaultCertification,
    resolver: zodResolver(formSchema),
  });

  return (
    <SectionDialog<FormValues> id="certifications" form={form} defaultValues={defaultCertification}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t({ message: "Name", context: "Name of the Certification" })}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="issuer"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Issuer`}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="date"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Date`}</FormLabel>
              <FormControl>
                <Input {...field} placeholder={t`March 2023`} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="url"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Website`}</FormLabel>
              <FormControl>
                <URLInput {...field} placeholder="https://udemy.com/certificate/UC-..." />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="summary"
          control={form.control}
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>{t`Summary`}</FormLabel>
              <FormControl>
                <RichInput
                  {...field}
                  content={field.value}
                  footer={(editor) => (
                    <AiActions
                      value={editor.getText()}
                      onChange={(value) => {
                        editor.commands.setContent(value, true);
                        field.onChange(value);
                      }}
                    />
                  )}
                  onChange={(value) => {
                    field.onChange(value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </SectionDialog>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/left/dialogs/custom-section.tsx
================================================
import { zodResolver } from "@hookform/resolvers/zod";
import { t } from "@lingui/macro";
import { X } from "@phosphor-icons/react";
import type { CustomSection } from "@reactive-resume/schema";
import { customSectionSchema, defaultCustomSection } from "@reactive-resume/schema";
import {
  Badge,
  BadgeInput,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  RichInput,
} from "@reactive-resume/ui";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { AiActions } from "@/client/components/ai-actions";
import { useDialog } from "@/client/stores/dialog";

import { SectionDialog } from "../sections/shared/section-dialog";
import { URLInput } from "../sections/shared/url-input";

const formSchema = customSectionSchema;

type FormValues = z.infer<typeof formSchema>;

export const CustomSectionDialog = () => {
  const { payload } = useDialog<CustomSection>("custom");

  const form = useForm<FormValues>({
    defaultValues: defaultCustomSection,
    resolver: zodResolver(formSchema),
  });

  const [pendingKeyword, setPendingKeyword] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!payload) return null;

  return (
    <SectionDialog<FormValues>
      form={form}
      id={payload.id}
      defaultValues={defaultCustomSection}
      pendingKeyword={pendingKeyword}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Name`}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="description"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Description`}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="date"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Date or Date Range`}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="location"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Location`}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="url"
          control={form.control}
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>{t`Website`}</FormLabel>
              <FormControl>
                <URLInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="summary"
          control={form.control}
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>{t`Summary`}</FormLabel>
              <FormControl>
                <RichInput
                  {...field}
                  content={field.value}
                  footer={(editor) => (
                    <AiActions
                      value={editor.getText()}
                      onChange={(value) => {
                        editor.commands.setContent(value, true);
                        field.onChange(value);
                      }}
                    />
                  )}
                  onChange={(value) => {
                    field.onChange(value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="keywords"
          control={form.control}
          render={({ field }) => (
            <div className="space-y-3 sm:col-span-2">
              <FormItem>
                <FormLabel>{t`Keywords`}</FormLabel>
                <FormControl>
                  <BadgeInput {...field} setPendingKeyword={setPendingKeyword} />
                </FormControl>
                <FormDescription>
                  {t`You can add multiple keywords by separating them with a comma or pressing enter.`}
                </FormDescription>
                <FormMessage />
              </FormItem>

              <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
                <AnimatePresence>
                  {field.value.map((item, index) => (
                    <motion.div
                      key={item}
                      layout
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1 } }}
                      exit={{ opacity: 0, x: -50 }}
                    >
                      <Badge
                        className="cursor-pointer"
                        onClick={() => {
                          field.onChange(field.value.filter((v) => item !== v));
                        }}
                      >
                        <span className="mr-1">{item}</span>
                        <X size={12} weight="bold" />
                      </Badge>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          )}
        />
      </div>
    </SectionDialog>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/left/dialogs/education.tsx
================================================
import { zodResolver } from "@hookform/resolvers/zod";
import { t } from "@lingui/macro";
import { defaultEducation, educationSchema } from "@reactive-resume/schema";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  RichInput,
} from "@reactive-resume/ui";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { AiActions } from "@/client/components/ai-actions";

import { SectionDialog } from "../sections/shared/section-dialog";
import { URLInput } from "../sections/shared/url-input";

const formSchema = educationSchema;

type FormValues = z.infer<typeof formSchema>;

export const EducationDialog = () => {
  const form = useForm<FormValues>({
    defaultValues: defaultEducation,
    resolver: zodResolver(formSchema),
  });

  return (
    <SectionDialog<FormValues> id="education" form={form} defaultValues={defaultEducation}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          name="institution"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Institution`}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="studyType"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {t({
                  message: "Type of Study",
                  comment: "For example, Bachelor's Degree or Master's Degree",
                })}
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="area"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {t({
                  message: "Area of Study",
                  comment: "For example, Computer Science or Business Administration",
                })}
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="score"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {t({
                  message: "Score",
                  comment: "Score or honors for the degree, for example, CGPA or magna cum laude",
                })}
              </FormLabel>
              <FormControl>
                <Input {...field} placeholder="9.2 GPA" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="date"
          control={form.control}
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>{t`Date or Date Range`}</FormLabel>
              <FormControl>
                <Input {...field} placeholder={t`March 2023 - Present`} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="url"
          control={form.control}
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>{t`Website`}</FormLabel>
              <FormControl>
                <URLInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="summary"
          control={form.control}
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>{t`Summary`}</FormLabel>
              <FormControl>
                <RichInput
                  {...field}
                  content={field.value}
                  footer={(editor) => (
                    <AiActions
                      value={editor.getText()}
                      onChange={(value) => {
                        editor.commands.setContent(value, true);
                        field.onChange(value);
                      }}
                    />
                  )}
                  onChange={(value) => {
                    field.onChange(value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </SectionDialog>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/left/dialogs/experience.tsx
================================================
import { zodResolver } from "@hookform/resolvers/zod";
import { t } from "@lingui/macro";
import { defaultExperience, experienceSchema } from "@reactive-resume/schema";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  RichInput,
} from "@reactive-resume/ui";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { AiActions } from "@/client/components/ai-actions";

import { SectionDialog } from "../sections/shared/section-dialog";
import { URLInput } from "../sections/shared/url-input";

const formSchema = experienceSchema;

type FormValues = z.infer<typeof formSchema>;

export const ExperienceDialog = () => {
  const form = useForm<FormValues>({
    defaultValues: defaultExperience,
    resolver: zodResolver(formSchema),
  });

  return (
    <SectionDialog<FormValues> id="experience" form={form} defaultValues={defaultExperience}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          name="company"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Company`}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="position"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {t({
                  message: "Position",
                  context: "Position held at a company, for example, Software Engineer",
                })}
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="date"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Date or Date Range`}</FormLabel>
              <FormControl>
                <Input {...field} placeholder={t`March 2023 - Present`} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="location"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Location`}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="url"
          control={form.control}
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>{t`Website`}</FormLabel>
              <FormControl>
                <URLInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="summary"
          control={form.control}
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>{t`Summary`}</FormLabel>
              <FormControl>
                <RichInput
                  {...field}
                  content={field.value}
                  footer={(editor) => (
                    <AiActions
                      value={editor.getText()}
                      onChange={(value) => {
                        editor.commands.setContent(value, true);
                        field.onChange(value);
                      }}
                    />
                  )}
                  onChange={(value) => {
                    field.onChange(value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </SectionDialog>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/left/dialogs/interests.tsx
================================================
import { zodResolver } from "@hookform/resolvers/zod";
import { t } from "@lingui/macro";
import { X } from "@phosphor-icons/react";
import { defaultInterest, interestSchema } from "@reactive-resume/schema";
import {
  Badge,
  BadgeInput,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@reactive-resume/ui";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { SectionDialog } from "../sections/shared/section-dialog";

const formSchema = interestSchema;

type FormValues = z.infer<typeof formSchema>;

export const InterestsDialog = () => {
  const form = useForm<FormValues>({
    defaultValues: defaultInterest,
    resolver: zodResolver(formSchema),
  });

  const [pendingKeyword, setPendingKeyword] = useState("");

  return (
    <SectionDialog<FormValues>
      id="interests"
      form={form}
      defaultValues={defaultInterest}
      pendingKeyword={pendingKeyword}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>{t`Name`}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="keywords"
          control={form.control}
          render={({ field }) => (
            <div className="col-span-2 space-y-3">
              <FormItem>
                <FormLabel>{t`Keywords`}</FormLabel>
                <FormControl>
                  <BadgeInput {...field} setPendingKeyword={setPendingKeyword} />
                </FormControl>
                <FormDescription>
                  {t`You can add multiple keywords by separating them with a comma or pressing enter.`}
                </FormDescription>
                <FormMessage />
              </FormItem>

              <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
                <AnimatePresence>
                  {field.value.map((item, index) => (
                    <motion.div
                      key={item}
                      layout
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1 } }}
                      exit={{ opacity: 0, x: -50 }}
                    >
                      <Badge
                        className="cursor-pointer"
                        onClick={() => {
                          field.onChange(field.value.filter((v) => item !== v));
                        }}
                      >
                        <span className="mr-1">{item}</span>
                        <X size={12} weight="bold" />
                      </Badge>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          )}
        />
      </div>
    </SectionDialog>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/left/dialogs/languages.tsx
================================================
import { zodResolver } from "@hookform/resolvers/zod";
import { t } from "@lingui/macro";
import { defaultLanguage, languageSchema } from "@reactive-resume/schema";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Slider,
} from "@reactive-resume/ui";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { SectionDialog } from "../sections/shared/section-dialog";

const formSchema = languageSchema;

type FormValues = z.infer<typeof formSchema>;

export const LanguagesDialog = () => {
  const form = useForm<FormValues>({
    defaultValues: defaultLanguage,
    resolver: zodResolver(formSchema),
  });

  return (
    <SectionDialog<FormValues> id="languages" form={form} defaultValues={defaultLanguage}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Name`}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="description"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Description`}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="level"
          control={form.control}
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>{t`Level`}</FormLabel>
              <FormControl className="py-2">
                <div className="flex items-center gap-x-4">
                  <Slider
                    {...field}
                    min={0}
                    max={5}
                    value={[field.value]}
                    onValueChange={(value) => {
                      field.onChange(value[0]);
                    }}
                  />

                  {field.value > 0 ? (
                    <span className="text-base font-bold">{field.value}</span>
                  ) : (
                    <span className="text-base font-bold">{t`Hidden`}</span>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </SectionDialog>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/left/dialogs/profiles.tsx
================================================
import { zodResolver } from "@hookform/resolvers/zod";
import { t, Trans } from "@lingui/macro";
import { defaultProfile, profileSchema } from "@reactive-resume/schema";
import {
  Avatar,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@reactive-resume/ui";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { BrandIcon } from "@/client/components/brand-icon";

import { SectionDialog } from "../sections/shared/section-dialog";
import { URLInput } from "../sections/shared/url-input";

const formSchema = profileSchema;

type FormValues = z.infer<typeof formSchema>;

export const ProfilesDialog = () => {
  const form = useForm<FormValues>({
    defaultValues: defaultProfile,
    resolver: zodResolver(formSchema),
  });

  return (
    <SectionDialog<FormValues> id="profiles" form={form} defaultValues={defaultProfile}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          name="network"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Network`}</FormLabel>
              <FormControl>
                {/* eslint-disable-next-line lingui/no-unlocalized-strings */}
                <Input {...field} placeholder="GitHub" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="username"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Username`}</FormLabel>
              <FormControl>
                <Input {...field} placeholder="john.doe" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="url"
          control={form.control}
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>{t`Website`}</FormLabel>
              <FormControl>
                <URLInput {...field} placeholder="https://github.com/johndoe" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="icon"
          control={form.control}
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel htmlFor="iconSlug">{t`Icon`}</FormLabel>
              <FormControl>
                <div className="flex items-center gap-x-2">
                  <Avatar className="size-8 bg-white p-1.5">
                    <BrandIcon slug={field.value} />
                  </Avatar>
                  <Input {...field} placeholder="github" onChange={field.onChange} />
                </div>
              </FormControl>
              <FormMessage />
              <FormDescription className="ml-10">
                <Trans>
                  Powered by{" "}
                  <a
                    href="https://simpleicons.org/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="font-medium"
                  >
                    Simple Icons
                  </a>
                </Trans>
              </FormDescription>
            </FormItem>
          )}
        />
      </div>
    </SectionDialog>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/left/dialogs/projects.tsx
================================================
import { zodResolver } from "@hookform/resolvers/zod";
import { t } from "@lingui/macro";
import { X } from "@phosphor-icons/react";
import { defaultProject, projectSchema } from "@reactive-resume/schema";
import {
  Badge,
  BadgeInput,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  RichInput,
} from "@reactive-resume/ui";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { AiActions } from "@/client/components/ai-actions";

import { SectionDialog } from "../sections/shared/section-dialog";
import { URLInput } from "../sections/shared/url-input";

const formSchema = projectSchema;

type FormValues = z.infer<typeof formSchema>;

const handleDragOver = (e: React.DragEvent) => {
  e.preventDefault();
};

export const ProjectsDialog = () => {
  const form = useForm<FormValues>({
    defaultValues: defaultProject,
    resolver: zodResolver(formSchema),
  });

  const [pendingKeyword, setPendingKeyword] = useState("");
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDrop = (
    e: React.DragEvent,
    dropIndex: number,
    field: { value: string[]; onChange: (value: string[]) => void },
  ) => {
    e.preventDefault();
    if (draggedIndex === null) return;

    const newKeywords = [...field.value];
    const [draggedItem] = newKeywords.splice(draggedIndex, 1);
    newKeywords.splice(dropIndex, 0, draggedItem);

    field.onChange(newKeywords);
    setDraggedIndex(null);
  };

  return (
    <SectionDialog<FormValues>
      id="projects"
      form={form}
      defaultValues={defaultProject}
      pendingKeyword={pendingKeyword}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Name`}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="description"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Description`}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="date"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Date or Date Range`}</FormLabel>
              <FormControl>
                <Input {...field} placeholder={t`March 2023 - Present`} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="url"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Website`}</FormLabel>
              <FormControl>
                <URLInput {...field} placeholder="https://rxresu.me" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="summary"
          control={form.control}
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>{t`Summary`}</FormLabel>
              <FormControl>
                <RichInput
                  {...field}
                  content={field.value}
                  footer={(editor) => (
                    <AiActions
                      value={editor.getText()}
                      onChange={(value) => {
                        editor.commands.setContent(value, true);
                        field.onChange(value);
                      }}
                    />
                  )}
                  onChange={(value) => {
                    field.onChange(value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="keywords"
          control={form.control}
          render={({ field }) => (
            <div className="space-y-3 sm:col-span-2">
              <FormItem>
                <FormLabel>{t`Keywords`}</FormLabel>
                <FormControl>
                  <BadgeInput {...field} setPendingKeyword={setPendingKeyword} />
                </FormControl>
                <FormDescription>
                  {t`You can add multiple keywords by separating them with a comma or pressing enter.`}
                </FormDescription>
                <FormMessage />
              </FormItem>

              <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
                <AnimatePresence>
                  {field.value.map((item, index) => (
                    <motion.div
                      key={item}
                      layout
                      draggable
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1 } }}
                      exit={{ opacity: 0, x: -50 }}
                      onDragStart={() => {
                        setDraggedIndex(index);
                      }}
                      onDragOver={handleDragOver}
                      onDrop={(e) => {
                        handleDrop(e, index, field);
                      }}
                    >
                      <Badge className="cursor-move">
                        <span className="mr-1">{item}</span>
                        <X
                          className="cursor-pointer"
                          size={12}
                          weight="bold"
                          onClick={() => {
                            field.onChange(field.value.filter((v) => item !== v));
                          }}
                        />
                      </Badge>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          )}
        />
      </div>
    </SectionDialog>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/left/dialogs/publications.tsx
================================================
import { zodResolver } from "@hookform/resolvers/zod";
import { t } from "@lingui/macro";
import { defaultPublication, publicationSchema } from "@reactive-resume/schema";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  RichInput,
} from "@reactive-resume/ui";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { AiActions } from "@/client/components/ai-actions";

import { SectionDialog } from "../sections/shared/section-dialog";
import { URLInput } from "../sections/shared/url-input";

const formSchema = publicationSchema;

type FormValues = z.infer<typeof formSchema>;

export const PublicationsDialog = () => {
  const form = useForm<FormValues>({
    defaultValues: defaultPublication,
    resolver: zodResolver(formSchema),
  });

  return (
    <SectionDialog<FormValues> id="publications" form={form} defaultValues={defaultPublication}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Name`}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="publisher"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Publisher`}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="date"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Date`}</FormLabel>
              <FormControl>
                <Input {...field} placeholder={t`March 2023`} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="url"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Website`}</FormLabel>
              <FormControl>
                <URLInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="summary"
          control={form.control}
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>{t`Summary`}</FormLabel>
              <FormControl>
                <RichInput
                  {...field}
                  content={field.value}
                  footer={(editor) => (
                    <AiActions
                      value={editor.getText()}
                      onChange={(value) => {
                        editor.commands.setContent(value, true);
                        field.onChange(value);
                      }}
                    />
                  )}
                  onChange={(value) => {
                    field.onChange(value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </SectionDialog>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/left/dialogs/references.tsx
================================================
import { zodResolver } from "@hookform/resolvers/zod";
import { t } from "@lingui/macro";
import { defaultReference, referenceSchema } from "@reactive-resume/schema";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  RichInput,
} from "@reactive-resume/ui";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { AiActions } from "@/client/components/ai-actions";

import { SectionDialog } from "../sections/shared/section-dialog";
import { URLInput } from "../sections/shared/url-input";

const formSchema = referenceSchema;

type FormValues = z.infer<typeof formSchema>;

export const ReferencesDialog = () => {
  const form = useForm<FormValues>({
    defaultValues: defaultReference,
    resolver: zodResolver(formSchema),
  });

  return (
    <SectionDialog<FormValues> id="references" form={form} defaultValues={defaultReference}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Name`}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="description"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Description`}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="url"
          control={form.control}
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>{t`Website`}</FormLabel>
              <FormControl>
                <URLInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="summary"
          control={form.control}
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>{t`Summary`}</FormLabel>
              <FormControl>
                <RichInput
                  {...field}
                  content={field.value}
                  footer={(editor) => (
                    <AiActions
                      value={editor.getText()}
                      onChange={(value) => {
                        editor.commands.setContent(value, true);
                        field.onChange(value);
                      }}
                    />
                  )}
                  onChange={(value) => {
                    field.onChange(value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </SectionDialog>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/left/dialogs/skills.tsx
================================================
import { zodResolver } from "@hookform/resolvers/zod";
import { t } from "@lingui/macro";
import { X } from "@phosphor-icons/react";
import { defaultSkill, skillSchema } from "@reactive-resume/schema";
import {
  Badge,
  BadgeInput,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Slider,
} from "@reactive-resume/ui";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { SectionDialog } from "../sections/shared/section-dialog";

const formSchema = skillSchema;

type FormValues = z.infer<typeof formSchema>;

export const SkillsDialog = () => {
  const form = useForm<FormValues>({
    defaultValues: defaultSkill,
    resolver: zodResolver(formSchema),
  });

  const [pendingKeyword, setPendingKeyword] = useState("");

  return (
    <SectionDialog<FormValues>
      id="skills"
      form={form}
      defaultValues={defaultSkill}
      pendingKeyword={pendingKeyword}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Name`}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="description"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Description`}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="level"
          control={form.control}
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>{t`Level`}</FormLabel>
              <FormControl className="py-2">
                <div className="flex items-center gap-x-4">
                  <Slider
                    {...field}
                    min={0}
                    max={5}
                    value={[field.value]}
                    orientation="horizontal"
                    onValueChange={(value) => {
                      field.onChange(value[0]);
                    }}
                  />

                  {field.value > 0 ? (
                    <span className="text-base font-bold">{field.value}</span>
                  ) : (
                    <span className="text-base font-bold">{t`Hidden`}</span>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="keywords"
          control={form.control}
          render={({ field }) => (
            <div className="space-y-3 sm:col-span-2">
              <FormItem>
                <FormLabel>{t`Keywords`}</FormLabel>
                <FormControl>
                  <BadgeInput {...field} setPendingKeyword={setPendingKeyword} />
                </FormControl>
                <FormDescription>
                  {t`You can add multiple keywords by separating them with a comma or pressing enter.`}
                </FormDescription>
                <FormMessage />
              </FormItem>

              <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
                <AnimatePresence>
                  {field.value.map((item, index) => (
                    <motion.div
                      key={item}
                      layout
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1 } }}
                      exit={{ opacity: 0, x: -50 }}
                    >
                      <Badge
                        className="cursor-pointer"
                        onClick={() => {
                          field.onChange(field.value.filter((v) => item !== v));
                        }}
                      >
                        <span className="mr-1">{item}</span>
                        <X size={12} weight="bold" />
                      </Badge>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          )}
        />
      </div>
    </SectionDialog>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/left/dialogs/volunteer.tsx
================================================
import { zodResolver } from "@hookform/resolvers/zod";
import { t } from "@lingui/macro";
import { defaultVolunteer, volunteerSchema } from "@reactive-resume/schema";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  RichInput,
} from "@reactive-resume/ui";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { AiActions } from "@/client/components/ai-actions";

import { SectionDialog } from "../sections/shared/section-dialog";
import { URLInput } from "../sections/shared/url-input";

const formSchema = volunteerSchema;

type FormValues = z.infer<typeof formSchema>;

export const VolunteerDialog = () => {
  const form = useForm<FormValues>({
    defaultValues: defaultVolunteer,
    resolver: zodResolver(formSchema),
  });

  return (
    <SectionDialog<FormValues> id="volunteer" form={form} defaultValues={defaultVolunteer}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          name="organization"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Organization`}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="position"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Position`}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="date"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Date or Date Range`}</FormLabel>
              <FormControl>
                <Input {...field} placeholder={t`March 2023 - Present`} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="location"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Location`}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="url"
          control={form.control}
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>{t`Website`}</FormLabel>
              <FormControl>
                <URLInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="summary"
          control={form.control}
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>{t`Summary`}</FormLabel>
              <FormControl>
                <RichInput
                  {...field}
                  content={field.value}
                  footer={(editor) => (
                    <AiActions
                      value={editor.getText()}
                      onChange={(value) => {
                        editor.commands.setContent(value, true);
                        field.onChange(value);
                      }}
                    />
                  )}
                  onChange={(value) => {
                    field.onChange(value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </SectionDialog>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/left/sections/basics.tsx
================================================
import { t } from "@lingui/macro";
import { basicsSchema } from "@reactive-resume/schema";
import { Input, Label } from "@reactive-resume/ui";

import { useResumeStore } from "@/client/stores/resume";

import { CustomFieldsSection } from "./custom/section";
import { PictureSection } from "./picture/section";
import { SectionIcon } from "./shared/section-icon";
import { URLInput } from "./shared/url-input";

export const BasicsSection = () => {
  const setValue = useResumeStore((state) => state.setValue);
  const basics = useResumeStore((state) => state.resume.data.basics);

  return (
    <section id="basics" className="grid gap-y-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <SectionIcon id="basics" size={18} />
          <h2 className="line-clamp-1 text-2xl font-bold lg:text-3xl">{t`Basics`}</h2>
        </div>
      </header>

      <main className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <PictureSection />
        </div>

        <div className="space-y-4 sm:col-span-2">
          <Label htmlFor="basics.name">{t`Full Name`}</Label>
          <Input
            id="basics.name"
            value={basics.name}
            hasError={!basicsSchema.pick({ name: true }).safeParse({ name: basics.name }).success}
            onChange={(event) => {
              setValue("basics.name", event.target.value);
            }}
          />
        </div>

        <div className="space-y-1.5 sm:col-span-2">
          <Label htmlFor="basics.headline">{t`Headline`}</Label>
          <Input
            id="basics.headline"
            value={basics.headline}
            onChange={(event) => {
              setValue("basics.headline", event.target.value);
            }}
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="basics.email">{t`Email`}</Label>
          <Input
            id="basics.email"
            placeholder="john.doe@example.com"
            value={basics.email}
            hasError={
              !basicsSchema.pick({ email: true }).safeParse({ email: basics.email }).success
            }
            onChange={(event) => {
              setValue("basics.email", event.target.value);
            }}
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="basics.url">{t`Website`}</Label>
          <URLInput
            id="basics.url"
            value={basics.url}
            placeholder="https://example.com"
            onChange={(value) => {
              setValue("basics.url", value);
            }}
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="basics.phone">{t`Phone`}</Label>
          <Input
            id="basics.phone"
            placeholder="+1 (123) 4567 7890"
            value={basics.phone}
            onChange={(event) => {
              setValue("basics.phone", event.target.value);
            }}
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="basics.location">{t`Location`}</Label>
          <Input
            id="basics.location"
            value={basics.location}
            onChange={(event) => {
              setValue("basics.location", event.target.value);
            }}
          />
        </div>

        <CustomFieldsSection className="sm:col-span-2" />
      </main>
    </section>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/left/sections/summary.tsx
================================================
import { defaultSections } from "@reactive-resume/schema";
import { RichInput } from "@reactive-resume/ui";
import { cn } from "@reactive-resume/utils";

import { AiActions } from "@/client/components/ai-actions";
import { useResumeStore } from "@/client/stores/resume";

import { SectionIcon } from "./shared/section-icon";
import { SectionOptions } from "./shared/section-options";

export const SummarySection = () => {
  const setValue = useResumeStore((state) => state.setValue);
  const section = useResumeStore(
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    (state) => state.resume.data.sections.summary ?? defaultSections.summary,
  );

  return (
    <section id="summary" className="grid gap-y-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <SectionIcon id="summary" size={18} />
          <h2 className="line-clamp-1 text-2xl font-bold lg:text-3xl">{section.name}</h2>
        </div>

        <div className="flex items-center gap-x-2">
          <SectionOptions id="summary" />
        </div>
      </header>

      <main className={cn(!section.visible && "opacity-50")}>
        <RichInput
          content={section.content}
          footer={(editor) => (
            <AiActions
              value={editor.getText()}
              onChange={(value) => {
                editor.commands.setContent(value, true);
                setValue("sections.summary.content", value);
              }}
            />
          )}
          onChange={(value) => {
            setValue("sections.summary.content", value);
          }}
        />
      </main>
    </section>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/left/sections/custom/section.tsx
================================================
import { t, Trans } from "@lingui/macro";
import { createId } from "@paralleldrive/cuid2";
import { DotsSixVertical, Envelope, Plus, X } from "@phosphor-icons/react";
import type { CustomField as ICustomField } from "@reactive-resume/schema";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
} from "@reactive-resume/ui";
import { cn } from "@reactive-resume/utils";
import { AnimatePresence, Reorder, useDragControls } from "framer-motion";

import { useResumeStore } from "@/client/stores/resume";

type CustomFieldProps = {
  field: ICustomField;
  onChange: (field: ICustomField) => void;
  onRemove: (id: string) => void;
};

export const CustomField = ({ field, onChange, onRemove }: CustomFieldProps) => {
  const controls = useDragControls();

  const handleChange = (key: "icon" | "name" | "value", value: string) => {
    onChange({ ...field, [key]: value });
  };

  return (
    <Reorder.Item
      value={field}
      dragListener={false}
      dragControls={controls}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <div className="flex items-end justify-between">
        <Button
          size="icon"
          variant="ghost"
          className="shrink-0"
          onPointerDown={(event) => {
            controls.start(event);
          }}
        >
          <DotsSixVertical />
        </Button>

        <Popover>
          <Tooltip content={t`Icon`}>
            <PopoverTrigger asChild>
              <Button size="icon" variant="ghost" className="shrink-0">
                {field.icon ? <i className={cn(`ph ph-${field.icon}`)} /> : <Envelope />}
              </Button>
            </PopoverTrigger>
          </Tooltip>
          <PopoverContent side="bottom" align="start" className="flex flex-col gap-y-1.5 p-1.5">
            <Input
              value={field.icon}
              placeholder={t`Enter Phosphor Icon`}
              onChange={(event) => {
                onChange({ ...field, icon: event.target.value });
              }}
            />

            <p className="text-xs opacity-80">
              <Trans>
                Visit{" "}
                <a
                  href="https://phosphoricons.com/"
                  target="_blank"
                  className="underline"
                  rel="noopener noreferrer nofollow"
                >
                  Phosphor Icons
                </a>{" "}
                for a list of available icons
              </Trans>
            </p>
          </PopoverContent>
        </Popover>

        <Input
          className="mx-2"
          placeholder={t`Name`}
          value={field.name}
          onChange={(event) => {
            handleChange("name", event.target.value);
          }}
        />

        <Input
          className="mx-2"
          placeholder={t`Value`}
          value={field.value}
          onChange={(event) => {
            handleChange("value", event.target.value);
          }}
        />

        <Button
          size="icon"
          variant="ghost"
          className="shrink-0"
          onClick={() => {
            onRemove(field.id);
          }}
        >
          <X />
        </Button>
      </div>
    </Reorder.Item>
  );
};

type Props = {
  className?: string;
};

export const CustomFieldsSection = ({ className }: Props) => {
  const setValue = useResumeStore((state) => state.setValue);
  const customFields = useResumeStore((state) => state.resume.data.basics.customFields);

  const onAddCustomField = () => {
    setValue("basics.customFields", [
      ...customFields,
      { id: createId(), icon: "envelope", name: "", value: "" },
    ]);
  };

  const onChangeCustomField = (field: ICustomField) => {
    const index = customFields.findIndex((item) => item.id === field.id);
    const newCustomFields = JSON.parse(JSON.stringify(customFields));
    newCustomFields[index] = field;

    setValue("basics.customFields", newCustomFields);
  };

  const onReorderCustomFields = (values: ICustomField[]) => {
    setValue("basics.customFields", values);
  };

  const onRemoveCustomField = (id: string) => {
    setValue(
      "basics.customFields",
      customFields.filter((field) => field.id !== id),
    );
  };

  return (
    <div className={cn("space-y-4", className)}>
      <AnimatePresence>
        <Reorder.Group
          axis="y"
          className="space-y-4"
          values={customFields}
          onReorder={onReorderCustomFields}
        >
          {customFields.map((field) => (
            <CustomField
              key={field.id}
              field={field}
              onChange={onChangeCustomField}
              onRemove={onRemoveCustomField}
            />
          ))}
        </Reorder.Group>
      </AnimatePresence>

      <Button variant="link" onClick={onAddCustomField}>
        <Plus className="mr-2" />
        <span>{t`Add a custom field`}</span>
      </Button>
    </div>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/left/sections/picture/options.tsx
================================================
import { t } from "@lingui/macro";
import type { AspectRatio } from "@reactive-resume/ui";
import { Checkbox, Input, Label, ToggleGroup, ToggleGroupItem, Tooltip } from "@reactive-resume/ui";
import { useMemo } from "react";

import { useResumeStore } from "@/client/stores/resume";

// Aspect Ratio Helpers
const stringToRatioMap = {
  square: 1,
  portrait: 0.75,
  horizontal: 1.33,
} as const;

const ratioToStringMap = {
  "1": "square",
  "0.75": "portrait",
  "1.33": "horizontal",
} as const;

type AspectRatio = keyof typeof stringToRatioMap;

// Border Radius Helpers
const stringToBorderRadiusMap = {
  square: 0,
  rounded: 6,
  circle: 9999,
};

const borderRadiusToStringMap = {
  "0": "square",
  "6": "rounded",
  "9999": "circle",
};

type BorderRadius = keyof typeof stringToBorderRadiusMap;

export const PictureOptions = () => {
  const setValue = useResumeStore((state) => state.setValue);
  const picture = useResumeStore((state) => state.resume.data.basics.picture);

  const aspectRatio = useMemo(() => {
    const ratio = picture.aspectRatio.toString() as keyof typeof ratioToStringMap;
    return ratioToStringMap[ratio];
  }, [picture.aspectRatio]);

  const onAspectRatioChange = (value: string) => {
    if (!value) return;
    setValue("basics.picture.aspectRatio", stringToRatioMap[value as AspectRatio]);
  };

  const borderRadius = useMemo(() => {
    const radius = picture.borderRadius.toString() as keyof typeof borderRadiusToStringMap;
    return borderRadiusToStringMap[radius];
  }, [picture.borderRadius]);

  const onBorderRadiusChange = (value: string) => {
    if (!value) return;
    setValue("basics.picture.borderRadius", stringToBorderRadiusMap[value as BorderRadius]);
  };

  return (
    <div className="flex flex-col gap-y-5">
      <div className="grid grid-cols-3 items-center gap-x-6">
        <Label htmlFor="picture.size">{t`Size (in px)`}</Label>
        <Input
          type="number"
          id="picture.size"
          placeholder="128"
          value={picture.size}
          className="col-span-2"
          onChange={(event) => {
            setValue("basics.picture.size", event.target.valueAsNumber);
          }}
        />
      </div>

      <div className="grid grid-cols-3 items-center gap-x-6">
        <Label htmlFor="picture.aspectRatio">{t`Aspect Ratio`}</Label>
        <div className="col-span-2 flex items-center justify-between">
          <ToggleGroup
            type="single"
            value={aspectRatio}
            className="flex items-center justify-center"
            onValueChange={onAspectRatioChange}
          >
            <Tooltip content={t`Square`}>
              <ToggleGroupItem value="square">
                <div className="size-3 border border-foreground" />
              </ToggleGroupItem>
            </Tooltip>

            <Tooltip content={t`Horizontal`}>
              <ToggleGroupItem value="horizontal">
                <div className="h-2 w-3 border border-foreground" />
              </ToggleGroupItem>
            </Tooltip>

            <Tooltip content={t`Portrait`}>
              <ToggleGroupItem value="portrait">
                <div className="h-3 w-2 border border-foreground" />
              </ToggleGroupItem>
            </Tooltip>
          </ToggleGroup>

          <Input
            min={0.1}
            max={2}
            step={0.05}
            type="number"
            className="w-[60px]"
            id="picture.aspectRatio"
            value={picture.aspectRatio}
            onChange={(event) => {
              if (!event.target.valueAsNumber) return;
              if (Number.isNaN(event.target.valueAsNumber)) return;
              setValue("basics.picture.aspectRatio", event.target.valueAsNumber);
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 items-center gap-x-6">
        <Label htmlFor="picture.borderRadius">{t`Border Radius`}</Label>
        <div className="col-span-2 flex items-center justify-between">
          <ToggleGroup
            type="single"
            value={borderRadius}
            className="flex items-center justify-center"
            onValueChange={onBorderRadiusChange}
          >
            <Tooltip content={t`Square`}>
              <ToggleGroupItem value="square">
                <div className="size-3 border border-foreground" />
              </ToggleGroupItem>
            </Tooltip>

            <Tooltip content={t`Rounded`}>
              <ToggleGroupItem value="rounded">
                <div className="size-3 rounded-sm border border-foreground" />
              </ToggleGroupItem>
            </Tooltip>

            <Tooltip content={t`Circle`}>
              <ToggleGroupItem value="circle">
                <div className="size-3 rounded-full border border-foreground" />
              </ToggleGroupItem>
            </Tooltip>
          </ToggleGroup>

          <Input
            min={0}
            step={2}
            max={9999}
            type="number"
            className="w-[60px]"
            id="picture.borderRadius"
            value={picture.borderRadius}
            onChange={(event) => {
              setValue("basics.picture.borderRadius", event.target.valueAsNumber);
            }}
          />
        </div>
      </div>

      <div>
        <div className="grid grid-cols-3 items-start gap-x-6">
          <div>
            <Label>{t`Effects`}</Label>
          </div>
          <div className="col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="picture.effects.hidden"
                checked={picture.effects.hidden}
                onCheckedChange={(checked) => {
                  setValue("basics.picture.effects.hidden", checked);
                }}
              />
              <Label htmlFor="picture.effects.hidden">{t`Hidden`}</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="picture.effects.border"
                checked={picture.effects.border}
                onCheckedChange={(checked) => {
                  setValue("basics.picture.effects.border", checked);
                }}
              />
              <Label htmlFor="picture.effects.border">{t`Border`}</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="picture.effects.grayscale"
                checked={picture.effects.grayscale}
                onCheckedChange={(checked) => {
                  setValue("basics.picture.effects.grayscale", checked);
                }}
              />
              <Label htmlFor="picture.effects.grayscale">{t`Grayscale`}</Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/left/sections/picture/section.tsx
================================================
import { t } from "@lingui/macro";
import { Aperture, Trash, UploadSimple } from "@phosphor-icons/react";
import {
  Avatar,
  AvatarImage,
  buttonVariants,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@reactive-resume/ui";
import { cn } from "@reactive-resume/utils";
import { motion } from "framer-motion";
import { useMemo, useRef } from "react";
import { z } from "zod";

import { useUploadImage } from "@/client/services/storage";
import { useResumeStore } from "@/client/stores/resume";

import { PictureOptions } from "./options";

export const PictureSection = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { uploadImage } = useUploadImage();

  const setValue = useResumeStore((state) => state.setValue);
  const picture = useResumeStore((state) => state.resume.data.basics.picture);

  const isValidUrl = useMemo(() => z.string().url().safeParse(picture.url).success, [picture.url]);

  const onSelectImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const response = await uploadImage(file);
      const url = response.data;

      setValue("basics.picture.url", url);
    }
  };

  const onAvatarClick = () => {
    if (isValidUrl) {
      setValue("basics.picture.url", "");
    } else {
      inputRef.current?.click();
    }
  };

  return (
    <div className="flex items-center gap-x-4">
      <div className="group relative cursor-pointer" onClick={onAvatarClick}>
        <Avatar className="size-14 bg-secondary">
          <AvatarImage src={picture.url} />
        </Avatar>

        {isValidUrl ? (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-full bg-background/30 opacity-0 transition-opacity group-hover:opacity-100">
            <Trash size={16} weight="bold" />
          </div>
        ) : (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-full bg-background/30 opacity-0 transition-opacity group-hover:opacity-100">
            <UploadSimple size={16} weight="bold" />
          </div>
        )}
      </div>

      <div className="flex w-full flex-col gap-y-1.5">
        <Label htmlFor="basics.picture.url">{t`Picture`}</Label>
        <div className="flex items-center gap-x-2">
          <input ref={inputRef} hidden type="file" onChange={onSelectImage} />

          <Input
            id="basics.picture.url"
            placeholder="https://..."
            value={picture.url}
            onChange={(event) => {
              setValue("basics.picture.url", event.target.value);
            }}
          />

          {isValidUrl && (
            <Popover>
              <PopoverTrigger asChild>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={cn(buttonVariants({ size: "icon", variant: "ghost" }))}
                >
                  <Aperture />
                </motion.button>
              </PopoverTrigger>
              <PopoverContent className="w-[360px]">
                <PictureOptions />
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/left/sections/shared/section-base.tsx
================================================
import type { DragEndEvent } from "@dnd-kit/core";
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { t } from "@lingui/macro";
import { Plus } from "@phosphor-icons/react";
import type { SectionItem, SectionKey, SectionWithItem } from "@reactive-resume/schema";
import { Button } from "@reactive-resume/ui";
import { cn } from "@reactive-resume/utils";
import { AnimatePresence, motion } from "framer-motion";
import get from "lodash.get";

import { useDialog } from "@/client/stores/dialog";
import { useResumeStore } from "@/client/stores/resume";

import { SectionIcon } from "./section-icon";
import { SectionListItem } from "./section-list-item";
import { SectionOptions } from "./section-options";

type Props<T extends SectionItem> = {
  id: SectionKey;
  title: (item: T) => string;
  description?: (item: T) => string | undefined;
};

export const SectionBase = <T extends SectionItem>({ id, title, description }: Props<T>) => {
  const { open } = useDialog(id);

  const setValue = useResumeStore((state) => state.setValue);
  const section = useResumeStore((state) =>
    get(state.resume.data.sections, id),
  ) as SectionWithItem<T>;

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!section) return null;

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      const oldIndex = section.items.findIndex((item) => item.id === active.id);
      const newIndex = section.items.findIndex((item) => item.id === over.id);

      const sortedList = arrayMove(section.items as T[], oldIndex, newIndex);
      setValue(`sections.${id}.items`, sortedList);
    }
  };

  const onCreate = () => {
    open("create", { id });
  };

  const onUpdate = (item: T) => {
    open("update", { id, item });
  };

  const onDuplicate = (item: T) => {
    open("duplicate", { id, item });
  };

  const onDelete = (item: T) => {
    open("delete", { id, item });
  };

  const onToggleVisibility = (index: number) => {
    const visible = get(section, `items[${index}].visible`, true);
    setValue(`sections.${id}.items[${index}].visible`, !visible);
  };

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid gap-y-6"
    >
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <SectionIcon id={id} size={18} />
          <h2 className="line-clamp-1 text-2xl font-bold lg:text-3xl">{section.name}</h2>
        </div>

        <div className="flex items-center gap-x-2">
          <SectionOptions id={id} />
        </div>
      </header>

      <main className={cn("grid transition-opacity", !section.visible && "opacity-50")}>
        {section.items.length === 0 && (
          <Button
            variant="outline"
            className="gap-x-2 border-dashed py-6 leading-relaxed hover:bg-secondary-accent"
            onClick={onCreate}
          >
            <Plus size={14} />
            <span className="font-medium">
              {t({
                message: "Add a new item",
                context: "For example, add a new work experience, or add a new profile.",
              })}
            </span>
          </Button>
        )}

        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          modifiers={[restrictToParentElement]}
          onDragEnd={onDragEnd}
        >
          <SortableContext items={section.items} strategy={verticalListSortingStrategy}>
            <AnimatePresence>
              {section.items.map((item, index) => (
                <SectionListItem
                  key={item.id}
                  id={item.id}
                  visible={item.visible}
                  title={title(item as T)}
                  description={description?.(item as T)}
                  onUpdate={() => {
                    onUpdate(item as T);
                  }}
                  onDelete={() => {
                    onDelete(item as T);
                  }}
                  onDuplicate={() => {
                    onDuplicate(item as T);
                  }}
                  onToggleVisibility={() => {
                    onToggleVisibility(index);
                  }}
                />
              ))}
            </AnimatePresence>
          </SortableContext>
        </DndContext>
      </main>

      {section.items.length > 0 && (
        <footer className="flex items-center justify-end">
          <Button
            variant="outline"
            className="ml-auto gap-x-2 text-xs lg:text-sm"
            onClick={onCreate}
          >
            <Plus />
            <span>
              {t({
                message: "Add a new item",
                context: "For example, add a new work experience, or add a new profile.",
              })}
            </span>
          </Button>
        </footer>
      )}
    </motion.section>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/left/sections/shared/section-dialog.tsx
================================================
import { t } from "@lingui/macro";
import { createId } from "@paralleldrive/cuid2";
import { CopySimple, PencilSimple, Plus } from "@phosphor-icons/react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import type { SectionItem, SectionWithItem } from "@reactive-resume/schema";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Form,
  ScrollArea,
} from "@reactive-resume/ui";
import { produce } from "immer";
import get from "lodash.get";
import { useEffect } from "react";
import type { UseFormReturn } from "react-hook-form";

import type { DialogName } from "@/client/stores/dialog";
import { useDialog } from "@/client/stores/dialog";
import { useResumeStore } from "@/client/stores/resume";

type Props<T extends SectionItem> = {
  id: DialogName;
  form: UseFormReturn<T>;
  defaultValues: T;
  pendingKeyword?: string;
  children: React.ReactNode;
};

export const SectionDialog = <T extends SectionItem>({
  id,
  form,
  defaultValues,
  pendingKeyword,
  children,
}: Props<T>) => {
  const { isOpen, mode, close, payload } = useDialog<T>(id);

  const setValue = useResumeStore((state) => state.setValue);
  const section = useResumeStore((state) => {
    return get(state.resume.data.sections, id);
  }) as SectionWithItem<T> | null;

  const isCreate = mode === "create";
  const isUpdate = mode === "update";
  const isDelete = mode === "delete";
  const isDuplicate = mode === "duplicate";

  useEffect(() => {
    if (isOpen) onReset();
  }, [isOpen, payload]);

  const onSubmit = (values: T) => {
    if (!section) return;

    if (isCreate || isDuplicate) {
      if (pendingKeyword && "keywords" in values) {
        values.keywords.push(pendingKeyword);
      }

      setValue(
        `sections.${id}.items`,
        produce(section.items, (draft: T[]): void => {
          draft.push({ ...values, id: createId() });
        }),
      );
    }

    if (isUpdate) {
      if (!payload.item?.id) return;

      if (pendingKeyword && "keywords" in values) {
        values.keywords.push(pendingKeyword);
      }

      setValue(
        `sections.${id}.items`,
        produce(section.items, (draft: T[]): void => {
          const index = draft.findIndex((item) => item.id === payload.item?.id);
          if (index === -1) return;
          draft[index] = values;
        }),
      );
    }

    if (isDelete) {
      if (!payload.item?.id) return;

      setValue(
        `sections.${id}.items`,
        produce(section.items, (draft: T[]): void => {
          const index = draft.findIndex((item) => item.id === payload.item?.id);
          if (index === -1) return;
          draft.splice(index, 1);
        }),
      );
    }

    close();
  };

  const onReset = () => {
    if (isCreate) form.reset({ ...defaultValues, id: createId() } as T);
    if (isUpdate) form.reset({ ...defaultValues, ...payload.item });
    if (isDuplicate) form.reset({ ...payload.item, id: createId() } as T);
    if (isDelete) form.reset({ ...defaultValues, ...payload.item });
  };

  if (isDelete) {
    return (
      <AlertDialog open={isOpen} onOpenChange={close}>
        <AlertDialogContent className="z-50">
          <Form {...form}>
            <form>
              <AlertDialogHeader>
                <AlertDialogTitle>{t`Are you sure you want to delete this item?`}</AlertDialogTitle>
                <AlertDialogDescription>
                  {t`This action can be reverted by clicking on the undo button in the floating toolbar.`}
                </AlertDialogDescription>
              </AlertDialogHeader>

              <AlertDialogFooter>
                <AlertDialogCancel>{t`Cancel`}</AlertDialogCancel>
                <AlertDialogAction variant="error" onClick={form.handleSubmit(onSubmit)}>
                  {t`Delete`}
                </AlertDialogAction>
              </AlertDialogFooter>
            </form>
          </Form>
        </AlertDialogContent>
      </AlertDialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="z-50">
        <Form {...form}>
          <ScrollArea>
            <form
              className="max-h-[60vh] space-y-6 lg:max-h-fit"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <DialogHeader>
                <DialogTitle>
                  <div className="flex items-center space-x-2.5">
                    {isCreate && <Plus />}
                    {isUpdate && <PencilSimple />}
                    {isDuplicate && <CopySimple />}
                    <h2>
                      {isCreate && t`Create a new item`}
                      {isUpdate && t`Update an existing item`}
                      {isDuplicate && t`Duplicate an existing item`}
                    </h2>
                  </div>
                </DialogTitle>

                <VisuallyHidden>
                  <DialogDescription />
                </VisuallyHidden>
              </DialogHeader>

              {children}

              <DialogFooter>
                <Button type="submit">
                  {isCreate && t`Create`}
                  {isUpdate && t`Save Changes`}
                  {isDuplicate && t`Duplicate`}
                </Button>
              </DialogFooter>
            </form>
          </ScrollArea>
        </Form>
      </DialogContent>
    </Dialog>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/left/sections/shared/section-icon.tsx
================================================
import type { IconProps } from "@phosphor-icons/react";
import {
  Article,
  Books,
  Briefcase,
  Certificate,
  CompassTool,
  GameController,
  GraduationCap,
  HandHeart,
  Medal,
  PuzzlePiece,
  ShareNetwork,
  Translate,
  User,
  Users,
} from "@phosphor-icons/react";
import type { SectionKey, SectionWithItem } from "@reactive-resume/schema";
import { defaultSection } from "@reactive-resume/schema";
import type { ButtonProps } from "@reactive-resume/ui";
import { Button, Tooltip } from "@reactive-resume/ui";
import get from "lodash.get";

import { useResumeStore } from "@/client/stores/resume";

const getSectionIcon = (id: SectionKey, props: IconProps = {}) => {
  switch (id) {
    // Left Sidebar
    case "basics": {
      return <User size={18} {...props} />;
    }
    case "summary": {
      return <Article size={18} {...props} />;
    }
    case "awards": {
      return <Medal size={18} {...props} />;
    }
    case "profiles": {
      return <ShareNetwork size={18} {...props} />;
    }
    case "experience": {
      return <Briefcase size={18} {...props} />;
    }
    case "education": {
      return <GraduationCap size={18} {...props} />;
    }
    case "certifications": {
      return <Certificate size={18} {...props} />;
    }
    case "interests": {
      return <GameController size={18} {...props} />;
    }
    case "languages": {
      return <Translate size={18} {...props} />;
    }
    case "volunteer": {
      return <HandHeart size={18} {...props} />;
    }
    case "projects": {
      return <PuzzlePiece size={18} {...props} />;
    }
    case "publications": {
      return <Books size={18} {...props} />;
    }
    case "skills": {
      return <CompassTool size={18} {...props} />;
    }
    case "references": {
      return <Users size={18} {...props} />;
    }

    default: {
      return null;
    }
  }
};

type SectionIconProps = Omit<ButtonProps, "size"> & {
  id: SectionKey;
  name?: string;
  size?: number;
  icon?: React.ReactNode;
};

export const SectionIcon = ({ id, name, icon, size = 14, ...props }: SectionIconProps) => {
  const section = useResumeStore((state) =>
    get(state.resume.data.sections, id, defaultSection),
  ) as SectionWithItem;

  return (
    <Tooltip side="right" content={name ?? section.name}>
      <Button size="icon" variant="ghost" className="size-8 rounded-full" {...props}>
        {icon ?? getSectionIcon(id, { size })}
      </Button>
    </Tooltip>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/left/sections/shared/section-list-item.tsx
================================================
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { t } from "@lingui/macro";
import { CopySimple, DotsSixVertical, PencilSimple, TrashSimple } from "@phosphor-icons/react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@reactive-resume/ui";
import { cn } from "@reactive-resume/utils";
import { motion } from "framer-motion";

export type SectionListItemProps = {
  id: string;
  title: string;
  visible?: boolean;
  description?: string;

  // Callbacks
  onUpdate?: () => void;
  onDuplicate?: () => void;
  onDelete?: () => void;
  onToggleVisibility?: () => void;
};

export const SectionListItem = ({
  id,
  title,
  description,
  visible = true,
  onUpdate,
  onDuplicate,
  onDelete,
  onToggleVisibility,
}: SectionListItemProps) => {
  const { setNodeRef, transform, transition, attributes, listeners, isDragging } = useSortable({
    id,
  });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    opacity: isDragging ? 0.5 : undefined,
    zIndex: isDragging ? 100 : undefined,
    transition,
  };

  return (
    <motion.section
      ref={setNodeRef}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="border-x border-t bg-secondary/10 first-of-type:rounded-t last-of-type:rounded-b last-of-type:border-b"
    >
      <div style={style} className="flex transition-opacity">
        {/* Drag Handle */}
        <div
          {...listeners}
          {...attributes}
          className={cn(
            "flex w-5 cursor-move items-center justify-center",
            !isDragging && "hover:bg-secondary",
          )}
        >
          <DotsSixVertical weight="bold" size={12} />
        </div>

        {/* List Item */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div
              className={cn(
                "flex-1 cursor-context-menu p-4 hover:bg-secondary-accent",
                !visible && "opacity-50",
              )}
              onClick={onUpdate}
            >
              <h4 className="font-medium leading-relaxed">{title}</h4>
              {description && <p className="text-xs leading-relaxed opacity-50">{description}</p>}
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuCheckboxItem checked={visible} onCheckedChange={onToggleVisibility}>
              <span className="-ml-0.5">{t`Visible`}</span>
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={onUpdate}>
              <PencilSimple size={14} />
              <span className="ml-2">{t`Edit`}</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onDuplicate}>
              <CopySimple size={14} />
              <span className="ml-2">{t`Copy`}</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-error" onClick={onDelete}>
              <TrashSimple size={14} />
              <span className="ml-2">{t`Remove`}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </motion.section>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/left/sections/shared/section-options.tsx
================================================
import { plural, t } from "@lingui/macro";
import {
  ArrowCounterClockwise,
  Broom,
  Columns,
  Eye,
  EyeSlash,
  List,
  PencilSimple,
  Plus,
  TrashSimple,
} from "@phosphor-icons/react";
import type { SectionKey, SectionWithItem } from "@reactive-resume/schema";
import { defaultSections } from "@reactive-resume/schema";
import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Input,
} from "@reactive-resume/ui";
import get from "lodash.get";
import { useMemo } from "react";

import { useDialog } from "@/client/stores/dialog";
import { useResumeStore } from "@/client/stores/resume";

type Props = { id: SectionKey };

export const SectionOptions = ({ id }: Props) => {
  const { open } = useDialog(id);

  const setValue = useResumeStore((state) => state.setValue);
  const removeSection = useResumeStore((state) => state.removeSection);

  const originalName = get(defaultSections, `${id}.name`, "") as SectionWithItem;
  const section = useResumeStore((state) => get(state.resume.data.sections, id)) as SectionWithItem;

  const hasItems = useMemo(() => "items" in section, [section]);
  const isCustomSection = useMemo(() => id.startsWith("custom"), [id]);

  const onCreate = () => {
    open("create", { id });
  };

  const toggleSeperateLinks = (checked: boolean) => {
    setValue(`sections.${id}.separateLinks`, checked);
  };

  const toggleVisibility = () => {
    setValue(`sections.${id}.visible`, !section.visible);
  };

  const onResetName = () => {
    setValue(`sections.${id}.name`, originalName);
  };

  const onChangeColumns = (value: string) => {
    setValue(`sections.${id}.columns`, Number(value));
  };

  const onResetItems = () => {
    setValue(`sections.${id}.items`, []);
  };

  const onRemove = () => {
    removeSection(id);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <List weight="bold" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-4 w-48">
        {hasItems && (
          <>
            <DropdownMenuItem onClick={onCreate}>
              <Plus />
              <span className="ml-2">{t`Add a new item`}</span>
            </DropdownMenuItem>
            <DropdownMenuCheckboxItem
              checked={section.separateLinks}
              onCheckedChange={toggleSeperateLinks}
            >
              <span className="ml-0">{t`Separate Links`}</span>
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
          </>
        )}

        <DropdownMenuGroup>
          <DropdownMenuItem onClick={toggleVisibility}>
            {section.visible ? <Eye /> : <EyeSlash />}
            <span className="ml-2">{section.visible ? t`Hide` : t`Show`}</span>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <PencilSimple />
              <span className="ml-2">{t`Rename`}</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <div className="relative col-span-2">
                <Input
                  id={`sections.${id}.name`}
                  value={section.name}
                  onChange={(event) => {
                    setValue(`sections.${id}.name`, event.target.value);
                  }}
                />
                <Button
                  size="icon"
                  variant="link"
                  className="absolute inset-y-0 right-0"
                  onClick={onResetName}
                >
                  <ArrowCounterClockwise />
                </Button>
              </div>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Columns />
              <span className="ml-2">{t`Columns`}</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuRadioGroup value={`${section.columns}`} onValueChange={onChangeColumns}>
                {Array.from({ length: 5 }, (_, i) => i + 1).map((value) => (
                  <DropdownMenuRadioItem key={value} value={`${value}`}>
                    {value} {plural(value, { one: "Column", other: "Columns" })}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled={!hasItems} onClick={onResetItems}>
          <Broom />
          <span className="ml-2">{t`Reset`}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-error" disabled={!isCustomSection} onClick={onRemove}>
          <TrashSimple />
          <span className="ml-2">{t`Remove`}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/left/sections/shared/url-input.tsx
================================================
import { t } from "@lingui/macro";
import { Tag } from "@phosphor-icons/react";
import type { URL } from "@reactive-resume/schema";
import { urlSchema } from "@reactive-resume/schema";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
} from "@reactive-resume/ui";
import { forwardRef, useMemo } from "react";

type Props = {
  id?: string;
  value: URL;
  placeholder?: string;
  onChange: (value: URL) => void;
};

export const URLInput = forwardRef<HTMLInputElement, Props>(
  ({ id, value, placeholder, onChange }, ref) => {
    const hasError = useMemo(() => !urlSchema.safeParse(value).success, [value]);

    return (
      <>
        <div className="flex gap-x-1">
          <Input
            ref={ref}
            id={id}
            value={value.href}
            className="flex-1"
            hasError={hasError}
            placeholder={placeholder}
            onChange={(event) => {
              onChange({ ...value, href: event.target.value });
            }}
          />

          <Popover>
            <Tooltip content={t`Label`}>
              <PopoverTrigger asChild>
                <Button size="icon" variant="ghost">
                  <Tag />
                </Button>
              </PopoverTrigger>
            </Tooltip>
            <PopoverContent className="p-1.5">
              <Input
                value={value.label}
                placeholder={t`Label`}
                onChange={(event) => {
                  onChange({ ...value, label: event.target.value });
                }}
              />
            </PopoverContent>
          </Popover>
        </div>

        {hasError && <small className="opacity-75">{t`URL must start with https://`}</small>}
      </>
    );
  },
);


================================================
File: apps/client/src/pages/builder/sidebars/right/index.tsx
================================================
import { t } from "@lingui/macro";
import { ScrollArea, Separator } from "@reactive-resume/ui";
import { useRef } from "react";

import { Copyright } from "@/client/components/copyright";
import { ThemeSwitch } from "@/client/components/theme-switch";

import { CssSection } from "./sections/css";
import { ExportSection } from "./sections/export";
import { InformationSection } from "./sections/information";
import { LayoutSection } from "./sections/layout";
import { NotesSection } from "./sections/notes";
import { PageSection } from "./sections/page";
import { SharingSection } from "./sections/sharing";
import { StatisticsSection } from "./sections/statistics";
import { TemplateSection } from "./sections/template";
import { ThemeSection } from "./sections/theme";
import { TypographySection } from "./sections/typography";
import { SectionIcon } from "./shared/section-icon";

export const RightSidebar = () => {
  const containterRef = useRef<HTMLDivElement | null>(null);

  const scrollIntoView = (selector: string) => {
    const section = containterRef.current?.querySelector(selector);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex bg-secondary-accent/30">
      <ScrollArea orientation="vertical" className="h-screen flex-1 pb-16 lg:pb-0">
        <div ref={containterRef} className="grid gap-y-6 p-6 @container/right">
          <TemplateSection />
          <Separator />
          <LayoutSection />
          <Separator />
          <TypographySection />
          <Separator />
          <ThemeSection />
          <Separator />
          <CssSection />
          <Separator />
          <PageSection />
          <Separator />
          <SharingSection />
          <Separator />
          <StatisticsSection />
          <Separator />
          <ExportSection />
          <Separator />
          <NotesSection />
          <Separator />
          <InformationSection />
          <Separator />
          <Copyright className="text-center" />
        </div>
      </ScrollArea>

      <div className="hidden basis-12 flex-col items-center justify-between bg-secondary-accent/30 py-4 sm:flex">
        <div />

        <div className="flex flex-col items-center justify-center gap-y-2">
          <SectionIcon
            id="template"
            name={t`Template`}
            onClick={() => {
              scrollIntoView("#template");
            }}
          />
          <SectionIcon
            id="layout"
            name={t`Layout`}
            onClick={() => {
              scrollIntoView("#layout");
            }}
          />
          <SectionIcon
            id="typography"
            name={t`Typography`}
            onClick={() => {
              scrollIntoView("#typography");
            }}
          />
          <SectionIcon
            id="theme"
            name={t`Theme`}
            onClick={() => {
              scrollIntoView("#theme");
            }}
          />
          <SectionIcon
            id="css"
            name={t`Custom CSS`}
            onClick={() => {
              scrollIntoView("#css");
            }}
          />
          <SectionIcon
            id="page"
            name={t`Page`}
            onClick={() => {
              scrollIntoView("#page");
            }}
          />
          <SectionIcon
            id="sharing"
            name={t`Sharing`}
            onClick={() => {
              scrollIntoView("#sharing");
            }}
          />
          <SectionIcon
            id="statistics"
            name={t`Statistics`}
            onClick={() => {
              scrollIntoView("#statistics");
            }}
          />
          <SectionIcon
            id="export"
            name={t`Export`}
            onClick={() => {
              scrollIntoView("#export");
            }}
          />
          <SectionIcon
            id="notes"
            name={t`Notes`}
            onClick={() => {
              scrollIntoView("#notes");
            }}
          />
          <SectionIcon
            id="information"
            name={t`Information`}
            onClick={() => {
              scrollIntoView("#information");
            }}
          />
        </div>

        <ThemeSwitch size={14} />
      </div>
    </div>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/right/sections/css.tsx
================================================
import { t } from "@lingui/macro";
import { useTheme } from "@reactive-resume/hooks";
import { Label, Switch } from "@reactive-resume/ui";
import Prism from "prismjs";
import { Helmet } from "react-helmet-async";
import CodeEditor from "react-simple-code-editor";

import { useResumeStore } from "@/client/stores/resume";

import { SectionIcon } from "../shared/section-icon";

export const CssSection = () => {
  const { isDarkMode } = useTheme();

  const setValue = useResumeStore((state) => state.setValue);
  const css = useResumeStore((state) => state.resume.data.metadata.css);

  return (
    <section id="css" className="grid gap-y-6">
      <Helmet>
        {isDarkMode && <link rel="stylesheet" href="/styles/prism-dark.css" />}
        {!isDarkMode && <link rel="stylesheet" href="/styles/prism-light.css" />}
      </Helmet>

      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <SectionIcon id="css" size={18} name={t`Custom CSS`} />
          <h2 className="line-clamp-1 text-2xl font-bold lg:text-3xl">{t`Custom CSS`}</h2>
        </div>
      </header>

      <main className="space-y-4">
        <div className="flex items-center gap-x-4">
          <Switch
            id="metadata.css.visible"
            checked={css.visible}
            onCheckedChange={(checked) => {
              setValue("metadata.css.visible", checked);
            }}
          />
          <Label htmlFor="metadata.css.visible">{t`Apply Custom CSS`}</Label>
        </div>

        <div className="rounded border p-4">
          <CodeEditor
            tabSize={4}
            value={css.value}
            className="language-css font-mono"
            highlight={(code) => Prism.highlight(code, Prism.languages.css, "css")}
            onValueChange={(value) => {
              setValue("metadata.css.value", value);
            }}
          />
        </div>
      </main>
    </section>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/right/sections/export.tsx
================================================
import { t } from "@lingui/macro";
import { CircleNotch, FileJs, FilePdf } from "@phosphor-icons/react";
import { buttonVariants, Card, CardContent, CardDescription, CardTitle } from "@reactive-resume/ui";
import { cn } from "@reactive-resume/utils";
import { saveAs } from "file-saver";

import { usePrintResume } from "@/client/services/resume/print";
import { useResumeStore } from "@/client/stores/resume";

import { SectionIcon } from "../shared/section-icon";

const onJsonExport = () => {
  const { resume } = useResumeStore.getState();
  const filename = `reactive_resume-${resume.id}.json`;
  const resumeJSON = JSON.stringify(resume.data, null, 2);

  saveAs(new Blob([resumeJSON], { type: "application/json" }), filename);
};

const openInNewTab = (url: string) => {
  const win = window.open(url, "_blank");
  if (win) win.focus();
};

export const ExportSection = () => {
  const { printResume, loading } = usePrintResume();

  const onPdfExport = async () => {
    const { resume } = useResumeStore.getState();
    const { url } = await printResume({ id: resume.id });

    openInNewTab(url);
  };

  return (
    <section id="export" className="grid gap-y-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <SectionIcon id="export" size={18} name={t`Export`} />
          <h2 className="line-clamp-1 text-2xl font-bold lg:text-3xl">{t`Export`}</h2>
        </div>
      </header>

      <main className="grid gap-y-4">
        <Card
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "h-auto cursor-pointer flex-row items-center gap-x-5 px-4 pb-3 pt-1",
          )}
          onClick={onJsonExport}
        >
          <FileJs size={22} />
          <CardContent className="flex-1">
            <CardTitle className="text-sm">{t`JSON`}</CardTitle>
            <CardDescription className="font-normal">
              {t`Download a JSON snapshot of your resume. This file can be used to import your resume in the future, or can even be shared with others to collaborate.`}
            </CardDescription>
          </CardContent>
        </Card>

        <Card
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "h-auto cursor-pointer flex-row items-center gap-x-5 px-4 pb-3 pt-1",
            loading && "pointer-events-none cursor-progress opacity-75",
          )}
          onClick={onPdfExport}
        >
          {loading ? <CircleNotch size={22} className="animate-spin" /> : <FilePdf size={22} />}

          <CardContent className="flex-1">
            <CardTitle className="text-sm">{t`PDF`}</CardTitle>
            <CardDescription className="font-normal">
              {t`Download a PDF of your resume. This file can be used to print your resume, send it to recruiters, or upload on job portals.`}
            </CardDescription>
          </CardContent>
        </Card>
      </main>
    </section>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/right/sections/information.tsx
================================================
import { t, Trans } from "@lingui/macro";
import { Book, EnvelopeSimpleOpen, GithubLogo, HandHeart } from "@phosphor-icons/react";
import {
  buttonVariants,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@reactive-resume/ui";
import { cn } from "@reactive-resume/utils";

import { SectionIcon } from "../shared/section-icon";

const DonateCard = () => (
  <Card className="space-y-4 bg-info text-info-foreground">
    <CardContent className="space-y-2">
      <CardTitle>{t`Support the app by donating what you can!`}</CardTitle>
      <CardDescription className="space-y-2">
        <Trans>
          <p>
            I built Reactive Resume mostly by myself during my spare time, with a lot of help from
            other great open-source contributors.
          </p>
          <p>
            If you like the app and want to support keeping it free forever, please donate whatever
            you can afford to give.
          </p>
        </Trans>
      </CardDescription>
    </CardContent>
    <CardFooter>
      <a
        href="https://opencollective.com/reactive-resume"
        className={cn(buttonVariants({ size: "sm" }))}
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        <HandHeart size={14} weight="bold" className="mr-2" />
        <span className="line-clamp-1">{t`Donate to Reactive Resume`}</span>
      </a>
    </CardFooter>
  </Card>
);

const IssuesCard = () => (
  <Card className="space-y-4">
    <CardContent className="space-y-2">
      <CardTitle>{t`Found a bug, or have an idea for a new feature?`}</CardTitle>
      <CardDescription className="space-y-2">
        <Trans>
          <p>I'm sure the app is not perfect, but I'd like for it to be.</p>
          <p>
            If you faced any issues while creating your resume, or have an idea that would help you
            and other users in creating your resume more easily, drop an issue on the repository or
            send me an email about it.
          </p>
        </Trans>
      </CardDescription>
    </CardContent>
    <CardFooter className="space-x-4">
      <a
        href="https://github.com/AmruthPillai/Reactive-Resume/issues/new/choose"
        className={cn(buttonVariants({ size: "sm" }))}
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        <GithubLogo size={14} weight="bold" className="mr-2" />
        <span className="line-clamp-1">{t`Raise an issue`}</span>
      </a>

      <a className={cn(buttonVariants({ size: "sm" }))} href="mailto:hello@amruthpillai.com">
        <EnvelopeSimpleOpen size={14} weight="bold" className="mr-2" />
        <span className="line-clamp-1">{t`Send me a message`}</span>
      </a>
    </CardFooter>
  </Card>
);

const DocumentationCard = () => (
  <Card className="space-y-4">
    <CardContent className="space-y-2">
      <CardTitle>{t`Don't know where to begin? Hit the docs!`}</CardTitle>
      <CardDescription className="space-y-2">
        <Trans>
          <p>
            The community has spent a lot of time writing the documentation for Reactive Resume, and
            I'm sure it will help you get started with the app.
          </p>
          <p>
            There are also a lot of examples to help you get started, and features that you might
            not know about which could help you build your perfect resume.
          </p>
        </Trans>
      </CardDescription>
    </CardContent>
    <CardFooter className="space-x-4">
      <a
        className={cn(buttonVariants({ size: "sm" }))}
        href="https://docs.rxresu.me/"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <Book size={14} weight="bold" className="mr-2" />
        <span className="line-clamp-1">{t`Documentation`}</span>
      </a>
    </CardFooter>
  </Card>
);

export const InformationSection = () => {
  return (
    <section id="information" className="grid gap-y-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <SectionIcon id="information" size={18} name={t`Information`} />
          <h2 className="line-clamp-1 text-2xl font-bold lg:text-3xl">{t`Information`}</h2>
        </div>
      </header>

      <main className="grid gap-y-4">
        <DonateCard />
        <DocumentationCard />
        <IssuesCard />
      </main>
    </section>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/right/sections/layout.tsx
================================================
import type { DragEndEvent, DragOverEvent, DragStartEvent } from "@dnd-kit/core";
import {
  closestCenter,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { t } from "@lingui/macro";
import { ArrowCounterClockwise, DotsSixVertical, Plus, TrashSimple } from "@phosphor-icons/react";
import { defaultMetadata } from "@reactive-resume/schema";
import { Button, Portal, Tooltip } from "@reactive-resume/ui";
import type { LayoutLocator, SortablePayload } from "@reactive-resume/utils";
import { cn, moveItemInLayout, parseLayoutLocator } from "@reactive-resume/utils";
import get from "lodash.get";
import { useState } from "react";

import { useResumeStore } from "@/client/stores/resume";

import { SectionIcon } from "../shared/section-icon";

type ColumnProps = {
  id: string;
  name: string;
  items: string[];
};

const Column = ({ id, name, items }: ColumnProps) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <SortableContext id={id} items={items} strategy={verticalListSortingStrategy}>
      <div className="relative">
        <div className="absolute inset-0 w-3/4 rounded bg-secondary/50" />

        <div className="relative z-10 p-3 pb-8">
          <p className="mb-3 text-xs font-bold">{name}</p>

          <div ref={setNodeRef} className="space-y-3">
            {items.map((section) => (
              <SortableSection key={section} id={section} />
            ))}
          </div>
        </div>
      </div>
    </SortableContext>
  );
};

type SortableSectionProps = {
  id: string;
};

const SortableSection = ({ id }: SortableSectionProps) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
  });

  const style = {
    transition,
    opacity: isDragging ? 0.5 : 1,
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <Section id={id} />
    </div>
  );
};

type SectionProps = {
  id: string;
  isDragging?: boolean;
};

const Section = ({ id, isDragging = false }: SectionProps) => {
  const name = useResumeStore((state) => get(state.resume.data.sections, `${id}.name`, id));

  return (
    <div
      className={cn(
        "cursor-grab rounded bg-primary p-2 text-primary-foreground transition-colors hover:bg-primary-accent",
        isDragging && "cursor-grabbing",
      )}
    >
      <div className="flex items-center gap-x-2">
        <DotsSixVertical size={12} weight="bold" />
        <p className="flex-1 truncate text-xs font-medium">{name}</p>
      </div>
    </div>
  );
};

export const LayoutSection = () => {
  const setValue = useResumeStore((state) => state.setValue);
  const layout = useResumeStore((state) => state.resume.data.metadata.layout);

  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const onDragStart = ({ active }: DragStartEvent) => {
    setActiveId(active.id as string);
  };

  const onDragCancel = () => {
    setActiveId(null);
  };

  const onDragEvent = ({ active, over }: DragOverEvent | DragEndEvent) => {
    if (!over || !active.data.current) return;

    const currentPayload = active.data.current.sortable as SortablePayload | null;
    const current = parseLayoutLocator(currentPayload);

    if (active.id === over.id) return;

    if (!over.data.current) {
      const [page, column] = (over.id as string).split(".").map(Number);
      const target = { page, column, section: 0 } as LayoutLocator;

      const newLayout = moveItemInLayout(current, target, layout);
      setValue("metadata.layout", newLayout);

      return;
    }

    const targetPayload = over.data.current.sortable as SortablePayload | null;
    const target = parseLayoutLocator(targetPayload);

    const newLayout = moveItemInLayout(current, target, layout);
    setValue("metadata.layout", newLayout);
  };

  const onDragEnd = (event: DragEndEvent) => {
    onDragEvent(event);
    setActiveId(null);
  };

  const onAddPage = () => {
    const layoutCopy = JSON.parse(JSON.stringify(layout));

    layoutCopy.push([[], []]);

    setValue("metadata.layout", layoutCopy);
  };

  const onRemovePage = (page: number) => {
    const layoutCopy = JSON.parse(JSON.stringify(layout));

    layoutCopy[0][0].push(...layoutCopy[page][0]); // Main
    layoutCopy[0][1].push(...layoutCopy[page][1]); // Sidebar

    layoutCopy.splice(page, 1);

    setValue("metadata.layout", layoutCopy);
  };

  const onResetLayout = () => {
    const layoutCopy = JSON.parse(JSON.stringify(defaultMetadata.layout));

    // Loop through all pages and columns, and get any sections that start with "custom."
    // These should be appended to the first page of the new layout.
    const customSections: string[] = [];

    for (const page of layout) {
      for (const column of page) {
        customSections.push(...column.filter((section) => section.startsWith("custom.")));
      }
    }

    if (customSections.length > 0) layoutCopy[0][0].push(...customSections);

    setValue("metadata.layout", layoutCopy);
  };

  return (
    <section id="layout" className="grid gap-y-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <SectionIcon id="layout" size={18} name={t`Layout`} />
          <h2 className="line-clamp-1 text-2xl font-bold lg:text-3xl">{t`Layout`}</h2>
        </div>

        <Tooltip content={t`Reset Layout`}>
          <Button size="icon" variant="ghost" onClick={onResetLayout}>
            <ArrowCounterClockwise />
          </Button>
        </Tooltip>
      </header>

      <main className="grid gap-y-4">
        {/* Pages */}
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={onDragEnd}
          onDragStart={onDragStart}
          onDragCancel={onDragCancel}
        >
          {layout.map((page, pageIndex) => {
            const mainIndex = `${pageIndex}.0`;
            const sidebarIndex = `${pageIndex}.1`;

            const main = page[0];
            const sidebar = page[1];
            const pageNumber = pageIndex + 1;

            return (
              <div key={pageIndex} className="rounded border p-3 pb-4">
                <div className="flex items-center justify-between">
                  <p className="mb-3 text-xs font-bold">{t`Page ${pageNumber}`}</p>

                  {pageIndex !== 0 && (
                    <Tooltip content={t`Remove Page`}>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="size-8"
                        onClick={() => {
                          onRemovePage(pageIndex);
                        }}
                      >
                        <TrashSimple size={12} className="text-error" />
                      </Button>
                    </Tooltip>
                  )}
                </div>

                <div className="grid grid-cols-2 items-start gap-x-4">
                  <Column id={mainIndex} name={t`Main`} items={main} />
                  <Column id={sidebarIndex} name={t`Sidebar`} items={sidebar} />
                </div>
              </div>
            );
          })}

          <Portal>
            <DragOverlay>{activeId && <Section isDragging id={activeId} />}</DragOverlay>
          </Portal>
        </DndContext>

        <Button variant="outline" className="ml-auto" onClick={onAddPage}>
          <Plus />
          <span className="ml-2 text-xs lg:text-sm">{t`Add New Page`}</span>
        </Button>
      </main>
    </section>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/right/sections/notes.tsx
================================================
import { t } from "@lingui/macro";
import { RichInput } from "@reactive-resume/ui";

import { useResumeStore } from "@/client/stores/resume";

import { SectionIcon } from "../shared/section-icon";

export const NotesSection = () => {
  const setValue = useResumeStore((state) => state.setValue);
  const notes = useResumeStore((state) => state.resume.data.metadata.notes);

  return (
    <section id="notes" className="grid gap-y-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <SectionIcon id="notes" size={18} name={t`Notes`} />
          <h2 className="line-clamp-1 text-2xl font-bold lg:text-3xl">{t`Notes`}</h2>
        </div>
      </header>

      <main className="grid gap-y-4">
        <p className="leading-relaxed">
          {t`This section is reserved for your personal notes specific to this resume. The content here remains private and is not shared with anyone else.`}
        </p>

        <div className="space-y-1.5">
          <RichInput
            content={notes}
            onChange={(content) => {
              setValue("metadata.notes", content);
            }}
          />

          <p className="text-xs leading-relaxed opacity-75">
            {t`For example, information regarding which companies you sent this resume to or the links to the job descriptions can be noted down here.`}
          </p>
        </div>
      </main>
    </section>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/right/sections/page.tsx
================================================
import { t } from "@lingui/macro";
import {
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Slider,
  Switch,
} from "@reactive-resume/ui";

import { useResumeStore } from "@/client/stores/resume";

import { SectionIcon } from "../shared/section-icon";

export const PageSection = () => {
  const setValue = useResumeStore((state) => state.setValue);
  const page = useResumeStore((state) => state.resume.data.metadata.page);

  return (
    <section id="page" className="grid gap-y-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <SectionIcon id="page" size={18} name={t`Page`} />
          <h2 className="line-clamp-1 text-2xl font-bold lg:text-3xl">{t`Page`}</h2>
        </div>
      </header>

      <main className="grid gap-y-6">
        <div className="space-y-1.5">
          <Label>{t`Format`}</Label>
          <Select
            value={page.format}
            onValueChange={(value) => {
              setValue("metadata.page.format", value);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder={t`Format`} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="a4">{t`A4`}</SelectItem>
              <SelectItem value="letter">{t`Letter`}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label>{t`Margin`}</Label>
          <div className="flex items-center gap-x-4 py-1">
            <Slider
              min={0}
              max={48}
              step={2}
              value={[page.margin]}
              onValueChange={(value) => {
                setValue("metadata.page.margin", value[0]);
              }}
            />

            <span className="text-base font-bold">{page.margin}</span>
          </div>
        </div>

        <div className="space-y-1.5">
          <Label>{t`Options`}</Label>

          <div className="py-2">
            <div className="flex items-center gap-x-4">
              <Switch
                id="metadata.page.options.breakLine"
                checked={page.options.breakLine}
                onCheckedChange={(checked) => {
                  setValue("metadata.page.options.breakLine", checked);
                }}
              />
              <Label htmlFor="metadata.page.options.breakLine">{t`Show Break Line`}</Label>
            </div>
          </div>

          <div className="py-2">
            <div className="flex items-center gap-x-4">
              <Switch
                id="metadata.page.options.pageNumbers"
                checked={page.options.pageNumbers}
                onCheckedChange={(checked) => {
                  setValue("metadata.page.options.pageNumbers", checked);
                }}
              />
              <Label htmlFor="metadata.page.options.pageNumbers">{t`Show Page Numbers`}</Label>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/right/sections/sharing.tsx
================================================
import { t } from "@lingui/macro";
import { CopySimple } from "@phosphor-icons/react";
import { Button, Input, Label, Switch, Tooltip } from "@reactive-resume/ui";
import { AnimatePresence, motion } from "framer-motion";

import { useToast } from "@/client/hooks/use-toast";
import { useUser } from "@/client/services/user";
import { useResumeStore } from "@/client/stores/resume";

import { SectionIcon } from "../shared/section-icon";

export const SharingSection = () => {
  const { user } = useUser();
  const { toast } = useToast();
  const username = user?.username;

  const setValue = useResumeStore((state) => state.setValue);
  const slug = useResumeStore((state) => state.resume.slug);
  const isPublic = useResumeStore((state) => state.resume.visibility === "public");

  // Constants
  const url = `${window.location.origin}/${username}/${slug}`;

  const onCopy = async () => {
    await navigator.clipboard.writeText(url);

    toast({
      variant: "success",
      title: t`A link has been copied to your clipboard.`,
      description: t`Anyone with this link can view and download the resume. Share it on your profile or with recruiters.`,
    });
  };

  return (
    <section id="sharing" className="grid gap-y-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <SectionIcon id="sharing" size={18} name={t`Sharing`} />
          <h2 className="line-clamp-1 text-2xl font-bold lg:text-3xl">{t`Sharing`}</h2>
        </div>
      </header>

      <main className="grid gap-y-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-x-4">
            <Switch
              id="visibility"
              checked={isPublic}
              onCheckedChange={(checked) => {
                setValue("visibility", checked ? "public" : "private");
              }}
            />
            <div>
              <Label htmlFor="visibility" className="space-y-1">
                <p>{t`Public`}</p>
                <p className="text-xs opacity-60">
                  {t`Anyone with the link can view and download the resume.`}
                </p>
              </Label>
            </div>
          </div>
        </div>

        <AnimatePresence presenceAffectsLayout>
          {isPublic && (
            <motion.div
              layout
              className="space-y-1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Label htmlFor="resume-url">{t`URL`}</Label>

              <div className="flex gap-x-1.5">
                <Input readOnly id="resume-url" value={url} className="flex-1" />

                <Tooltip content={t`Copy to Clipboard`}>
                  <Button size="icon" variant="ghost" onClick={onCopy}>
                    <CopySimple />
                  </Button>
                </Tooltip>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </section>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/right/sections/statistics.tsx
================================================
import { t } from "@lingui/macro";
import { Info } from "@phosphor-icons/react";
import { Alert, AlertDescription, AlertTitle } from "@reactive-resume/ui";
import { cn } from "@reactive-resume/utils";
import { AnimatePresence, motion } from "framer-motion";

import { useResumeStatistics } from "@/client/services/resume";
import { useResumeStore } from "@/client/stores/resume";

import { SectionIcon } from "../shared/section-icon";

export const StatisticsSection = () => {
  const id = useResumeStore((state) => state.resume.id);
  const isPublic = useResumeStore((state) => state.resume.visibility === "public");

  const { statistics } = useResumeStatistics(id, isPublic);

  return (
    <section id="statistics" className="grid gap-y-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <SectionIcon id="statistics" size={18} name={t`Statistics`} />
          <h2 className="line-clamp-1 text-2xl font-bold lg:text-3xl">{t`Statistics`}</h2>
        </div>
      </header>

      <main className="grid grid-cols-2 gap-y-4">
        <AnimatePresence>
          {!isPublic && (
            <motion.div
              className="col-span-2"
              initial={{ opacity: 0, y: -50, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
            >
              <Alert variant="info">
                <Info size={18} />
                <AlertTitle>{t`Statistics are available only for public resumes.`}</AlertTitle>
                <AlertDescription className="text-xs leading-relaxed">
                  {t`You can track the number of views your resume has received, or how many people have downloaded the resume by enabling public sharing.`}
                </AlertDescription>
              </Alert>
            </motion.div>
          )}
        </AnimatePresence>

        <div>
          <h3 className={cn("text-4xl font-bold blur-none transition-all", !isPublic && "blur-sm")}>
            {statistics?.views ?? 0}
          </h3>
          <p className="opacity-75">{t`Views`}</p>
        </div>

        <div>
          <h3 className={cn("text-4xl font-bold blur-none transition-all", !isPublic && "blur-sm")}>
            {statistics?.downloads ?? 0}
          </h3>
          <p className="opacity-75">{t`Downloads`}</p>
        </div>
      </main>
    </section>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/right/sections/template.tsx
================================================
import { t } from "@lingui/macro";
import { AspectRatio } from "@reactive-resume/ui";
import { cn, templatesList } from "@reactive-resume/utils";
import { motion } from "framer-motion";

import { useResumeStore } from "@/client/stores/resume";

import { SectionIcon } from "../shared/section-icon";

export const TemplateSection = () => {
  const setValue = useResumeStore((state) => state.setValue);
  const currentTemplate = useResumeStore((state) => state.resume.data.metadata.template);

  return (
    <section id="template" className="grid gap-y-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <SectionIcon id="template" size={18} name={t`Template`} />
          <h2 className="line-clamp-1 text-2xl font-bold lg:text-3xl">{t`Template`}</h2>
        </div>
      </header>

      <main className="grid grid-cols-2 gap-8 @lg/right:grid-cols-3 @2xl/right:grid-cols-4">
        {templatesList.map((template, index) => (
          <AspectRatio key={template} ratio={1 / 1.4142}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: index * 0.1 } }}
              whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
              className={cn(
                "relative cursor-pointer rounded-sm ring-primary transition-all hover:ring-2",
                currentTemplate === template && "ring-2",
              )}
              onClick={() => {
                setValue("metadata.template", template);
              }}
            >
              <img src={`/templates/jpg/${template}.jpg`} alt={template} className="rounded-sm" />

              <div className="absolute inset-x-0 bottom-0 h-32 w-full bg-gradient-to-b from-transparent to-background/80">
                <p className="absolute inset-x-0 bottom-2 text-center font-bold capitalize text-primary">
                  {template}
                </p>
              </div>
            </motion.div>
          </AspectRatio>
        ))}
      </main>
    </section>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/right/sections/theme.tsx
================================================
import { t } from "@lingui/macro";
import { Input, Label, Popover, PopoverContent, PopoverTrigger } from "@reactive-resume/ui";
import { cn } from "@reactive-resume/utils";
import { HexColorPicker } from "react-colorful";

import { colors } from "@/client/constants/colors";
import { useResumeStore } from "@/client/stores/resume";

import { SectionIcon } from "../shared/section-icon";

export const ThemeSection = () => {
  const setValue = useResumeStore((state) => state.setValue);
  const theme = useResumeStore((state) => state.resume.data.metadata.theme);

  return (
    <section id="theme" className="grid gap-y-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <SectionIcon id="theme" size={18} name={t`Theme`} />
          <h2 className="line-clamp-1 text-2xl font-bold lg:text-3xl">{t`Theme`}</h2>
        </div>
      </header>

      <main className="grid gap-y-6">
        <div className="mb-2 grid grid-cols-6 flex-wrap justify-items-center gap-y-4 @xs/right:grid-cols-9">
          {colors.map((color) => (
            <div
              key={color}
              className={cn(
                "flex size-6 cursor-pointer items-center justify-center rounded-full ring-primary ring-offset-1 ring-offset-background transition-shadow hover:ring-1",
                theme.primary === color && "ring-1",
              )}
              onClick={() => {
                setValue("metadata.theme.primary", color);
              }}
            >
              <div className="size-5 rounded-full" style={{ backgroundColor: color }} />
            </div>
          ))}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="theme.primary">{t`Primary Color`}</Label>
          <div className="relative">
            <Popover>
              <PopoverTrigger asChild>
                <div
                  className="absolute inset-y-0 left-3 my-2.5 size-4 cursor-pointer rounded-full ring-primary ring-offset-2 ring-offset-background transition-shadow hover:ring-1"
                  style={{ backgroundColor: theme.primary }}
                />
              </PopoverTrigger>
              <PopoverContent className="rounded-lg border-none bg-transparent p-0">
                <HexColorPicker
                  color={theme.primary}
                  onChange={(color) => {
                    setValue("metadata.theme.primary", color);
                  }}
                />
              </PopoverContent>
            </Popover>
            <Input
              id="theme.primary"
              value={theme.primary}
              className="pl-10"
              onChange={(event) => {
                setValue("metadata.theme.primary", event.target.value);
              }}
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="theme.primary">{t`Background Color`}</Label>
          <div className="relative">
            <Popover>
              <PopoverTrigger asChild>
                <div
                  className="absolute inset-y-0 left-3 my-2.5 size-4 cursor-pointer rounded-full ring-primary ring-offset-2 ring-offset-background transition-shadow hover:ring-1"
                  style={{ backgroundColor: theme.background }}
                />
              </PopoverTrigger>
              <PopoverContent className="rounded-lg border-none bg-transparent p-0">
                <HexColorPicker
                  color={theme.background}
                  onChange={(color) => {
                    setValue("metadata.theme.background", color);
                  }}
                />
              </PopoverContent>
            </Popover>
            <Input
              id="theme.background"
              value={theme.background}
              className="pl-10"
              onChange={(event) => {
                setValue("metadata.theme.background", event.target.value);
              }}
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="theme.primary">{t`Text Color`}</Label>
          <div className="relative">
            <Popover>
              <PopoverTrigger asChild>
                <div
                  className="absolute inset-y-0 left-3 my-2.5 size-4 cursor-pointer rounded-full ring-primary ring-offset-2 ring-offset-background transition-shadow hover:ring-1"
                  style={{ backgroundColor: theme.text }}
                />
              </PopoverTrigger>
              <PopoverContent className="rounded-lg border-none bg-transparent p-0">
                <HexColorPicker
                  color={theme.text}
                  onChange={(color) => {
                    setValue("metadata.theme.text", color);
                  }}
                />
              </PopoverContent>
            </Popover>
            <Input
              id="theme.text"
              value={theme.text}
              className="pl-10"
              onChange={(event) => {
                setValue("metadata.theme.text", event.target.value);
              }}
            />
          </div>
        </div>
      </main>
    </section>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/right/sections/typography.tsx
================================================
/* eslint-disable lingui/no-unlocalized-strings */

import { t } from "@lingui/macro";
import type { ComboboxOption } from "@reactive-resume/ui";
import { Button, Combobox, Label, Slider, Switch } from "@reactive-resume/ui";
import { cn, fonts } from "@reactive-resume/utils";
import { useCallback, useEffect, useState } from "react";
import webfontloader from "webfontloader";

import { useResumeStore } from "@/client/stores/resume";

import { SectionIcon } from "../shared/section-icon";

const localFonts = ["Arial", "Cambria", "Garamond", "Times New Roman"];

const fontSuggestions = [
  ...localFonts,
  "IBM Plex Sans",
  "IBM Plex Serif",
  "Lato",
  "Lora",
  "Merriweather",
  "Open Sans",
  "Playfair Display",
  "PT Sans",
  "PT Serif",
  "Roboto Condensed",
];

const families = fonts.map((font) => ({
  value: font.family,
  label: font.family,
})) satisfies ComboboxOption[];

families.push(...localFonts.map((font) => ({ value: font, label: font })));

export const TypographySection = () => {
  const [subsets, setSubsets] = useState<ComboboxOption[]>([]);
  const [variants, setVariants] = useState<ComboboxOption[]>([]);

  const setValue = useResumeStore((state) => state.setValue);
  const typography = useResumeStore((state) => state.resume.data.metadata.typography);

  const loadFontSuggestions = useCallback(() => {
    for (const font of fontSuggestions) {
      if (localFonts.includes(font)) continue;

      webfontloader.load({
        events: false,
        classes: false,
        google: { families: [font], text: font },
      });
    }
  }, [fontSuggestions]);

  useEffect(() => {
    loadFontSuggestions();
  }, []);

  useEffect(() => {
    const subsets = fonts.find((font) => font.family === typography.font.family)?.subsets ?? [];
    if (subsets.length > 0) {
      setSubsets(subsets.map((subset) => ({ value: subset, label: subset })));
    }

    const variants = fonts.find((font) => font.family === typography.font.family)?.variants ?? [];
    if (variants.length > 0) {
      setVariants(variants.map((variant) => ({ value: variant, label: variant })));
    }
  }, [typography.font.family]);

  return (
    <section id="typography" className="grid gap-y-8">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <SectionIcon id="typography" size={18} name={t`Typography`} />
          <h2 className="line-clamp-1 text-2xl font-bold lg:text-3xl">{t`Typography`}</h2>
        </div>
      </header>

      <main className="grid gap-y-6">
        <div className="grid grid-cols-2 gap-4">
          {fontSuggestions
            .sort((a, b) => a.localeCompare(b))
            .map((font) => (
              <Button
                key={font}
                variant="outline"
                style={{ fontFamily: font }}
                disabled={typography.font.family === font}
                className={cn(
                  "flex h-12 items-center justify-center overflow-hidden rounded border text-center text-xs ring-primary transition-colors hover:bg-secondary-accent focus:outline-none focus:ring-1 disabled:opacity-100 lg:text-sm",
                  typography.font.family === font && "ring-1",
                )}
                onClick={() => {
                  setValue("metadata.typography.font.family", font);
                  setValue("metadata.typography.font.subset", "latin");
                  setValue("metadata.typography.font.variants", ["regular"]);
                }}
              >
                {font}
              </Button>
            ))}
        </div>

        <div className="space-y-1.5">
          <Label>{t`Font Family`}</Label>
          <Combobox
            options={families.sort((a, b) => a.label.localeCompare(b.label))}
            value={typography.font.family}
            searchPlaceholder={t`Search for a font family`}
            onValueChange={(value) => {
              setValue("metadata.typography.font.family", value);
              setValue("metadata.typography.font.subset", "latin");
              setValue("metadata.typography.font.variants", ["regular"]);
            }}
          />
        </div>

        <div className="grid grid-cols-2 gap-x-4">
          <div className="space-y-1.5">
            <Label>{t`Font Subset`}</Label>
            <Combobox
              options={subsets}
              value={typography.font.subset}
              searchPlaceholder={t`Search for a font subset`}
              onValueChange={(value) => {
                setValue("metadata.typography.font.subset", value);
              }}
            />
          </div>

          <div className="space-y-1.5">
            <Label>{t`Font Variants`}</Label>
            <Combobox
              multiple
              options={variants}
              value={typography.font.variants}
              searchPlaceholder={t`Search for a font variant`}
              onValueChange={(value) => {
                setValue("metadata.typography.font.variants", value);
              }}
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label>{t`Font Size`}</Label>
          <div className="flex items-center gap-x-4 py-1">
            <Slider
              min={6}
              max={18}
              step={0.05}
              value={[typography.font.size]}
              onValueChange={(value) => {
                setValue("metadata.typography.font.size", value[0]);
              }}
            />

            <span className="text-base font-bold">{typography.font.size}</span>
          </div>
        </div>

        <div className="space-y-1.5">
          <Label>{t`Line Height`}</Label>
          <div className="flex items-center gap-x-4 py-1">
            <Slider
              min={0}
              max={3}
              step={0.05}
              value={[typography.lineHeight]}
              onValueChange={(value) => {
                setValue("metadata.typography.lineHeight", value[0]);
              }}
            />

            <span className="text-base font-bold">{typography.lineHeight}</span>
          </div>
        </div>

        <div className="space-y-1.5">
          <Label>{t`Options`}</Label>

          <div className="flex items-center gap-x-4 py-1">
            <Switch
              id="metadata.typography.hideIcons"
              checked={typography.hideIcons}
              onCheckedChange={(checked) => {
                setValue("metadata.typography.hideIcons", checked);
              }}
            />
            <Label htmlFor="metadata.typography.hideIcons">{t`Hide Icons`}</Label>
          </div>

          <div className="flex items-center gap-x-4 py-1">
            <Switch
              id="metadata.typography.underlineLinks"
              checked={typography.underlineLinks}
              onCheckedChange={(checked) => {
                setValue("metadata.typography.underlineLinks", checked);
              }}
            />
            <Label htmlFor="metadata.typography.underlineLinks">{t`Underline Links`}</Label>
          </div>
        </div>
      </main>
    </section>
  );
};


================================================
File: apps/client/src/pages/builder/sidebars/right/shared/section-icon.tsx
================================================
import type { IconProps } from "@phosphor-icons/react";
import {
  Code,
  DiamondsFour,
  DownloadSimple,
  Info,
  Layout,
  Note,
  Palette,
  ReadCvLogo,
  ShareFat,
  TextT,
  Translate,
  TrendUp,
} from "@phosphor-icons/react";
import type { ButtonProps } from "@reactive-resume/ui";
import { Button, Tooltip } from "@reactive-resume/ui";

type MetadataKey =
  | "template"
  | "layout"
  | "typography"
  | "theme"
  | "css"
  | "page"
  | "locale"
  | "sharing"
  | "statistics"
  | "export"
  | "notes"
  | "information";

const getSectionIcon = (id: MetadataKey, props: IconProps = {}) => {
  switch (id) {
    // Left Sidebar
    case "notes": {
      return <Note size={18} {...props} />;
    }
    case "template": {
      return <DiamondsFour size={18} {...props} />;
    }
    case "layout": {
      return <Layout size={18} {...props} />;
    }
    case "typography": {
      return <TextT size={18} {...props} />;
    }
    case "theme": {
      return <Palette size={18} {...props} />;
    }
    case "css": {
      return <Code size={18} {...props} />;
    }
    case "page": {
      return <ReadCvLogo size={18} {...props} />;
    }
    case "locale": {
      return <Translate size={18} {...props} />;
    }
    case "sharing": {
      return <ShareFat size={18} {...props} />;
    }
    case "statistics": {
      return <TrendUp size={18} {...props} />;
    }
    case "export": {
      return <DownloadSimple size={18} {...props} />;
    }
    case "information": {
      return <Info size={18} {...props} />;
    }

    default: {
      return null;
    }
  }
};

type SectionIconProps = Omit<ButtonProps, "size"> & {
  id: MetadataKey;
  name: string;
  size?: number;
  icon?: React.ReactNode;
};

export const SectionIcon = ({ id, name, icon, size = 14, ...props }: SectionIconProps) => (
  <Tooltip side="left" content={name}>
    <Button size="icon" variant="ghost" className="size-8 rounded-full" {...props}>
      {icon ?? getSectionIcon(id, { size })}
    </Button>
  </Tooltip>
);


================================================
File: apps/client/src/services/openai/change-tone.ts
================================================
/* eslint-disable lingui/text-restrictions */

import { t } from "@lingui/macro";

import { DEFAULT_MAX_TOKENS, DEFAULT_MODEL } from "@/client/constants/llm";
import { useOpenAiStore } from "@/client/stores/openai";

import { openai } from "./client";

const PROMPT = `You are an AI writing assistant specialized in writing copy for resumes.
Do not return anything else except the text you improved. It should not begin with a newline. It should not have any prefix or suffix text.
Change the tone of the following paragraph to be {mood} and returns in the language of the text:

Text: """{input}"""

Revised Text: """`;

type Mood = "casual" | "professional" | "confident" | "friendly";

export const changeTone = async (text: string, mood: Mood) => {
  const prompt = PROMPT.replace("{mood}", mood).replace("{input}", text);

  const { model, maxTokens } = useOpenAiStore.getState();

  const result = await openai().chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: model ?? DEFAULT_MODEL,
    max_tokens: maxTokens ?? DEFAULT_MAX_TOKENS,
    temperature: 0.5,
    stop: ['"""'],
    n: 1,
  });

  if (result.choices.length === 0) {
    throw new Error(t`OpenAI did not return any choices for your text.`);
  }

  return result.choices[0].message.content ?? text;
};


================================================
File: apps/client/src/services/openai/client.ts
================================================
import { t } from "@lingui/macro";
import { OpenAI } from "openai";

import { useOpenAiStore } from "@/client/stores/openai";

export const openai = () => {
  const { apiKey, baseURL } = useOpenAiStore.getState();

  if (!apiKey) {
    throw new Error(
      t`Your OpenAI API Key has not been set yet. Please go to your account settings to enable OpenAI Integration.`,
    );
  }

  if (baseURL) {
    return new OpenAI({
      apiKey,
      baseURL,
      dangerouslyAllowBrowser: true,
    });
  }

  return new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true,
  });
};


================================================
File: apps/client/src/services/openai/fix-grammar.ts
================================================
/* eslint-disable lingui/text-restrictions */

import { t } from "@lingui/macro";

import { DEFAULT_MAX_TOKENS, DEFAULT_MODEL } from "@/client/constants/llm";
import { useOpenAiStore } from "@/client/stores/openai";

import { openai } from "./client";

const PROMPT = `You are an AI writing assistant specialized in writing copy for resumes.
Do not return anything else except the text you improved. It should not begin with a newline. It should not have any prefix or suffix text.
Just fix the spelling and grammar of the following paragraph, do not change the meaning and returns in the language of the text:

Text: """{input}"""

Revised Text: """`;

export const fixGrammar = async (text: string) => {
  const prompt = PROMPT.replace("{input}", text);

  const { model, maxTokens } = useOpenAiStore.getState();

  const result = await openai().chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: model ?? DEFAULT_MODEL,
    max_tokens: maxTokens ?? DEFAULT_MAX_TOKENS,
    temperature: 0,
    stop: ['"""'],
    n: 1,
  });

  if (result.choices.length === 0) {
    throw new Error(t`OpenAI did not return any choices for your text.`);
  }

  return result.choices[0].message.content ?? text;
};


================================================
File: apps/client/src/services/openai/improve-writing.ts
================================================
/* eslint-disable lingui/text-restrictions */

import { t } from "@lingui/macro";

import { DEFAULT_MAX_TOKENS, DEFAULT_MODEL } from "@/client/constants/llm";
import { useOpenAiStore } from "@/client/stores/openai";

import { openai } from "./client";

const PROMPT = `You are an AI writing assistant specialized in writing copy for resumes.
Do not return anything else except the text you improved. It should not begin with a newline. It should not have any prefix or suffix text.
Improve the writing of the following paragraph and returns in the language of the text:

Text: """{input}"""

Revised Text: """`;

export const improveWriting = async (text: string) => {
  const prompt = PROMPT.replace("{input}", text);

  const { model, maxTokens } = useOpenAiStore.getState();

  const result = await openai().chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: model ?? DEFAULT_MODEL,
    max_tokens: maxTokens ?? DEFAULT_MAX_TOKENS,
    temperature: 0,
    stop: ['"""'],
    n: 1,
  });

  if (result.choices.length === 0) {
    throw new Error(t`OpenAI did not return any choices for your text.`);
  }

  return result.choices[0].message.content ?? text;
};


================================================
File: apps/client/src/services/resume/contributors.ts
================================================
import type { ContributorDto } from "@reactive-resume/dto";
import { useQuery } from "@tanstack/react-query";

import { axios } from "@/client/libs/axios";

export const fetchGitHubContributors = async () => {
  const response = await axios.get<ContributorDto[]>(`/contributors/github`);

  return response.data;
};

export const fetchCrowdinContributors = async () => {
  const response = await axios.get<ContributorDto[]>(`/contributors/crowdin`);

  return response.data;
};

export const useContributors = () => {
  const {
    error: githubError,
    isPending: githubLoading,
    data: github,
  } = useQuery({
    queryKey: ["contributors", "github"],
    queryFn: fetchGitHubContributors,
  });

  const {
    error: crowdinError,
    isPending: crowdinLoading,
    data: crowdin,
  } = useQuery({
    queryKey: ["contributors", "crowdin"],
    queryFn: fetchCrowdinContributors,
  });

  const error = githubError ?? crowdinError;
  const loading = githubLoading || crowdinLoading;

  return { github, crowdin, loading, error };
};


================================================
File: apps/client/src/services/resume/create.ts
================================================
import type { CreateResumeDto, ResumeDto } from "@reactive-resume/dto";
import { useMutation } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";

import { axios } from "@/client/libs/axios";
import { queryClient } from "@/client/libs/query-client";

export const createResume = async (data: CreateResumeDto) => {
  const response = await axios.post<ResumeDto, AxiosResponse<ResumeDto>, CreateResumeDto>(
    "/resume",
    data,
  );

  return response.data;
};

export const useCreateResume = () => {
  const {
    error,
    isPending: loading,
    mutateAsync: createResumeFn,
  } = useMutation({
    mutationFn: createResume,
    onSuccess: (data) => {
      queryClient.setQueryData<ResumeDto>(["resume", { id: data.id }], data);

      queryClient.setQueryData<ResumeDto[]>(["resumes"], (cache) => {
        if (!cache) return [data];
        return [...cache, data];
      });
    },
  });

  return { createResume: createResumeFn, loading, error };
};


================================================
File: apps/client/src/services/resume/delete.ts
================================================
import type { DeleteResumeDto, ResumeDto } from "@reactive-resume/dto";
import { useMutation } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";

import { axios } from "@/client/libs/axios";
import { queryClient } from "@/client/libs/query-client";

export const deleteResume = async (data: DeleteResumeDto) => {
  const response = await axios.delete<ResumeDto, AxiosResponse<ResumeDto>, DeleteResumeDto>(
    `/resume/${data.id}`,
  );

  return response.data;
};

export const useDeleteResume = () => {
  const {
    error,
    isPending: loading,
    mutateAsync: deleteResumeFn,
  } = useMutation({
    mutationFn: deleteResume,
    onSuccess: (data) => {
      queryClient.removeQueries({ queryKey: ["resume", data.id] });

      queryClient.setQueryData<ResumeDto[]>(["resumes"], (cache) => {
        if (!cache) return [];
        return cache.filter((resume) => resume.id !== data.id);
      });
    },
  });

  return { deleteResume: deleteResumeFn, loading, error };
};


================================================
File: apps/client/src/services/resume/import.ts
================================================
import type { ImportResumeDto, ResumeDto } from "@reactive-resume/dto";
import { useMutation } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";

import { axios } from "@/client/libs/axios";
import { queryClient } from "@/client/libs/query-client";

export const importResume = async (data: ImportResumeDto) => {
  const response = await axios.post<ResumeDto, AxiosResponse<ResumeDto>, ImportResumeDto>(
    "/resume/import",
    data,
  );

  return response.data;
};

export const useImportResume = () => {
  const {
    error,
    isPending: loading,
    mutateAsync: importResumeFn,
  } = useMutation({
    mutationFn: importResume,
    onSuccess: (data) => {
      queryClient.setQueryData<ResumeDto>(["resume", { id: data.id }], data);

      queryClient.setQueryData<ResumeDto[]>(["resumes"], (cache) => {
        if (!cache) return [data];
        return [...cache, data];
      });
    },
  });

  return { importResume: importResumeFn, loading, error };
};


================================================
File: apps/client/src/services/resume/index.ts
================================================
export * from "./create";
export * from "./delete";
export * from "./print";
export * from "./resume";
export * from "./resumes";
export * from "./statistics";
export * from "./update";


================================================
File: apps/client/src/services/resume/lock.ts
================================================
import type { ResumeDto } from "@reactive-resume/dto";
import { useMutation } from "@tanstack/react-query";

import { axios } from "@/client/libs/axios";
import { queryClient } from "@/client/libs/query-client";

type LockResumeArgs = {
  id: string;
  set: boolean;
};

export const lockResume = async ({ id, set }: LockResumeArgs) => {
  const response = await axios.patch(`/resume/${id}/lock`, { set });

  queryClient.setQueryData<ResumeDto>(["resume", { id: response.data.id }], response.data);

  queryClient.setQueryData<ResumeDto[]>(["resumes"], (cache) => {
    if (!cache) return [response.data];
    return cache.map((resume) => {
      if (resume.id === response.data.id) return response.data;
      return resume;
    });
  });

  return response.data;
};

export const useLockResume = () => {
  const {
    error,
    isPending: loading,
    mutateAsync: lockResumeFn,
  } = useMutation({
    mutationFn: lockResume,
  });

  return { lockResume: lockResumeFn, loading, error };
};


================================================
File: apps/client/src/services/resume/preview.ts
================================================
import type { UrlDto } from "@reactive-resume/dto";
import { useQuery } from "@tanstack/react-query";

import { RESUME_PREVIEW_KEY } from "@/client/constants/query-keys";
import { axios } from "@/client/libs/axios";

export const previewResume = async (data: { id: string }) => {
  const response = await axios.get<UrlDto>(`/resume/print/${data.id}/preview`);

  return response.data;
};

export const useResumePreview = (id: string) => {
  const {
    error,
    isPending: loading,
    data,
  } = useQuery({
    queryKey: [RESUME_PREVIEW_KEY, { id }],
    queryFn: () => previewResume({ id }),
  });

  return { url: data?.url, loading, error };
};


================================================
File: apps/client/src/services/resume/print.tsx
================================================
import { t } from "@lingui/macro";
import type { UrlDto } from "@reactive-resume/dto";
import { useMutation } from "@tanstack/react-query";

import { toast } from "@/client/hooks/use-toast";
import { axios } from "@/client/libs/axios";

export const printResume = async (data: { id: string }) => {
  const response = await axios.get<UrlDto>(`/resume/print/${data.id}`);

  return response.data;
};

export const usePrintResume = () => {
  const {
    error,
    isPending: loading,
    mutateAsync: printResumeFn,
  } = useMutation({
    mutationFn: printResume,
    onError: (error) => {
      const message = error.message;

      toast({
        variant: "error",
        title: t`Oops, the server returned an error.`,
        description: message,
      });
    },
  });

  return { printResume: printResumeFn, loading, error };
};


================================================
File: apps/client/src/services/resume/resume.ts
================================================
import type { ResumeDto } from "@reactive-resume/dto";

import { axios } from "@/client/libs/axios";

export const findResumeById = async (data: { id: string }) => {
  const response = await axios.get<ResumeDto>(`/resume/${data.id}`);

  return response.data;
};

export const findResumeByUsernameSlug = async (data: { username: string; slug: string }) => {
  const response = await axios.get<ResumeDto>(`/resume/public/${data.username}/${data.slug}`);

  return response.data;
};


================================================
File: apps/client/src/services/resume/resumes.ts
================================================
import type { ResumeDto } from "@reactive-resume/dto";
import { useQuery } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";

import { RESUMES_KEY } from "@/client/constants/query-keys";
import { axios } from "@/client/libs/axios";

export const fetchResumes = async () => {
  const response = await axios.get<ResumeDto[], AxiosResponse<ResumeDto[]>>("/resume");

  return response.data;
};

export const useResumes = () => {
  const {
    error,
    isPending: loading,
    data: resumes,
  } = useQuery({
    queryKey: RESUMES_KEY,
    queryFn: fetchResumes,
  });

  return { resumes, loading, error };
};


================================================
File: apps/client/src/services/resume/statistics.ts
================================================
import type { StatisticsDto } from "@reactive-resume/dto";
import { useQuery } from "@tanstack/react-query";

import { RESUME_KEY } from "@/client/constants/query-keys";
import { axios } from "@/client/libs/axios";

export const findResumeStatisticsById = async (data: { id: string }) => {
  const response = await axios.get<StatisticsDto>(`/resume/${data.id}/statistics`);

  return response.data;
};

export const useResumeStatistics = (id: string, enabled = false) => {
  const {
    error,
    isPending: loading,
    data: statistics,
  } = useQuery({
    queryKey: [...RESUME_KEY, "statistics", id],
    queryFn: () => findResumeStatisticsById({ id }),
    enabled,
  });

  return { statistics, loading, error };
};


================================================
File: apps/client/src/services/resume/translation.ts
================================================
import type { Language } from "@reactive-resume/utils";
import { useQuery } from "@tanstack/react-query";

import { LANGUAGES_KEY } from "@/client/constants/query-keys";
import { axios } from "@/client/libs/axios";

export const fetchLanguages = async () => {
  const response = await axios.get<Language[]>(`/translation/languages`);

  return response.data;
};

export const useLanguages = () => {
  const {
    error,
    isPending: loading,
    data: languages,
  } = useQuery({
    queryKey: [LANGUAGES_KEY],
    queryFn: fetchLanguages,
  });

  return { languages: languages ?? [], loading, error };
};


================================================
File: apps/client/src/services/resume/update.tsx
================================================
import type { ResumeDto, UpdateResumeDto } from "@reactive-resume/dto";
import { useMutation } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import debounce from "lodash.debounce";

import { axios } from "@/client/libs/axios";
import { queryClient } from "@/client/libs/query-client";

export const updateResume = async (data: UpdateResumeDto) => {
  const response = await axios.patch<ResumeDto, AxiosResponse<ResumeDto>, UpdateResumeDto>(
    `/resume/${data.id}`,
    data,
  );

  queryClient.setQueryData<ResumeDto>(["resume", { id: response.data.id }], response.data);

  queryClient.setQueryData<ResumeDto[]>(["resumes"], (cache) => {
    if (!cache) return [response.data];
    return cache.map((resume) => {
      if (resume.id === response.data.id) return response.data;
      return resume;
    });
  });

  return response.data;
};

export const debouncedUpdateResume = debounce(updateResume, 500);

export const useUpdateResume = () => {
  const {
    error,
    isPending: loading,
    mutateAsync: updateResumeFn,
  } = useMutation({
    mutationFn: updateResume,
  });

  return { updateResume: updateResumeFn, loading, error };
};


================================================
File: apps/client/src/stores/builder.ts
================================================
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type Sheet = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

type PanelHandle = {
  isDragging: boolean;
  setDragging: (dragging: boolean) => void;
};

type Panel = {
  size: number;
  setSize: (size: number) => void;
  handle: PanelHandle;
};

type BuilderState = {
  frame: {
    ref: HTMLIFrameElement | null;
    setRef: (ref: HTMLIFrameElement | null) => void;
  };
  sheet: {
    left: Sheet;
    right: Sheet;
  };
  panel: {
    left: Panel;
    right: Panel;
  };
};

type BuilderActions = {
  toggle: (side: "left" | "right") => void;
};

export const useBuilderStore = create<BuilderState & BuilderActions>()(
  immer((set) => ({
    frame: {
      ref: null,
      setRef: (ref) => {
        set((state) => {
          // @ts-expect-error Unable to set ref type
          state.frame.ref = ref;
        });
      },
    },
    sheet: {
      left: {
        open: false,
        setOpen: (open) => {
          set((state) => {
            state.sheet.left.open = open;
          });
        },
      },
      right: {
        open: false,
        setOpen: (open) => {
          set((state) => {
            state.sheet.right.open = open;
          });
        },
      },
    },
    panel: {
      left: {
        size: 0,
        setSize: (size) => {
          set((state) => {
            state.panel.left.size = size;
          });
        },
        handle: {
          isDragging: false,
          setDragging: (dragging) => {
            set((state) => {
              state.panel.left.handle.isDragging = dragging;
            });
          },
        },
      },
      right: {
        size: 0,
        setSize: (size) => {
          set((state) => {
            state.panel.right.size = size;
          });
        },
        handle: {
          isDragging: false,
          setDragging: (dragging) => {
            set((state) => {
              state.panel.right.handle.isDragging = dragging;
            });
          },
        },
      },
    },
    toggle: (side) => {
      set((state) => {
        state.sheet[side].open = !state.sheet[side].open;
      });
    },
  })),
);


================================================
File: apps/client/src/stores/openai.ts
================================================
import { create } from "zustand";
import { persist } from "zustand/middleware";

import { DEFAULT_MAX_TOKENS, DEFAULT_MODEL } from "../constants/llm";

type OpenAIStore = {
  baseURL: string | null;
  setBaseURL: (baseURL: string | null) => void;
  apiKey: string | null;
  setApiKey: (apiKey: string | null) => void;
  model: string | null;
  setModel: (model: string | null) => void;
  maxTokens: number | null;
  setMaxTokens: (maxTokens: number | null) => void;
};

export const useOpenAiStore = create<OpenAIStore>()(
  persist(
    (set) => ({
      baseURL: null,
      setBaseURL: (baseURL: string | null) => {
        set({ baseURL });
      },
      apiKey: null,
      setApiKey: (apiKey: string | null) => {
        set({ apiKey });
      },
      model: DEFAULT_MODEL,
      setModel: (model: string | null) => {
        set({ model });
      },
      maxTokens: DEFAULT_MAX_TOKENS,
      setMaxTokens: (maxTokens: number | null) => {
        set({ maxTokens });
      },
    }),
    { name: "openai" },
  ),
);


================================================
File: apps/client/src/stores/resume.ts
================================================
import { t } from "@lingui/macro";
import { createId } from "@paralleldrive/cuid2";
import type { ResumeDto } from "@reactive-resume/dto";
import type { CustomSectionGroup, SectionKey } from "@reactive-resume/schema";
import { defaultSection } from "@reactive-resume/schema";
import { removeItemInLayout } from "@reactive-resume/utils";
import _set from "lodash.set";
import type { TemporalState } from "zundo";
import { temporal } from "zundo";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { useStoreWithEqualityFn } from "zustand/traditional";

import { debouncedUpdateResume } from "../services/resume";

type ResumeStore = {
  resume: ResumeDto;

  // Actions
  setValue: (path: string, value: unknown) => void;

  // Custom Section Actions
  addSection: () => void;
  removeSection: (sectionId: SectionKey) => void;
};

export const useResumeStore = create<ResumeStore>()(
  temporal(
    immer((set) => ({
      resume: {} as ResumeDto,
      setValue: (path, value) => {
        set((state) => {
          if (path === "visibility") {
            state.resume.visibility = value as "public" | "private";
          } else {
            state.resume.data = _set(state.resume.data, path, value);
          }

          void debouncedUpdateResume(JSON.parse(JSON.stringify(state.resume)));
        });
      },
      addSection: () => {
        const section: CustomSectionGroup = {
          ...defaultSection,
          id: createId(),
          name: t`Custom Section`,
          items: [],
        };

        set((state) => {
          const lastPageIndex = state.resume.data.metadata.layout.length - 1;
          state.resume.data.metadata.layout[lastPageIndex][0].push(`custom.${section.id}`);
          state.resume.data = _set(state.resume.data, `sections.custom.${section.id}`, section);

          void debouncedUpdateResume(JSON.parse(JSON.stringify(state.resume)));
        });
      },
      removeSection: (sectionId: SectionKey) => {
        if (sectionId.startsWith("custom.")) {
          const id = sectionId.split("custom.")[1];

          set((state) => {
            removeItemInLayout(sectionId, state.resume.data.metadata.layout);
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete state.resume.data.sections.custom[id];

            void debouncedUpdateResume(JSON.parse(JSON.stringify(state.resume)));
          });
        }
      },
    })),
    {
      limit: 100,
      wrapTemporal: (fn) => devtools(fn),
      partialize: ({ resume }) => ({ resume }),
    },
  ),
);

export const useTemporalResumeStore = <T>(
  selector: (state: TemporalState<Pick<ResumeStore, "resume">>) => T,
  equality?: (a: T, b: T) => boolean,
) => useStoreWithEqualityFn(useResumeStore.temporal, selector, equality);


================================================
File: apps/server/src/printer/printer.module.ts
================================================
import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";

import { StorageModule } from "../storage/storage.module";
import { PrinterService } from "./printer.service";

@Module({
  imports: [HttpModule, StorageModule],
  providers: [PrinterService],
  exports: [PrinterService],
})
export class PrinterModule {}


================================================
File: apps/server/src/printer/printer.service.ts
================================================
import { HttpService } from "@nestjs/axios";
import { Injectable, InternalServerErrorException, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ResumeDto } from "@reactive-resume/dto";
import { ErrorMessage } from "@reactive-resume/utils";
import retry from "async-retry";
import { PDFDocument } from "pdf-lib";
import { connect } from "puppeteer";

import { Config } from "../config/schema";
import { StorageService } from "../storage/storage.service";

@Injectable()
export class PrinterService {
  private readonly logger = new Logger(PrinterService.name);

  private readonly browserURL: string;

  private readonly ignoreHTTPSErrors: boolean;

  constructor(
    private readonly configService: ConfigService<Config>,
    private readonly storageService: StorageService,
    private readonly httpService: HttpService,
  ) {
    const chromeUrl = this.configService.getOrThrow<string>("CHROME_URL");
    const chromeToken = this.configService.getOrThrow<string>("CHROME_TOKEN");

    this.browserURL = `${chromeUrl}?token=${chromeToken}`;
    this.ignoreHTTPSErrors = this.configService.getOrThrow<boolean>("CHROME_IGNORE_HTTPS_ERRORS");
  }

  private async getBrowser() {
    try {
      return await connect({
        browserWSEndpoint: this.browserURL,
        acceptInsecureCerts: this.ignoreHTTPSErrors,
      });
    } catch (error) {
      throw new InternalServerErrorException(
        ErrorMessage.InvalidBrowserConnection,
        (error as Error).message,
      );
    }
  }

  async getVersion() {
    const browser = await this.getBrowser();
    const version = await browser.version();
    await browser.disconnect();
    return version;
  }

  async printResume(resume: ResumeDto) {
    const start = performance.now();

    const url = await retry<string | undefined>(() => this.generateResume(resume), {
      retries: 3,
      randomize: true,
      onRetry: (_, attempt) => {
        this.logger.log(`Retrying to print resume #${resume.id}, attempt #${attempt}`);
      },
    });

    const duration = Number(performance.now() - start).toFixed(0);
    const numberPages = resume.data.metadata.layout.length;

    this.logger.debug(`Chrome took ${duration}ms to print ${numberPages} page(s)`);

    return url;
  }

  async printPreview(resume: ResumeDto) {
    const start = performance.now();

    const url = await retry(() => this.generatePreview(resume), {
      retries: 3,
      randomize: true,
      onRetry: (_, attempt) => {
        this.logger.log(
          `Retrying to generate preview of resume #${resume.id}, attempt #${attempt}`,
        );
      },
    });

    const duration = Number(performance.now() - start).toFixed(0);

    this.logger.debug(`Chrome took ${duration}ms to generate preview`);

    return url;
  }

  async generateResume(resume: ResumeDto) {
    try {
      const browser = await this.getBrowser();
      const page = await browser.newPage();

      const publicUrl = this.configService.getOrThrow<string>("PUBLIC_URL");
      const storageUrl = this.configService.getOrThrow<string>("STORAGE_URL");

      let url = publicUrl;

      if ([publicUrl, storageUrl].some((url) => /https?:\/\/localhost(:\d+)?/.test(url))) {
        // Switch client URL from `http[s]://localhost[:port]` to `http[s]://host.docker.internal[:port]` in development
        // This is required because the browser is running in a container and the client is running on the host machine.
        url = url.replace(
          /localhost(:\d+)?/,
          (_match, port) => `host.docker.internal${port ?? ""}`,
        );

        await page.setRequestInterception(true);

        // Intercept requests of `localhost` to `host.docker.internal` in development
        page.on("request", (request) => {
          if (request.url().startsWith(storageUrl)) {
            const modifiedUrl = request
              .url()
              .replace(/localhost(:\d+)?/, (_match, port) => `host.docker.internal${port ?? ""}`);

            void request.continue({ url: modifiedUrl });
          } else {
            void request.continue();
          }
        });
      }

      // Set the data of the resume to be printed in the browser's session storage
      const numberPages = resume.data.metadata.layout.length;

      await page.evaluateOnNewDocument((data) => {
        window.localStorage.setItem("resume", JSON.stringify(data));
      }, resume.data);

      await page.goto(`${url}/artboard/preview`, { waitUntil: "networkidle0" });

      const pagesBuffer: Buffer[] = [];

      const processPage = async (index: number) => {
        const pageElement = await page.$(`[data-page="${index}"]`);
        // eslint-disable-next-line unicorn/no-await-expression-member
        const width = (await (await pageElement?.getProperty("scrollWidth"))?.jsonValue()) ?? 0;
        // eslint-disable-next-line unicorn/no-await-expression-member
        const height = (await (await pageElement?.getProperty("scrollHeight"))?.jsonValue()) ?? 0;

        const temporaryHtml = await page.evaluate((element: HTMLDivElement) => {
          const clonedElement = element.cloneNode(true) as HTMLDivElement;
          const temporaryHtml_ = document.body.innerHTML;
          document.body.innerHTML = clonedElement.outerHTML;
          return temporaryHtml_;
        }, pageElement);

        // Apply custom CSS, if enabled
        const css = resume.data.metadata.css;

        if (css.visible) {
          await page.evaluate((cssValue: string) => {
            const styleTag = document.createElement("style");
            styleTag.textContent = cssValue;
            document.head.append(styleTag);
          }, css.value);
        }

        const uint8array = await page.pdf({ width, height, printBackground: true });
        const buffer = Buffer.from(uint8array);
        pagesBuffer.push(buffer);

        await page.evaluate((temporaryHtml_: string) => {
          document.body.innerHTML = temporaryHtml_;
        }, temporaryHtml);
      };

      // Loop through all the pages and print them, by first displaying them, printing the PDF and then hiding them back
      for (let index = 1; index <= numberPages; index++) {
        await processPage(index);
      }

      // Using 'pdf-lib', merge all the pages from their buffers into a single PDF
      const pdf = await PDFDocument.create();

      for (const element of pagesBuffer) {
        const page = await PDFDocument.load(element);
        const [copiedPage] = await pdf.copyPages(page, [0]);
        pdf.addPage(copiedPage);
      }

      // Save the PDF to storage and return the URL to download the resume
      // Store the URL in cache for future requests, under the previously generated hash digest
      const buffer = Buffer.from(await pdf.save());

      // This step will also save the resume URL in cache
      const resumeUrl = await this.storageService.uploadObject(
        resume.userId,
        "resumes",
        buffer,
        resume.title,
      );

      // Close all the pages and disconnect from the browser
      await page.close();
      await browser.disconnect();

      return resumeUrl;
    } catch (error) {
      this.logger.error(error);

      throw new InternalServerErrorException(
        ErrorMessage.ResumePrinterError,
        (error as Error).message,
      );
    }
  }

  async generatePreview(resume: ResumeDto) {
    const browser = await this.getBrowser();
    const page = await browser.newPage();

    const publicUrl = this.configService.getOrThrow<string>("PUBLIC_URL");
    const storageUrl = this.configService.getOrThrow<string>("STORAGE_URL");

    let url = publicUrl;

    if ([publicUrl, storageUrl].some((url) => /https?:\/\/localhost(:\d+)?/.test(url))) {
      // Switch client URL from `http[s]://localhost[:port]` to `http[s]://host.docker.internal[:port]` in development
      // This is required because the browser is running in a container and the client is running on the host machine.
      url = url.replace(/localhost(:\d+)?/, (_match, port) => `host.docker.internal${port ?? ""}`);

      await page.setRequestInterception(true);

      // Intercept requests of `localhost` to `host.docker.internal` in development
      page.on("request", (request) => {
        if (request.url().startsWith(storageUrl)) {
          const modifiedUrl = request
            .url()
            .replace(/localhost(:\d+)?/, (_match, port) => `host.docker.internal${port ?? ""}`);

          void request.continue({ url: modifiedUrl });
        } else {
          void request.continue();
        }
      });
    }

    // Set the data of the resume to be printed in the browser's session storage
    await page.evaluateOnNewDocument((data) => {
      window.localStorage.setItem("resume", JSON.stringify(data));
    }, resume.data);

    await page.setViewport({ width: 794, height: 1123 });

    await page.goto(`${url}/artboard/preview`, { waitUntil: "networkidle0" });

    // Save the JPEG to storage and return the URL
    // Store the URL in cache for future requests, under the previously generated hash digest
    const uint8array = await page.screenshot({ quality: 80, type: "jpeg" });
    const buffer = Buffer.from(uint8array);

    // Generate a hash digest of the resume data, this hash will be used to check if the resume has been updated
    const previewUrl = await this.storageService.uploadObject(
      resume.userId,
      "previews",
      buffer,
      resume.id,
    );

    // Close all the pages and disconnect from the browser
    await page.close();
    await browser.disconnect();

    return previewUrl;
  }
}


================================================
File: apps/server/src/resume/resume.controller.ts
================================================
import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Logger,
  Param,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { User as UserEntity } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import {
  CreateResumeDto,
  importResumeSchema,
  ResumeDto,
  UpdateResumeDto,
} from "@reactive-resume/dto";
import { resumeDataSchema } from "@reactive-resume/schema";
import { ErrorMessage } from "@reactive-resume/utils";
import { zodToJsonSchema } from "zod-to-json-schema";

import { User } from "@/server/user/decorators/user.decorator";

import { OptionalGuard } from "../auth/guards/optional.guard";
import { TwoFactorGuard } from "../auth/guards/two-factor.guard";
import { Resume } from "./decorators/resume.decorator";
import { ResumeGuard } from "./guards/resume.guard";
import { ResumeService } from "./resume.service";

@ApiTags("Resume")
@Controller("resume")
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Get("schema")
  getSchema() {
    return zodToJsonSchema(resumeDataSchema);
  }

  @Post()
  @UseGuards(TwoFactorGuard)
  async create(@User() user: UserEntity, @Body() createResumeDto: CreateResumeDto) {
    try {
      return await this.resumeService.create(user.id, createResumeDto);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === "P2002") {
        throw new BadRequestException(ErrorMessage.ResumeSlugAlreadyExists);
      }

      Logger.error(error);
      throw new InternalServerErrorException(error);
    }
  }

  @Post("import")
  @UseGuards(TwoFactorGuard)
  async import(@User() user: UserEntity, @Body() importResumeDto: unknown) {
    try {
      const result = importResumeSchema.parse(importResumeDto);
      return await this.resumeService.import(user.id, result);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === "P2002") {
        throw new BadRequestException(ErrorMessage.ResumeSlugAlreadyExists);
      }

      Logger.error(error);
      throw new InternalServerErrorException(error);
    }
  }

  @Get()
  @UseGuards(TwoFactorGuard)
  findAll(@User() user: UserEntity) {
    return this.resumeService.findAll(user.id);
  }

  @Get(":id")
  @UseGuards(TwoFactorGuard, ResumeGuard)
  findOne(@Resume() resume: ResumeDto) {
    return resume;
  }

  @Get(":id/statistics")
  @UseGuards(TwoFactorGuard)
  findOneStatistics(@Param("id") id: string) {
    return this.resumeService.findOneStatistics(id);
  }

  @Get("/public/:username/:slug")
  @UseGuards(OptionalGuard)
  findOneByUsernameSlug(
    @Param("username") username: string,
    @Param("slug") slug: string,
    @User("id") userId: string,
  ) {
    return this.resumeService.findOneByUsernameSlug(username, slug, userId);
  }

  @Patch(":id")
  @UseGuards(TwoFactorGuard)
  update(
    @User() user: UserEntity,
    @Param("id") id: string,
    @Body() updateResumeDto: UpdateResumeDto,
  ) {
    return this.resumeService.update(user.id, id, updateResumeDto);
  }

  @Patch(":id/lock")
  @UseGuards(TwoFactorGuard)
  lock(@User() user: UserEntity, @Param("id") id: string, @Body("set") set = true) {
    return this.resumeService.lock(user.id, id, set);
  }

  @Delete(":id")
  @UseGuards(TwoFactorGuard)
  remove(@User() user: UserEntity, @Param("id") id: string) {
    return this.resumeService.remove(user.id, id);
  }

  @Get("/print/:id")
  @UseGuards(OptionalGuard, ResumeGuard)
  async printResume(@User("id") userId: string | undefined, @Resume() resume: ResumeDto) {
    try {
      const url = await this.resumeService.printResume(resume, userId);

      return { url };
    } catch (error) {
      Logger.error(error);
      throw new InternalServerErrorException(error);
    }
  }

  @Get("/print/:id/preview")
  @UseGuards(TwoFactorGuard, ResumeGuard)
  async printPreview(@Resume() resume: ResumeDto) {
    try {
      const url = await this.resumeService.printPreview(resume);

      return { url };
    } catch (error) {
      Logger.error(error);
      throw new InternalServerErrorException(error);
    }
  }
}


================================================
File: apps/server/src/resume/resume.module.ts
================================================
import { Module } from "@nestjs/common";

import { AuthModule } from "@/server/auth/auth.module";
import { PrinterModule } from "@/server/printer/printer.module";

import { StorageModule } from "../storage/storage.module";
import { ResumeController } from "./resume.controller";
import { ResumeService } from "./resume.service";

@Module({
  imports: [AuthModule, PrinterModule, StorageModule],
  controllers: [ResumeController],
  providers: [ResumeService],
  exports: [ResumeService],
})
export class ResumeModule {}


================================================
File: apps/server/src/resume/resume.service.ts
================================================
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { CreateResumeDto, ImportResumeDto, ResumeDto, UpdateResumeDto } from "@reactive-resume/dto";
import { defaultResumeData, ResumeData } from "@reactive-resume/schema";
import type { DeepPartial } from "@reactive-resume/utils";
import { ErrorMessage, generateRandomName } from "@reactive-resume/utils";
import slugify from "@sindresorhus/slugify";
import deepmerge from "deepmerge";
import { PrismaService } from "nestjs-prisma";

import { PrinterService } from "@/server/printer/printer.service";

import { StorageService } from "../storage/storage.service";

@Injectable()
export class ResumeService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly printerService: PrinterService,
    private readonly storageService: StorageService,
  ) {}

  async create(userId: string, createResumeDto: CreateResumeDto) {
    const { name, email, picture } = await this.prisma.user.findUniqueOrThrow({
      where: { id: userId },
      select: { name: true, email: true, picture: true },
    });

    const data = deepmerge(defaultResumeData, {
      basics: { name, email, picture: { url: picture ?? "" } },
    } satisfies DeepPartial<ResumeData>);

    return this.prisma.resume.create({
      data: {
        data,
        userId,
        title: createResumeDto.title,
        visibility: createResumeDto.visibility,
        slug: createResumeDto.slug ?? slugify(createResumeDto.title),
      },
    });
  }

  import(userId: string, importResumeDto: ImportResumeDto) {
    const randomTitle = generateRandomName();

    return this.prisma.resume.create({
      data: {
        userId,
        visibility: "private",
        data: importResumeDto.data,
        title: importResumeDto.title ?? randomTitle,
        slug: importResumeDto.slug ?? slugify(randomTitle),
      },
    });
  }

  findAll(userId: string) {
    return this.prisma.resume.findMany({ where: { userId }, orderBy: { updatedAt: "desc" } });
  }

  findOne(id: string, userId?: string) {
    if (userId) {
      return this.prisma.resume.findUniqueOrThrow({ where: { userId_id: { userId, id } } });
    }

    return this.prisma.resume.findUniqueOrThrow({ where: { id } });
  }

  async findOneStatistics(id: string) {
    const result = await this.prisma.statistics.findFirst({
      select: { views: true, downloads: true },
      where: { resumeId: id },
    });

    return {
      views: result?.views ?? 0,
      downloads: result?.downloads ?? 0,
    };
  }

  async findOneByUsernameSlug(username: string, slug: string, userId?: string) {
    const resume = await this.prisma.resume.findFirstOrThrow({
      where: { user: { username }, slug, visibility: "public" },
    });

    // Update statistics: increment the number of views by 1
    if (!userId) {
      await this.prisma.statistics.upsert({
        where: { resumeId: resume.id },
        create: { views: 1, downloads: 0, resumeId: resume.id },
        update: { views: { increment: 1 } },
      });
    }

    return resume;
  }

  async update(userId: string, id: string, updateResumeDto: UpdateResumeDto) {
    try {
      const { locked } = await this.prisma.resume.findUniqueOrThrow({
        where: { id },
        select: { locked: true },
      });

      if (locked) throw new BadRequestException(ErrorMessage.ResumeLocked);

      return await this.prisma.resume.update({
        data: {
          title: updateResumeDto.title,
          slug: updateResumeDto.slug,
          visibility: updateResumeDto.visibility,
          data: updateResumeDto.data as Prisma.JsonObject,
        },
        where: { userId_id: { userId, id } },
      });
    } catch (error) {
      if (error.code === "P2025") {
        Logger.error(error);
        throw new InternalServerErrorException(error);
      }
    }
  }

  lock(userId: string, id: string, set: boolean) {
    return this.prisma.resume.update({
      data: { locked: set },
      where: { userId_id: { userId, id } },
    });
  }

  async remove(userId: string, id: string) {
    await Promise.all([
      // Remove files in storage, and their cached keys
      this.storageService.deleteObject(userId, "resumes", id),
      this.storageService.deleteObject(userId, "previews", id),
    ]);

    return this.prisma.resume.delete({ where: { userId_id: { userId, id } } });
  }

  async printResume(resume: ResumeDto, userId?: string) {
    const url = await this.printerService.printResume(resume);

    // Update statistics: increment the number of downloads by 1
    if (!userId) {
      await this.prisma.statistics.upsert({
        where: { resumeId: resume.id },
        create: { views: 0, downloads: 1, resumeId: resume.id },
        update: { downloads: { increment: 1 } },
      });
    }

    return url;
  }

  printPreview(resume: ResumeDto) {
    return this.printerService.printPreview(resume);
  }
}


================================================
File: apps/server/src/resume/decorators/resume.decorator.ts
================================================
import type { ExecutionContext } from "@nestjs/common";
import { createParamDecorator } from "@nestjs/common";
import type { ResumeDto } from "@reactive-resume/dto";

export const Resume = createParamDecorator(
  (data: keyof ResumeDto | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const resume = request.payload?.resume as ResumeDto;

    return data ? resume[data] : resume;
  },
);


================================================
File: apps/server/src/resume/guards/resume.guard.ts
================================================
import { CanActivate, ExecutionContext, Injectable, NotFoundException } from "@nestjs/common";
import { UserWithSecrets } from "@reactive-resume/dto";
import { ErrorMessage } from "@reactive-resume/utils";
import { Request } from "express";

import { ResumeService } from "../resume.service";

@Injectable()
export class ResumeGuard implements CanActivate {
  constructor(private readonly resumeService: ResumeService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const user = request.user as UserWithSecrets | false;

    try {
      const resume = await this.resumeService.findOne(
        request.params.id,
        user ? user.id : undefined,
      );

      // First check if the resume is public, if yes, attach the resume to the request payload.
      if (resume.visibility === "public") {
        request.payload = { resume };
      }

      // If the resume is private and the user is authenticated and is the owner of the resume, attach the resume to the request payload.
      // Else, if either the user is not authenticated or is not the owner of the resume, throw a 404 error.
      if (resume.visibility === "private") {
        if (user && user.id === resume.userId) {
          request.payload = { resume };
        } else {
          throw new NotFoundException(ErrorMessage.ResumeNotFound);
        }
      }

      return true;
    } catch {
      throw new NotFoundException(ErrorMessage.ResumeNotFound);
    }
  }
}


================================================
File: libs/dto/src/resume/create.ts
================================================
import { createId } from "@paralleldrive/cuid2";
import slugify from "@sindresorhus/slugify";
import { createZodDto } from "nestjs-zod/dto";
import { z } from "zod";

export const createResumeSchema = z.object({
  title: z.string().min(1),
  slug: z
    .string()
    .min(1)
    .transform((value) => {
      const slug = slugify(value);
      if (!slug) return createId();
      return slug;
    })
    .optional(),
  visibility: z.enum(["public", "private"]).default("private"),
});

export class CreateResumeDto extends createZodDto(createResumeSchema) {}


================================================
File: libs/dto/src/resume/delete.ts
================================================
import { idSchema } from "@reactive-resume/schema";
import { createZodDto } from "nestjs-zod/dto";
import { z } from "zod";

export const deleteResumeSchema = z.object({
  id: idSchema,
});

export class DeleteResumeDto extends createZodDto(deleteResumeSchema) {}


================================================
File: libs/dto/src/resume/import.ts
================================================
import { createId } from "@paralleldrive/cuid2";
import { resumeDataSchema } from "@reactive-resume/schema";
import slugify from "@sindresorhus/slugify";
import { createZodDto } from "nestjs-zod/dto";
import { z } from "zod";

export const importResumeSchema = z.object({
  title: z.string().optional(),
  slug: z
    .string()
    .min(1)
    .transform((value) => {
      const slug = slugify(value);
      if (slug === "") return createId();
      return slug;
    })
    .optional(),
  visibility: z.enum(["public", "private"]).default("private").optional(),
  data: resumeDataSchema,
});

export class ImportResumeDto extends createZodDto(importResumeSchema) {}


================================================
File: libs/dto/src/resume/index.ts
================================================
export * from "./create";
export * from "./delete";
export * from "./import";
export * from "./resume";
export * from "./update";
export * from "./url";


================================================
File: libs/dto/src/resume/resume.ts
================================================
import { defaultResumeData, idSchema, resumeDataSchema } from "@reactive-resume/schema";
import { dateSchema } from "@reactive-resume/utils";
import { createZodDto } from "nestjs-zod/dto";
import { z } from "zod";

import { userSchema } from "../user";

export const resumeSchema = z.object({
  id: idSchema,
  title: z.string(),
  slug: z.string(),
  data: resumeDataSchema.default(defaultResumeData),
  visibility: z.enum(["private", "public"]).default("private"),
  locked: z.boolean().default(false),
  userId: idSchema,
  user: userSchema.optional(),
  createdAt: dateSchema,
  updatedAt: dateSchema,
});

export class ResumeDto extends createZodDto(resumeSchema) {}


================================================
File: libs/dto/src/resume/update.ts
================================================
import { createZodDto } from "nestjs-zod/dto";

import { resumeSchema } from "./resume";

export const updateResumeSchema = resumeSchema.partial();

export class UpdateResumeDto extends createZodDto(updateResumeSchema) {}


================================================
File: libs/dto/src/resume/url.ts
================================================
import { createZodDto } from "nestjs-zod/dto";
import { z } from "zod";

export const urlSchema = z.object({ url: z.string().url() });

export class UrlDto extends createZodDto(urlSchema) {}


================================================
File: libs/parser/src/reactive-resume/index.ts
================================================
import type { ResumeData } from "@reactive-resume/schema";
import { resumeDataSchema } from "@reactive-resume/schema";
import type { Json } from "@reactive-resume/utils";
import type { Schema } from "zod";

import type { Parser } from "../interfaces/parser";

export class ReactiveResumeParser implements Parser<Json, ResumeData> {
  schema: Schema;

  constructor() {
    this.schema = resumeDataSchema;
  }

  readFile(file: File): Promise<Json> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      // eslint-disable-next-line unicorn/prefer-add-event-listener
      reader.onload = () => {
        try {
          const result = JSON.parse(reader.result as string) as Json;
          resolve(result);
        } catch {
          reject(new Error("Failed to parse JSON"));
        }
      };

      // eslint-disable-next-line unicorn/prefer-add-event-listener
      reader.onerror = () => {
        reject(new Error("Failed to read the file"));
      };

      // eslint-disable-next-line unicorn/prefer-blob-reading-methods
      reader.readAsText(file);
    });
  }

  validate(data: Json) {
    return this.schema.parse(data) as ResumeData;
  }

  convert(data: ResumeData) {
    return data;
  }
}


================================================
File: libs/parser/src/reactive-resume-v3/index.ts
================================================
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createId } from "@paralleldrive/cuid2";
import {
  defaultAward,
  defaultCertification,
  defaultEducation,
  defaultExperience,
  defaultInterest,
  defaultLanguage,
  defaultProfile,
  defaultProject,
  defaultPublication,
  defaultReference,
  defaultResumeData,
  defaultSkill,
  defaultVolunteer,
} from "@reactive-resume/schema";
import type { Json } from "@reactive-resume/utils";
import { isUrl } from "@reactive-resume/utils";
import type { Schema } from "zod";

import type { Parser } from "../interfaces/parser";
import type { ReactiveResumeV3 } from "./schema";
import { reactiveResumeV3Schema } from "./schema";

export * from "./schema";

export class ReactiveResumeV3Parser implements Parser<Json, ReactiveResumeV3> {
  schema: Schema;

  constructor() {
    this.schema = reactiveResumeV3Schema;
  }

  readFile(file: File): Promise<Json> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      // eslint-disable-next-line unicorn/prefer-add-event-listener
      reader.onload = () => {
        try {
          const result = JSON.parse(reader.result as string) as Json;
          resolve(result);
        } catch {
          reject(new Error("Failed to parse JSON"));
        }
      };

      // eslint-disable-next-line unicorn/prefer-add-event-listener
      reader.onerror = () => {
        reject(new Error("Failed to read the file"));
      };

      // eslint-disable-next-line unicorn/prefer-blob-reading-methods
      reader.readAsText(file);
    });
  }

  validate(data: Json) {
    return this.schema.parse(data) as ReactiveResumeV3;
  }

  convert(data: ReactiveResumeV3) {
    const result = JSON.parse(JSON.stringify(defaultResumeData));

    // Basics
    result.basics.name = data.basics.name ?? "";
    result.basics.email = data.basics.email;
    result.basics.phone = data.basics.phone ?? "";
    result.basics.headline = data.basics.headline ?? "";
    result.basics.location = data.basics.location.address ?? "";
    result.sections.summary.content =
      (typeof data.basics.summary === "string" ? data.basics.summary : data.basics.summary?.body) ??
      "";
    result.basics.picture.url = isUrl(data.basics.photo.url) ? data.basics.photo.url! : "";

    // Profiles
    if (data.basics.profiles && data.basics.profiles.length > 0) {
      for (const profile of data.basics.profiles) {
        result.sections.profiles.items.push({
          ...defaultProfile,
          id: createId(),
          network: profile.network ?? "",
          username: profile.username ?? "",
          icon: (profile.network ?? "").toLocaleLowerCase(),
          url: { ...defaultProfile.url, href: isUrl(profile.url) ? profile.url! : "" },
        });
      }
    }

    // Work
    if (data.sections.work?.items && data.sections.work.items.length > 0) {
      for (const work of data.sections.work.items) {
        if (!work) continue;

        result.sections.experience.items.push({
          ...defaultExperience,
          id: createId(),
          company: work.name ?? "",
          position: work.position ?? "",
          summary: work.summary ?? "",
          date: `${work.date?.start} - ${work.date?.end}`,
          url: { ...defaultExperience.url, href: isUrl(work.url) ? work.url! : "" },
        });
      }
    }

    // Awards
    if (data.sections.awards?.items && data.sections.awards.items.length > 0) {
      for (const award of data.sections.awards.items) {
        if (!award) continue;

        result.sections.awards.items.push({
          ...defaultAward,
          id: createId(),
          title: award.title ?? "",
          awarder: award.awarder ?? "",
          date: award.date ?? "",
          summary: award.summary ?? "",
          url: { ...defaultAward.url, href: isUrl(award.url) ? award.url! : "" },
        });
      }
    }

    // Skills
    if (data.sections.skills?.items && data.sections.skills.items.length > 0) {
      for (const skill of data.sections.skills.items) {
        if (!skill) continue;

        result.sections.skills.items.push({
          ...defaultSkill,
          id: createId(),
          name: skill.name ?? "",
          level: Math.floor(skill.levelNum / 2),
          description: skill.level ?? "",
          keywords: Array.isArray(skill.keywords)
            ? (skill.keywords.filter(Boolean) as string[])
            : [],
        });
      }
    }

    // Projects
    if (data.sections.projects?.items && data.sections.projects.items.length > 0) {
      for (const project of data.sections.projects.items) {
        if (!project) continue;

        result.sections.projects.items.push({
          ...defaultProject,
          id: createId(),
          name: project.name ?? "",
          summary: project.summary ?? "",
          description: project.description ?? "",
          date: `${project.date?.start} - ${project.date?.end}`,
          keywords: Array.isArray(project.keywords)
            ? (project.keywords.filter(Boolean) as string[])
            : [],
          url: { ...defaultProject.url, href: isUrl(project.url) ? project.url! : "" },
        });
      }
    }

    // Education
    if (data.sections.education?.items && data.sections.education.items.length > 0) {
      for (const education of data.sections.education.items) {
        if (!education) continue;

        result.sections.education.items.push({
          ...defaultEducation,
          id: createId(),
          institution: education.institution ?? "",
          studyType: education.degree ?? "",
          area: education.area ?? "",
          score: education.score ?? "",
          summary: education.summary ?? "",
          date: `${education.date?.start} - ${education.date?.end}`,
          url: { ...defaultEducation.url, href: isUrl(education.url) ? education.url! : "" },
        });
      }
    }

    // Interests
    if (data.sections.interests?.items && data.sections.interests.items.length > 0) {
      for (const interest of data.sections.interests.items) {
        if (!interest) continue;

        result.sections.interests.items.push({
          ...defaultInterest,
          id: createId(),
          name: interest.name ?? "",
          keywords: Array.isArray(interest.keywords)
            ? (interest.keywords.filter(Boolean) as string[])
            : [],
        });
      }
    }

    // Languages
    if (data.sections.languages?.items && data.sections.languages.items.length > 0) {
      for (const language of data.sections.languages.items) {
        if (!language) continue;

        result.sections.languages.items.push({
          ...defaultLanguage,
          id: createId(),
          name: language.name ?? "",
          description: language.level ?? "",
          level: Math.floor(language.levelNum / 2),
        });
      }
    }

    // Volunteer
    if (data.sections.volunteer?.items && data.sections.volunteer.items.length > 0) {
      for (const volunteer of data.sections.volunteer.items) {
        if (!volunteer) continue;

        result.sections.volunteer.items.push({
          ...defaultVolunteer,
          id: createId(),
          organization: volunteer.organization ?? "",
          position: volunteer.position ?? "",
          summary: volunteer.summary ?? "",
          date: `${volunteer.date?.start} - ${volunteer.date?.end}`,
          url: { ...defaultVolunteer.url, href: isUrl(volunteer.url) ? volunteer.url! : "" },
        });
      }
    }

    // References
    if (data.sections.references?.items && data.sections.references.items.length > 0) {
      for (const reference of data.sections.references.items) {
        if (!reference) continue;

        result.sections.references.items.push({
          ...defaultReference,
          id: createId(),
          name: reference.name ?? "",
          summary: reference.summary ?? "",
          description: reference.relationship ?? "",
        });
      }
    }

    // Publications
    if (data.sections.publications?.items && data.sections.publications.items.length > 0) {
      for (const publication of data.sections.publications.items) {
        if (!publication) continue;

        result.sections.publications.items.push({
          ...defaultPublication,
          id: createId(),
          name: publication.name ?? "",
          summary: publication.summary ?? "",
          date: publication.date ?? "",
          url: { ...defaultPublication.url, href: isUrl(publication.url) ? publication.url! : "" },
        });
      }
    }

    // Certifications
    if (data.sections.certifications?.items && data.sections.certifications.items.length > 0) {
      for (const certification of data.sections.certifications.items) {
        if (!certification) continue;

        result.sections.certifications.items.push({
          ...defaultCertification,
          id: createId(),
          name: certification.name ?? "",
          issuer: certification.issuer ?? "",
          summary: certification.summary ?? "",
          date: certification.date ?? "",
          url: {
            ...defaultCertification.url,
            href: isUrl(certification.url) ? certification.url! : "",
          },
        });
      }
    }

    return result;
  }
}


================================================
File: libs/parser/src/reactive-resume-v3/schema.ts
================================================
import { z } from "zod";

const dateSchema = z
  .object({ start: z.string().optional(), end: z.string().optional() })
  .optional();

const profileSchema = z.object({
  id: z.string().optional(),
  url: z.string().optional(),
  network: z.string().optional(),
  username: z.string().optional(),
});

const basicsSchema = z.object({
  name: z.string().optional(),
  email: z.literal("").or(z.string().email()),
  phone: z.string().optional(),
  headline: z.string().optional(),
  summary: z
    .string()
    .or(
      z.object({
        body: z.string().optional(),
        visible: z.boolean().default(true),
        heading: z.string().optional(),
      }),
    )
    .optional(),
  birthdate: z.string().optional(),
  website: z.string().optional(),
  profiles: z.array(profileSchema).optional(),
  location: z.object({
    address: z.string().optional(),
    postalCode: z.string().optional(),
    city: z.string().optional(),
    country: z.string().optional(),
    region: z.string().optional(),
  }),
  photo: z.object({
    visible: z.boolean(),
    url: z.string().optional(),
    filters: z.object({
      shape: z.string().nullable().optional(),
      size: z.coerce.number(),
      border: z.boolean(),
      grayscale: z.boolean(),
    }),
  }),
});

const sectionSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  type: z.enum(["basic", "work", "custom"]),
  columns: z.coerce.number().or(z.null()).default(1),
  visible: z.boolean(),
});

const workSchema = z
  .object({
    id: z.string().optional(),
    url: z.string().optional(),
    date: dateSchema,
    name: z.string().optional(),
    position: z.string().optional(),
    summary: z.string().nullable().optional(),
  })
  .nullable();

const awardSchema = z
  .object({
    id: z.string().optional(),
    url: z.string().optional(),
    date: z.string().optional(),
    title: z.string().optional(),
    awarder: z.string().optional(),
    summary: z.string().nullable().optional(),
  })
  .nullable();

const skillSchema = z
  .object({
    id: z.string().optional(),
    name: z.string().optional(),
    level: z.coerce.string().optional(),
    keywords: z.array(z.string().nullable()).optional(),
    levelNum: z.coerce.number(),
  })
  .nullable();

const projectSchema = z
  .object({
    id: z.string().optional(),
    url: z.string().optional(),
    date: dateSchema,
    name: z.string().optional(),
    summary: z.string().nullable().optional(),
    keywords: z.array(z.string().nullable()).optional(),
    description: z.string().optional(),
  })
  .nullable();

const educationSchema = z
  .object({
    id: z.string().optional(),
    url: z.string().optional(),
    area: z.string().optional(),
    date: dateSchema,
    score: z.string().optional(),
    degree: z.string().optional(),
    courses: z.array(z.string().nullable()).optional(),
    summary: z.string().nullable().optional(),
    institution: z.string().optional(),
  })
  .nullable();

const interestSchema = z
  .object({
    id: z.string().optional(),
    name: z.string().optional(),
    keywords: z.array(z.string().nullable()).optional(),
  })
  .nullable();

const languageSchema = z
  .object({
    id: z.string().optional(),
    name: z.string().optional(),
    level: z.string().optional(),
    levelNum: z.coerce.number(),
  })
  .nullable();

const volunteerSchema = z
  .object({
    id: z.string().optional(),
    organization: z.string().optional(),
    position: z.string().optional(),
    date: dateSchema,
    url: z.string().optional(),
    summary: z.string().nullable().optional(),
  })
  .nullable();

const referenceSchema = z
  .object({
    id: z.string().optional(),
    name: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    summary: z.string().nullable().optional(),
    relationship: z.string().optional(),
  })
  .nullable();

const publicationSchema = z
  .object({
    id: z.string().optional(),
    url: z.string().optional(),
    date: z.string().optional(),
    name: z.string().optional(),
    publisher: z.string().optional(),
    summary: z.string().nullable().optional(),
  })
  .nullable();

const certificationSchema = z
  .object({
    id: z.string().optional(),
    url: z.string().optional(),
    date: z.string().optional(),
    name: z.string().optional(),
    issuer: z.string().optional(),
    summary: z.string().nullable().optional(),
  })
  .nullable();

const metadataSchema = z
  .object({
    css: z.object({ value: z.string().optional(), visible: z.boolean() }).optional(),
    date: z.object({ format: z.string().optional() }).optional(),
    theme: z
      .object({
        text: z.string().optional(),
        primary: z.string().optional(),
        background: z.string().optional(),
      })
      .optional(),
    layout: z.array(z.array(z.array(z.string().nullable()))).optional(),
    locale: z.string().optional(),
    template: z.string().optional(),
    typography: z
      .object({
        size: z
          .object({ body: z.coerce.number().optional(), heading: z.coerce.number().optional() })
          .optional(),
        family: z
          .object({ body: z.string().optional(), heading: z.string().optional() })
          .optional(),
      })
      .optional(),
  })
  .optional();

export const reactiveResumeV3Schema = z.object({
  public: z.boolean(),
  basics: basicsSchema,
  sections: z.object({
    work: sectionSchema.extend({ items: z.array(workSchema) }).optional(),
    awards: sectionSchema.extend({ items: z.array(awardSchema) }).optional(),
    skills: sectionSchema.extend({ items: z.array(skillSchema) }).optional(),
    projects: sectionSchema.extend({ items: z.array(projectSchema) }).optional(),
    education: sectionSchema.extend({ items: z.array(educationSchema) }).optional(),
    interests: sectionSchema.extend({ items: z.array(interestSchema) }).optional(),
    languages: sectionSchema.extend({ items: z.array(languageSchema) }).optional(),
    volunteer: sectionSchema.extend({ items: z.array(volunteerSchema) }).optional(),
    references: sectionSchema.extend({ items: z.array(referenceSchema) }).optional(),
    publications: sectionSchema.extend({ items: z.array(publicationSchema) }).optional(),
    certifications: sectionSchema
      .extend({
        items: z.array(certificationSchema),
      })
      .optional(),
  }),
  metadata: metadataSchema,
});

export type ReactiveResumeV3 = z.infer<typeof reactiveResumeV3Schema>;


================================================
File: libs/schema/src/index.ts
================================================
import { z } from "zod";

import { basicsSchema, defaultBasics } from "./basics";
import { defaultMetadata, metadataSchema } from "./metadata";
import { defaultSections, sectionsSchema } from "./sections";

// Schema
export const resumeDataSchema = z.object({
  basics: basicsSchema,
  sections: sectionsSchema,
  metadata: metadataSchema,
});

// Type
export type ResumeData = z.infer<typeof resumeDataSchema>;

// Defaults
export const defaultResumeData: ResumeData = {
  basics: defaultBasics,
  sections: defaultSections,
  metadata: defaultMetadata,
};

export * from "./basics";
export * from "./metadata";
export * from "./sample";
export * from "./sections";
export * from "./shared";


================================================
File: libs/schema/src/sample.ts
================================================
import type { ResumeData } from "./index";

export const sampleResume: ResumeData = {
  basics: {
    name: "John Doe",
    headline: "Creative and Innovative Web Developer",
    email: "john.doe@gmail.com",
    phone: "(555) 123-4567",
    location: "Pleasantville, CA 94588",
    url: {
      label: "",
      href: "https://johndoe.me/",
    },
    customFields: [],
    picture: {
      url: "https://i.imgur.com/HgwyOuJ.jpg",
      size: 120,
      aspectRatio: 1,
      borderRadius: 0,
      effects: {
        hidden: false,
        border: false,
        grayscale: false,
      },
    },
  },
  sections: {
    summary: {
      name: "Summary",
      columns: 1,
      separateLinks: true,
      visible: true,
      id: "summary",
      content:
        "<p>Innovative Web Developer with 5 years of experience in building impactful and user-friendly websites and applications. Specializes in <strong>front-end technologies</strong> and passionate about modern web standards and cutting-edge development techniques. Proven track record of leading successful projects from concept to deployment.</p>",
    },
    awards: {
      name: "Awards",
      columns: 1,
      separateLinks: true,
      visible: true,
      id: "awards",
      items: [],
    },
    certifications: {
      name: "Certifications",
      columns: 1,
      separateLinks: true,
      visible: true,
      id: "certifications",
      items: [
        {
          id: "spdhh9rrqi1gvj0yqnbqunlo",
          visible: true,
          name: "Full-Stack Web Development",
          issuer: "CodeAcademy",
          date: "2020",
          summary: "",
          url: {
            label: "",
            href: "",
          },
        },
        {
          id: "n838rddyqv47zexn6cxauwqp",
          visible: true,
          name: "AWS Certified Developer",
          issuer: "Amazon Web Services",
          date: "2019",
          summary: "",
          url: {
            label: "",
            href: "",
          },
        },
      ],
    },
    education: {
      name: "Education",
      columns: 1,
      separateLinks: true,
      visible: true,
      id: "education",
      items: [
        {
          id: "yo3p200zo45c6cdqc6a2vtt3",
          visible: true,
          institution: "University of California",
          studyType: "Bachelor's in Computer Science",
          area: "Berkeley, CA",
          score: "",
          date: "August 2012 to May 2016",
          summary: "",
          url: {
            label: "",
            href: "",
          },
        },
      ],
    },
    experience: {
      name: "Experience",
      columns: 1,
      separateLinks: true,
      visible: true,
      id: "experience",
      items: [
        {
          id: "lhw25d7gf32wgdfpsktf6e0x",
          visible: true,
          company: "Creative Solutions Inc.",
          position: "Senior Web Developer",
          location: "San Francisco, CA",
          date: "January 2019 to Present",
          summary:
            "<ul><li><p>Spearheaded the redesign of the main product website, resulting in a 40% increase in user engagement.</p></li><li><p>Developed and implemented a new responsive framework, improving cross-device compatibility.</p></li><li><p>Mentored a team of four junior developers, fostering a culture of technical excellence.</p></li></ul>",
          url: {
            label: "",
            href: "https://creativesolutions.inc/",
          },
        },
        {
          id: "r6543lil53ntrxmvel53gbtm",
          visible: true,
          company: "TechAdvancers",
          position: "Web Developer",
          location: "San Jose, CA",
          date: "June 2016 to December 2018",
          summary:
            "<ul><li><p>Collaborated in a team of 10 to develop high-quality web applications using React.js and Node.js.</p></li><li><p>Managed the integration of third-party services such as Stripe for payments and Twilio for SMS services.</p></li><li><p>Optimized application performance, achieving a 30% reduction in load times.</p></li></ul>",
          url: {
            label: "",
            href: "https://techadvancers.com/",
          },
        },
      ],
    },
    volunteer: {
      name: "Volunteering",
      columns: 1,
      separateLinks: true,
      visible: true,
      id: "volunteer",
      items: [],
    },
    interests: {
      name: "Interests",
      columns: 1,
      separateLinks: true,
      visible: true,
      id: "interests",
      items: [],
    },
    languages: {
      name: "Languages",
      columns: 1,
      separateLinks: true,
      visible: true,
      id: "languages",
      items: [],
    },
    profiles: {
      name: "Profiles",
      columns: 1,
      separateLinks: true,
      visible: true,
      id: "profiles",
      items: [
        {
          id: "cnbk5f0aeqvhx69ebk7hktwd",
          visible: true,
          network: "LinkedIn",
          username: "johndoe",
          icon: "linkedin",
          url: {
            label: "",
            href: "https://linkedin.com/in/johndoe",
          },
        },
        {
          id: "ukl0uecvzkgm27mlye0wazlb",
          visible: true,
          network: "GitHub",
          username: "johndoe",
          icon: "github",
          url: {
            label: "",
            href: "https://github.com/johndoe",
          },
        },
      ],
    },
    projects: {
      name: "Projects",
      columns: 1,
      separateLinks: true,
      visible: true,
      id: "projects",
      items: [
        {
          id: "yw843emozcth8s1ubi1ubvlf",
          visible: true,
          name: "E-Commerce Platform",
          description: "Project Lead",
          date: "",
          summary:
            "<p>Led the development of a full-stack e-commerce platform, improving sales conversion by 25%.</p>",
          keywords: [],
          url: {
            label: "",
            href: "",
          },
        },
        {
          id: "ncxgdjjky54gh59iz2t1xi1v",
          visible: true,
          name: "Interactive Dashboard",
          description: "Frontend Developer",
          date: "",
          summary:
            "<p>Created an interactive analytics dashboard for a SaaS application, enhancing data visualization for clients.</p>",
          keywords: [],
          url: {
            label: "",
            href: "",
          },
        },
      ],
    },
    publications: {
      name: "Publications",
      columns: 1,
      separateLinks: true,
      visible: true,
      id: "publications",
      items: [],
    },
    references: {
      name: "References",
      columns: 1,
      separateLinks: true,
      visible: false,
      id: "references",
      items: [
        {
          id: "f2sv5z0cce6ztjl87yuk8fak",
          visible: true,
          name: "Available upon request",
          description: "",
          summary: "",
          url: {
            label: "",
            href: "",
          },
        },
      ],
    },
    skills: {
      name: "Skills",
      columns: 1,
      separateLinks: true,
      visible: true,
      id: "skills",
      items: [
        {
          id: "hn0keriukh6c0ojktl9gsgjm",
          visible: true,
          name: "Web Technologies",
          description: "Advanced",
          level: 0,
          keywords: ["HTML5", "JavaScript", "PHP", "Python"],
        },
        {
          id: "r8c3y47vykausqrgmzwg5pur",
          visible: true,
          name: "Web Frameworks",
          description: "Intermediate",
          level: 0,
          keywords: ["React.js", "Angular", "Vue.js", "Laravel", "Django"],
        },
        {
          id: "b5l75aseexqv17quvqgh73fe",
          visible: true,
          name: "Tools",
          description: "Intermediate",
          level: 0,
          keywords: ["Webpack", "Git", "Jenkins", "Docker", "JIRA"],
        },
      ],
    },
    custom: {},
  },
  metadata: {
    template: "glalie",
    layout: [
      [
        ["summary", "experience", "education", "projects", "references"],
        [
          "profiles",
          "skills",
          "certifications",
          "interests",
          "languages",
          "awards",
          "volunteer",
          "publications",
        ],
      ],
    ],
    css: {
      value: "* {\n\toutline: 1px solid #000;\n\toutline-offset: 4px;\n}",
      visible: false,
    },
    page: {
      margin: 14,
      format: "a4",
      options: {
        breakLine: true,
        pageNumbers: true,
      },
    },
    theme: {
      background: "#ffffff",
      text: "#000000",
      primary: "#ca8a04",
    },
    typography: {
      font: {
        family: "Merriweather",
        subset: "latin",
        variants: ["regular"],
        size: 13,
      },
      lineHeight: 1.75,
      hideIcons: false,
      underlineLinks: true,
    },
    notes: "",
  },
};


================================================
File: libs/schema/src/sections/award.ts
================================================
import { z } from "zod";

import { defaultItem, defaultUrl, itemSchema, urlSchema } from "../shared";

// Schema
export const awardSchema = itemSchema.extend({
  title: z.string().min(1),
  awarder: z.string(),
  date: z.string(),
  summary: z.string(),
  url: urlSchema,
});

// Type
export type Award = z.infer<typeof awardSchema>;

// Defaults
export const defaultAward: Award = {
  ...defaultItem,
  title: "",
  awarder: "",
  date: "",
  summary: "",
  url: defaultUrl,
};


================================================
File: libs/schema/src/sections/certification.ts
================================================
import { z } from "zod";

import { defaultItem, defaultUrl, itemSchema, urlSchema } from "../shared";

// Schema
export const certificationSchema = itemSchema.extend({
  name: z.string().min(1),
  issuer: z.string(),
  date: z.string(),
  summary: z.string(),
  url: urlSchema,
});

// Type
export type Certification = z.infer<typeof certificationSchema>;

// Defaults
export const defaultCertification: Certification = {
  ...defaultItem,
  name: "",
  issuer: "",
  date: "",
  summary: "",
  url: defaultUrl,
};


================================================
File: libs/schema/src/sections/custom-section.ts
================================================
import { z } from "zod";

import { defaultItem, defaultUrl, itemSchema, urlSchema } from "../shared";

// Schema
export const customSectionSchema = itemSchema.extend({
  name: z.string(),
  description: z.string(),
  date: z.string(),
  location: z.string(),
  summary: z.string(),
  keywords: z.array(z.string()).default([]),
  url: urlSchema,
});

// Type
export type CustomSection = z.infer<typeof customSectionSchema>;

// Defaults
export const defaultCustomSection: CustomSection = {
  ...defaultItem,
  name: "",
  description: "",
  date: "",
  location: "",
  summary: "",
  keywords: [],
  url: defaultUrl,
};


================================================
File: libs/schema/src/sections/education.ts
================================================
import { z } from "zod";

import { defaultItem, defaultUrl, itemSchema, urlSchema } from "../shared";

// Schema
export const educationSchema = itemSchema.extend({
  institution: z.string().min(1),
  studyType: z.string(),
  area: z.string(),
  score: z.string(),
  date: z.string(),
  summary: z.string(),
  url: urlSchema,
});

// Type
export type Education = z.infer<typeof educationSchema>;

// Defaults
export const defaultEducation: Education = {
  ...defaultItem,
  id: "",
  institution: "",
  studyType: "",
  area: "",
  score: "",
  date: "",
  summary: "",
  url: defaultUrl,
};


================================================
File: libs/schema/src/sections/experience.ts
================================================
import { z } from "zod";

import { defaultItem, defaultUrl, itemSchema, urlSchema } from "../shared";

// Schema
export const experienceSchema = itemSchema.extend({
  company: z.string().min(1),
  position: z.string(),
  location: z.string(),
  date: z.string(),
  summary: z.string(),
  url: urlSchema,
});

// Type
export type Experience = z.infer<typeof experienceSchema>;

// Defaults
export const defaultExperience: Experience = {
  ...defaultItem,
  company: "",
  position: "",
  location: "",
  date: "",
  summary: "",
  url: defaultUrl,
};


================================================
File: libs/schema/src/sections/index.ts
================================================
import { z } from "zod";

import type { FilterKeys } from "../shared";
import { idSchema } from "../shared";
import { awardSchema } from "./award";
import { certificationSchema } from "./certification";
import { customSectionSchema } from "./custom-section";
import { educationSchema } from "./education";
import { experienceSchema } from "./experience";
import { interestSchema } from "./interest";
import { languageSchema } from "./language";
import { profileSchema } from "./profile";
import { projectSchema } from "./project";
import { publicationSchema } from "./publication";
import { referenceSchema } from "./reference";
import { skillSchema } from "./skill";
import { volunteerSchema } from "./volunteer";

// Schema
export const sectionSchema = z.object({
  name: z.string(),
  columns: z.number().min(1).max(5).default(1),
  separateLinks: z.boolean().default(true),
  visible: z.boolean().default(true),
});

// Schema
export const customSchema = sectionSchema.extend({
  id: idSchema,
  items: z.array(customSectionSchema),
});

export const sectionsSchema = z.object({
  summary: sectionSchema.extend({
    id: z.literal("summary"),
    content: z.string().default(""),
  }),
  awards: sectionSchema.extend({
    id: z.literal("awards"),
    items: z.array(awardSchema),
  }),
  certifications: sectionSchema.extend({
    id: z.literal("certifications"),
    items: z.array(certificationSchema),
  }),
  education: sectionSchema.extend({
    id: z.literal("education"),
    items: z.array(educationSchema),
  }),
  experience: sectionSchema.extend({
    id: z.literal("experience"),
    items: z.array(experienceSchema),
  }),
  volunteer: sectionSchema.extend({
    id: z.literal("volunteer"),
    items: z.array(volunteerSchema),
  }),
  interests: sectionSchema.extend({
    id: z.literal("interests"),
    items: z.array(interestSchema),
  }),
  languages: sectionSchema.extend({
    id: z.literal("languages"),
    items: z.array(languageSchema),
  }),
  profiles: sectionSchema.extend({
    id: z.literal("profiles"),
    items: z.array(profileSchema),
  }),
  projects: sectionSchema.extend({
    id: z.literal("projects"),
    items: z.array(projectSchema),
  }),
  publications: sectionSchema.extend({
    id: z.literal("publications"),
    items: z.array(publicationSchema),
  }),
  references: sectionSchema.extend({
    id: z.literal("references"),
    items: z.array(referenceSchema),
  }),
  skills: sectionSchema.extend({
    id: z.literal("skills"),
    items: z.array(skillSchema),
  }),
  custom: z.record(z.string(), customSchema),
});

// Detailed Types
export type Section = z.infer<typeof sectionSchema>;
export type Sections = z.infer<typeof sectionsSchema>;

export type SectionKey = "basics" | keyof Sections | `custom.${string}`;
export type SectionWithItem<T = unknown> = Sections[FilterKeys<Sections, { items: T[] }>];
export type SectionItem = SectionWithItem["items"][number];
export type CustomSectionGroup = z.infer<typeof customSchema>;

// Defaults
export const defaultSection: Section = {
  name: "",
  columns: 1,
  separateLinks: true,
  visible: true,
};

export const defaultSections: Sections = {
  summary: { ...defaultSection, id: "summary", name: "Summary", content: "" },
  awards: { ...defaultSection, id: "awards", name: "Awards", items: [] },
  certifications: { ...defaultSection, id: "certifications", name: "Certifications", items: [] },
  education: { ...defaultSection, id: "education", name: "Education", items: [] },
  experience: { ...defaultSection, id: "experience", name: "Experience", items: [] },
  volunteer: { ...defaultSection, id: "volunteer", name: "Volunteering", items: [] },
  interests: { ...defaultSection, id: "interests", name: "Interests", items: [] },
  languages: { ...defaultSection, id: "languages", name: "Languages", items: [] },
  profiles: { ...defaultSection, id: "profiles", name: "Profiles", items: [] },
  projects: { ...defaultSection, id: "projects", name: "Projects", items: [] },
  publications: { ...defaultSection, id: "publications", name: "Publications", items: [] },
  references: { ...defaultSection, id: "references", name: "References", items: [] },
  skills: { ...defaultSection, id: "skills", name: "Skills", items: [] },
  custom: {},
};

export * from "./award";
export * from "./certification";
export * from "./custom-section";
export * from "./education";
export * from "./experience";
export * from "./interest";
export * from "./language";
export * from "./profile";
export * from "./project";
export * from "./publication";
export * from "./reference";
export * from "./skill";
export * from "./volunteer";


================================================
File: libs/schema/src/sections/interest.ts
================================================
import { z } from "zod";

import { defaultItem, itemSchema } from "../shared";

// Schema
export const interestSchema = itemSchema.extend({
  name: z.string().min(1),
  keywords: z.array(z.string()).default([]),
});

// Type
export type Interest = z.infer<typeof interestSchema>;

// Defaults
export const defaultInterest: Interest = {
  ...defaultItem,
  name: "",
  keywords: [],
};


================================================
File: libs/schema/src/sections/language.ts
================================================
import { z } from "zod";

import { defaultItem, itemSchema } from "../shared";

// Schema
export const languageSchema = itemSchema.extend({
  name: z.string().min(1),
  description: z.string(),
  level: z.coerce.number().min(0).max(5).default(1),
});

// Type
export type Language = z.infer<typeof languageSchema>;

// Defaults
export const defaultLanguage: Language = {
  ...defaultItem,
  name: "",
  description: "",
  level: 1,
};


================================================
File: libs/schema/src/sections/profile.ts
================================================
import { z } from "zod";

import { defaultItem, defaultUrl, itemSchema, urlSchema } from "../shared";

// Schema
export const profileSchema = itemSchema.extend({
  network: z.string().min(1),
  username: z.string().min(1),
  icon: z
    .string()
    .describe(
      'Slug for the icon from https://simpleicons.org. For example, "github", "linkedin", etc.',
    ),
  url: urlSchema,
});

// Type
export type Profile = z.infer<typeof profileSchema>;

// Defaults
export const defaultProfile: Profile = {
  ...defaultItem,
  network: "",
  username: "",
  icon: "",
  url: defaultUrl,
};


================================================
File: libs/schema/src/sections/project.ts
================================================
import { z } from "zod";

import { defaultItem, defaultUrl, itemSchema, urlSchema } from "../shared";

// Schema
export const projectSchema = itemSchema.extend({
  name: z.string().min(1),
  description: z.string(),
  date: z.string(),
  summary: z.string(),
  keywords: z.array(z.string()).default([]),
  url: urlSchema,
});

// Type
export type Project = z.infer<typeof projectSchema>;

// Defaults
export const defaultProject: Project = {
  ...defaultItem,
  name: "",
  description: "",
  date: "",
  summary: "",
  keywords: [],
  url: defaultUrl,
};


================================================
File: libs/schema/src/sections/publication.ts
================================================
import { z } from "zod";

import { defaultItem, defaultUrl, itemSchema, urlSchema } from "../shared";

// Schema
export const publicationSchema = itemSchema.extend({
  name: z.string().min(1),
  publisher: z.string(),
  date: z.string(),
  summary: z.string(),
  url: urlSchema,
});

// Type
export type Publication = z.infer<typeof publicationSchema>;

// Defaults
export const defaultPublication: Publication = {
  ...defaultItem,
  name: "",
  publisher: "",
  date: "",
  summary: "",
  url: defaultUrl,
};


================================================
File: libs/schema/src/sections/reference.ts
================================================
import { z } from "zod";

import { defaultItem, defaultUrl, itemSchema, urlSchema } from "../shared";

// Schema
export const referenceSchema = itemSchema.extend({
  name: z.string().min(1),
  description: z.string(),
  summary: z.string(),
  url: urlSchema,
});

// Type
export type Reference = z.infer<typeof referenceSchema>;

// Defaults
export const defaultReference: Reference = {
  ...defaultItem,
  name: "",
  description: "",
  summary: "",
  url: defaultUrl,
};


================================================
File: libs/schema/src/sections/skill.ts
================================================
import { z } from "zod";

import { defaultItem, itemSchema } from "../shared";

// Schema
export const skillSchema = itemSchema.extend({
  name: z.string(),
  description: z.string(),
  level: z.coerce.number().min(0).max(5).default(1),
  keywords: z.array(z.string()).default([]),
});

// Type
export type Skill = z.infer<typeof skillSchema>;

// Defaults
export const defaultSkill: Skill = {
  ...defaultItem,
  name: "",
  description: "",
  level: 1,
  keywords: [],
};


================================================
File: libs/schema/src/sections/volunteer.ts
================================================
import { z } from "zod";

import { defaultItem, defaultUrl, itemSchema, urlSchema } from "../shared";

// Schema
export const volunteerSchema = itemSchema.extend({
  organization: z.string().min(1),
  position: z.string(),
  location: z.string(),
  date: z.string(),
  summary: z.string(),
  url: urlSchema,
});

// Type
export type Volunteer = z.infer<typeof volunteerSchema>;

// Defaults
export const defaultVolunteer: Volunteer = {
  ...defaultItem,
  organization: "",
  position: "",
  location: "",
  date: "",
  summary: "",
  url: defaultUrl,
};


