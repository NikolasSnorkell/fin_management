
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const KDE_FULL_SESSION: string;
	export const USER: string;
	export const PAM_KWALLET5_LOGIN: string;
	export const npm_config_user_agent: string;
	export const XDG_SEAT: string;
	export const XDG_SESSION_TYPE: string;
	export const SSH_AGENT_PID: string;
	export const npm_node_execpath: string;
	export const SHLVL: string;
	export const XCURSOR_SIZE: string;
	export const npm_config_noproxy: string;
	export const HOME: string;
	export const OLDPWD: string;
	export const KDE_APPLICATIONS_AS_SCOPE: string;
	export const LESS: string;
	export const DESKTOP_SESSION: string;
	export const NVM_NODEJS_ORG_MIRROR: string;
	export const npm_package_json: string;
	export const ZSH: string;
	export const LSCOLORS: string;
	export const GTK_RC_FILES: string;
	export const KDE_SESSION_VERSION: string;
	export const GTK_MODULES: string;
	export const XDG_SEAT_PATH: string;
	export const PAGER: string;
	export const LC_MONETARY: string;
	export const MANAGERPID: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const SYSTEMD_EXEC_PID: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const DBUS_STARTER_BUS_TYPE: string;
	export const P9K_TTY: string;
	export const npm_config_engine_strict: string;
	export const COLORTERM: string;
	export const COLOR: string;
	export const NVM_DIR: string;
	export const MANDATORY_PATH: string;
	export const IM_CONFIG_PHASE: string;
	export const LOGNAME: string;
	export const GTK_IM_MODULE: string;
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const JOURNAL_STREAM: string;
	export const _: string;
	export const _P9K_SSH_TTY: string;
	export const npm_config_prefix: string;
	export const npm_config_npm_version: string;
	export const XDG_SESSION_CLASS: string;
	export const DEFAULTS_PATH: string;
	export const XDG_SESSION_ID: string;
	export const TERM: string;
	export const npm_config_cache: string;
	export const GTK2_RC_FILES: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const GTK3_MODULES: string;
	export const INVOCATION_ID: string;
	export const SESSION_MANAGER: string;
	export const NVM_IOJS_ORG_MIRROR: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const XCURSOR_THEME: string;
	export const XDG_RUNTIME_DIR: string;
	export const XDG_SESSION_PATH: string;
	export const LC_ADDRESS: string;
	export const DISPLAY: string;
	export const TILIX_ID: string;
	export const LC_TELEPHONE: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const XAUTHORITY: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XMODIFIERS: string;
	export const LS_COLORS: string;
	export const npm_lifecycle_script: string;
	export const SSH_AUTH_SOCK: string;
	export const LC_NAME: string;
	export const SHELL: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const QT_ACCESSIBILITY: string;
	export const LC_MEASUREMENT: string;
	export const GPG_AGENT_INFO: string;
	export const LC_IDENTIFICATION: string;
	export const P9K_SSH: string;
	export const QT_IM_MODULE: string;
	export const XDG_VTNR: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const CLUTTER_IM_MODULE: string;
	export const XDG_DATA_DIRS: string;
	export const XDG_CONFIG_DIRS: string;
	export const DBUS_STARTER_ADDRESS: string;
	export const _P9K_TTY: string;
	export const NVM_CD_FLAGS: string;
	export const npm_config_global_prefix: string;
	export const LC_NUMERIC: string;
	export const npm_command: string;
	export const KDE_SESSION_UID: string;
	export const LC_PAPER: string;
	export const VTE_VERSION: string;
	export const NVM_RC_VERSION: string;
	export const INIT_CWD: string;
	export const EDITOR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		KDE_FULL_SESSION: string;
		USER: string;
		PAM_KWALLET5_LOGIN: string;
		npm_config_user_agent: string;
		XDG_SEAT: string;
		XDG_SESSION_TYPE: string;
		SSH_AGENT_PID: string;
		npm_node_execpath: string;
		SHLVL: string;
		XCURSOR_SIZE: string;
		npm_config_noproxy: string;
		HOME: string;
		OLDPWD: string;
		KDE_APPLICATIONS_AS_SCOPE: string;
		LESS: string;
		DESKTOP_SESSION: string;
		NVM_NODEJS_ORG_MIRROR: string;
		npm_package_json: string;
		ZSH: string;
		LSCOLORS: string;
		GTK_RC_FILES: string;
		KDE_SESSION_VERSION: string;
		GTK_MODULES: string;
		XDG_SEAT_PATH: string;
		PAGER: string;
		LC_MONETARY: string;
		MANAGERPID: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		SYSTEMD_EXEC_PID: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		DBUS_STARTER_BUS_TYPE: string;
		P9K_TTY: string;
		npm_config_engine_strict: string;
		COLORTERM: string;
		COLOR: string;
		NVM_DIR: string;
		MANDATORY_PATH: string;
		IM_CONFIG_PHASE: string;
		LOGNAME: string;
		GTK_IM_MODULE: string;
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		JOURNAL_STREAM: string;
		_: string;
		_P9K_SSH_TTY: string;
		npm_config_prefix: string;
		npm_config_npm_version: string;
		XDG_SESSION_CLASS: string;
		DEFAULTS_PATH: string;
		XDG_SESSION_ID: string;
		TERM: string;
		npm_config_cache: string;
		GTK2_RC_FILES: string;
		npm_config_node_gyp: string;
		PATH: string;
		GTK3_MODULES: string;
		INVOCATION_ID: string;
		SESSION_MANAGER: string;
		NVM_IOJS_ORG_MIRROR: string;
		NODE: string;
		npm_package_name: string;
		XCURSOR_THEME: string;
		XDG_RUNTIME_DIR: string;
		XDG_SESSION_PATH: string;
		LC_ADDRESS: string;
		DISPLAY: string;
		TILIX_ID: string;
		LC_TELEPHONE: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		XAUTHORITY: string;
		XDG_SESSION_DESKTOP: string;
		XMODIFIERS: string;
		LS_COLORS: string;
		npm_lifecycle_script: string;
		SSH_AUTH_SOCK: string;
		LC_NAME: string;
		SHELL: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		QT_ACCESSIBILITY: string;
		LC_MEASUREMENT: string;
		GPG_AGENT_INFO: string;
		LC_IDENTIFICATION: string;
		P9K_SSH: string;
		QT_IM_MODULE: string;
		XDG_VTNR: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		PWD: string;
		npm_execpath: string;
		CLUTTER_IM_MODULE: string;
		XDG_DATA_DIRS: string;
		XDG_CONFIG_DIRS: string;
		DBUS_STARTER_ADDRESS: string;
		_P9K_TTY: string;
		NVM_CD_FLAGS: string;
		npm_config_global_prefix: string;
		LC_NUMERIC: string;
		npm_command: string;
		KDE_SESSION_UID: string;
		LC_PAPER: string;
		VTE_VERSION: string;
		NVM_RC_VERSION: string;
		INIT_CWD: string;
		EDITOR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
