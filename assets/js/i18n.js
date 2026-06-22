(function () {
	'use strict';

	var STORAGE_KEY = 'site-lang';
	var DEFAULT_LANG = 'en';

	var translations = {
		doc_title: {
			en: "n_malder's WebSite",
			ru: 'Сайт n_malder'
		},
		welcome: {
			en: 'Welcome',
			ru: 'Добро пожаловать'
		},
		welcome_sub: {
			en: "to n_malder's website",
			ru: 'на сайт n_malder'
		},
		welcome_desc: {
			en: 'Here you can find information about Me, my Career, my public Speeches and my Contact information',
			ru: 'Здесь вы найдёте информацию обо мне, моей карьере, публичных выступлениях и контактных данных'
		},
		nav_about: { en: 'About', ru: 'Обо мне' },
		nav_career: { en: 'Career', ru: 'Карьера' },
		nav_speeches: { en: 'Speeches', ru: 'Выступления' },
		nav_contacts: { en: 'Contacts', ru: 'Контакты' },

		section_about: { en: 'About', ru: 'Обо мне' },
		section_career: { en: 'career', ru: 'карьера' },
		section_speeches: { en: 'speeches', ru: 'выступления' },
		section_contacts: { en: 'contacts', ru: 'контакты' },

		about_intro: {
			en: "I'm a middle Linux administrator. My technology stack:",
			ru: 'Я — Linux-администратор среднего уровня. Мой технологический стек:'
		},
		skill_1: {
			en: '<span class="skill-chunk">I have experience with Debian [9-13], Arch, Fedora [36-40],</span><span class="skill-chunk">TrueNas, FreeBSD, Astra Linux 1.[6-8];</span>',
			ru: '<span class="skill-chunk">Опыт работы с Debian [9-13], Arch, Fedora [36-40],</span><span class="skill-chunk">TrueNas, FreeBSD, Astra Linux 1.[6-8];</span>'
		},
		skill_2: {
			en: '<span class="skill-chunk">I know how to configure routers Mikrotik;</span>',
			ru: '<span class="skill-chunk">Умею настраивать маршрутизаторы Mikrotik;</span>'
		},
		skill_3: {
			en: '<span class="skill-chunk">I know how to write automated scripts in sh/bash and Golang;</span>',
			ru: '<span class="skill-chunk">Пишу автоматизированные скрипты на sh/bash и Golang;</span>'
		},
		skill_4: {
			en: '<span class="skill-chunk">I configure IaC (<a href="https://bundlewrap.org" target="_blank" rel="noopener noreferrer">BundleWrap</a>, <a href="https://www.ansible.com" target="_blank" rel="noopener noreferrer">Ansible</a>;</span>',
			ru: '<span class="skill-chunk">Настраиваю IaC (<a href="https://bundlewrap.org" target="_blank" rel="noopener noreferrer">BundleWrap</a>, <a href="https://www.ansible.com" target="_blank" rel="noopener noreferrer">Ansible</a>;</span>'
		},
		skill_5: {
			en: '<span class="skill-chunk">I have Zabbix (Server, Agent, Proxy)</span><span class="skill-chunk">and Prometheus+Grafana+AlertManager configuration skills;</span>',
			ru: '<span class="skill-chunk">Настраиваю Zabbix (Server, Agent, Proxy)</span><span class="skill-chunk">и Prometheus+Grafana+AlertManager;</span>'
		},
		skill_6: {
			en: '<span class="skill-chunk">I know how to configure nginx (web/proxy/file server);</span>',
			ru: '<span class="skill-chunk">Настраиваю nginx (web/proxy/file server);</span>'
		},
		skill_7: {
			en: '<span class="skill-chunk">I have Gitlab CI/CD configuration skills</span>',
			ru: '<span class="skill-chunk">Настраиваю Gitlab CI/CD</span>'
		},

		nav_about_contacts: { en: '&#8606; Contacts', ru: '&#8606; Контакты' },
		nav_about_career: { en: 'Career &#8608;', ru: 'Карьера &#8608;' },
		nav_career_about: { en: '&#8606; About', ru: '&#8606; Обо мне' },
		nav_career_speeches: { en: 'Speeches &#8608;', ru: 'Выступления &#8608;' },
		nav_speeches_career: { en: '&#8606; Career', ru: '&#8606; Карьера' },
		nav_speeches_contacts: { en: 'Contacts &#8608;', ru: 'Контакты &#8608;' },
		nav_contacts_speeches: { en: '&#8606; Speeches', ru: '&#8606; Выступления' },
		nav_contacts_about: { en: 'About &#8608;', ru: 'Обо мне &#8608;' },

		career_0: {
			en: 'From July 2022 to February 2023 I worked at the <a href="https://inter.kubsu.ru" target="_blank" rel="noopener noreferrer">university</a>, in the network operations department.<details><summary>My responsibilities:</summary><ul><li>Administration of server/office hardware and software (Windows XP/7/10/11 and Alt Linux);</li><li>Information security and hygiene issues;</li><li>Design and installation of local area network;</li></ul></details>',
			ru: 'С июля 2022 по февраль 2023 работал в <a href="https://inter.kubsu.ru" target="_blank" rel="noopener noreferrer">университете</a> в отделе сетевых операций.<details><summary>Мои обязанности:</summary><ul><li>Администрирование серверного и офисного оборудования и ПО (Windows XP/7/10/11 и Alt Linux);</li><li>Вопросы информационной безопасности и гигиены;</li><li>Проектирование и монтаж локальной сети;</li></ul></details>'
		},
		career_1: {
			en: 'Since February 2023 to November 2024 I worked at the IT company <a href="https://devline.tv" target="_blank" rel="noopener noreferrer">DevLine</a> as a Linux administrator.<details><summary>My responsibilities:</summary><ul><li>Administration of Debian-based servers;</li><li>Administration of Mikrotik network hardware;</li><li>Network infrastructure health support (routing, NAT, protocols, etc.);</li><li>Organization of monitoring and alerting (smartd, nut, Zabbix);</li><li>Writing python and sh/bash scripts;</li><li>Working with the configuration management system (<a href="https://bundlewrap.org" target="_blank" rel="noopener noreferrer">BundleWrap</a>);</li><li>Incident response and remediation;</li><li>Build and install server/telecommunications equipment;</li></ul></details>',
			ru: 'С февраля 2023 по ноябрь 2024 работал в IT-компании <a href="https://devline.tv" target="_blank" rel="noopener noreferrer">DevLine</a> Linux-администратором.<details><summary>Мои обязанности:</summary><ul><li>Администрирование серверов на Debian;</li><li>Администрирование сетевого оборудования Mikrotik;</li><li>Поддержка работоспособности сетевой инфраструктуры (маршрутизация, NAT, протоколы и т.д.);</li><li>Организация мониторинга и оповещений (smartd, nut, Zabbix);</li><li>Написание скриптов на python и sh/bash;</li><li>Работа с системой управления конфигурациями (<a href="https://bundlewrap.org" target="_blank" rel="noopener noreferrer">BundleWrap</a>);</li><li>Реагирование на инциденты и их устранение;</li><li>Сборка и установка серверного/телекоммуникационного оборудования;</li></ul></details>'
		},
		career_2: {
			en: 'Since April 2025 to December 2025 I worked at <a href="https://www.rosmorport.ru" target="_blank" rel="noopener noreferrer">Rosmorport</a><details><summary>My responsibilities:</summary><ul><li>Administration of Astra Linux-based server/office hardware and software;</li><li>Information security and hygiene issues;</li><li>Design and installation of local area network (DHCP\'s service of Windows Server 2016);</li><li>Install and configure Active Directory with group politics;</li></ul></details>',
			ru: 'С апреля 2025 по декабрь 2025 работал в <a href="https://www.rosmorport.ru" target="_blank" rel="noopener noreferrer">Росморпорту</a><details><summary>Мои обязанности:</summary><ul><li>Администрирование серверного и офисного оборудования и ПО на Astra Linux;</li><li>Вопросы информационной безопасности и гигиены;</li><li>Проектирование и монтаж локальной сети (служба DHCP Windows Server 2016);</li><li>Установка и настройка Active Directory с групповыми политиками;</li></ul></details>'
		},
		career_3: {
			en: 'Since December 2025 I\'ve been working at the IT company <a href="https://devline.tv" target="_blank" rel="noopener noreferrer">DevLine</a> as a DevOps engineer.<details><summary>My responsibilities:</summary><ul><li>Administration of Debian-based servers;</li><li>Administration of Proxmox cluster;</li><li>Administration of Mikrotik network hardware;</li><li>Network infrastructure health support (routing, NAT, VLAN, protocols, etc.);</li><li>Scaling the server infrastructure;</li><li>Organization of monitoring and alerting (smartd, nut, Zabbix, Prometheus+Grafana+AlertManager);</li><li>Writing go/python and sh/bash scripts;</li><li>Working with the configuration management system (<a href="https://www.ansible.com/" target="_blank" rel="noopener noreferrer">Ansible</a>);</li><li>Setup and configuration of the LXC containerization subsystem;</li><li>Incident response and remediation;</li><li>Developing strategies to ensure system fault tolerance and scalability;</li></ul></details>',
			ru: 'С декабря 2025 работаю в IT-компании <a href="https://devline.tv" target="_blank" rel="noopener noreferrer">DevLine</a> DevOps-инженером.<details><summary>Мои обязанности:</summary><ul><li>Администрирование серверов на Debian;</li><li>Администрирование кластера Proxmox;</li><li>Администрирование сетевого оборудования Mikrotik;</li><li>Поддержка работоспособности сетевой инфраструктуры (маршрутизация, NAT, VLAN, протоколы и т.д.);</li><li>Масштабирование серверной инфраструктуры;</li><li>Организация мониторинга и оповещений (smartd, nut, Zabbix, Prometheus+Grafana+AlertManager);</li><li>Написание скриптов на go/python и sh/bash;</li><li>Работа с системой управления конфигурациями (<a href="https://www.ansible.com/" target="_blank" rel="noopener noreferrer">Ansible</a>);</li><li>Настройка подсистемы контейнеризации LXC;</li><li>Реагирование на инциденты и их устранение;</li><li>Разработка стратегий отказоустойчивости и масштабируемости систем;</li></ul></details>'
		},

		speeches_intro: {
			en: "Here're the notes of my reports. Have a good time :D<br>(click on the picture to view)",
			ru: 'Здесь заметки к моим докладам. Приятного просмотра :D<br>(нажмите на картинку для просмотра)'
		},
		speech_1_text: {
			en: 'It\'s my first public speech at 07.09.2024 with report: "MAC vs Linux":',
			ru: 'Моё первое публичное выступление 07.09.2024 с докладом «MAC vs Linux»:'
		},
		speech_1_alt: { en: '1st report', ru: '1-й доклад' },
		youtube_open: { en: 'Open in new window ↗', ru: 'Открыть в новом окне ↗' },
		youtube_title: { en: 'Open video in new tab', ru: 'Открыть видео в новой вкладке' }
	};

	function getStoredLang() {
		try {
			var stored = localStorage.getItem(STORAGE_KEY);
			if (stored === 'en' || stored === 'ru') {
				return stored;
			}
		} catch (e) {}
		return null;
	}

	function detectBrowserLang() {
		var lang = (navigator.language || navigator.userLanguage || '').toLowerCase();
		return lang.indexOf('ru') === 0 ? 'ru' : DEFAULT_LANG;
	}

	function getText(key, lang) {
		var entry = translations[key];
		if (!entry) {
			return null;
		}
		return entry[lang] || entry[DEFAULT_LANG];
	}

	function applyLanguage(lang) {
		if (lang !== 'en' && lang !== 'ru') {
			lang = DEFAULT_LANG;
		}

		document.documentElement.lang = lang;

		var title = getText('doc_title', lang);
		if (title) {
			document.title = title;
		}

		document.querySelectorAll('[data-i18n]').forEach(function (el) {
			var text = getText(el.getAttribute('data-i18n'), lang);
			if (text !== null) {
				el.textContent = text;
			}
		});

		document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
			var html = getText(el.getAttribute('data-i18n-html'), lang);
			if (html !== null) {
				el.innerHTML = html;
			}
		});

		document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
			var titleText = getText(el.getAttribute('data-i18n-title'), lang);
			if (titleText !== null) {
				el.setAttribute('title', titleText);
			}
		});

		document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
			var alt = getText(el.getAttribute('data-i18n-alt'), lang);
			if (alt !== null) {
				el.setAttribute('alt', alt);
			}
		});

		document.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
			var isActive = btn.getAttribute('data-lang') === lang;
			btn.classList.toggle('is-active', isActive);
			btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
		});

		try {
			localStorage.setItem(STORAGE_KEY, lang);
		} catch (e) {}
	}

	function initLangSwitch() {
		var switcher = document.querySelector('.lang-switch');
		if (!switcher) {
			return;
		}

		switcher.addEventListener('click', function (event) {
			var btn = event.target.closest('.lang-switch__btn');
			if (!btn) {
				return;
			}
			var lang = btn.getAttribute('data-lang');
			if (lang) {
				applyLanguage(lang);
			}
		});
	}

	var initialLang = getStoredLang() || detectBrowserLang();
	applyLanguage(initialLang);

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initLangSwitch);
	} else {
		initLangSwitch();
	}

	window.SiteI18n = {
		apply: applyLanguage,
		getLang: function () {
			return document.documentElement.lang || DEFAULT_LANG;
		}
	};
})();
