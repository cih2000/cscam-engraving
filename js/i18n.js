(function () {
  var lang = new URLSearchParams(location.search).get('lang');
  window.LANG = (lang === 'en' || lang === 'zh') ? lang : 'ko';
  window.t = function (ko, en, zh) { return window.LANG === 'en' ? (en || ko) : window.LANG === 'zh' ? (zh || en || ko) : ko; };

  var textMap = {
    /* ── 접근성: aria-label / alt ── */
    '메뉴 열기': 'Open Menu',
    '메뉴 닫기': 'Close Menu',
    '다시 재생': 'Replay',
    '맨 위로': 'Back to top',
    'CSCAM MLP 1000-5A 레이저 잉그레이빙 머신 외관': 'CSCAM MLP 1000-5A Laser Engraving Machine Exterior',
    '연속파 레이저 딩플 형성 단면': 'CW Laser Dimple Formation Cross-section',
    '펄스 레이저 딩플 형성 단면': 'Pulsed Laser Dimple Formation Cross-section',
    '펄스 폭 스펙트럼 다이어그램: 나노·피코·팜토초': 'Pulse Width Spectrum Diagram: Nano, Pico, Femtosecond',
    '일반 패턴 상세': 'Standard Pattern Detail',
    '마이크로 패턴 상세': 'Micro Pattern Detail',
    '가공 디테일 대화면': 'Machining Detail Full View',
    '패턴가공 1': 'Pattern Machining 1',
    '패턴가공 1-2': 'Pattern Machining 1-2',
    '패턴가공 2': 'Pattern Machining 2',
    '패턴가공 3': 'Pattern Machining 3',
    '패턴가공 4': 'Pattern Machining 4',
    '패턴가공 5': 'Pattern Machining 5',
    'MLP 1000-5A 다중 배치 설치 전경': 'MLP 1000-5A Multiple Installation Overview',
    'MLP 1000-5A 장비 외관': 'MLP 1000-5A Machine Exterior',
    '5축 로터리 테이블 상세': '5-Axis Rotary Table Detail',
    '가공 소재 클로즈업': 'Machining Material Close-up',
    '국내 D사 실제 가동 현장 사진': 'Actual Production Site — Domestic Company D',
    '유럽 D사 실제 가동 현장 사진': 'Actual Production Site — European Company D',
    /* ── 본문 텍스트 ── */
    '레이저 스캐너와': 'A large-area, high-precision machining system',
    '레이저 스캐너와 CNC 제어를 완전 결합한 5축 대면적 고정밀 마이크로 패턴 가공기 MLP 1000-5A. 타이어 사이드 몰드 각인 최적화, 단차·이음매 없는 3D 마이크로 텍스처링. — CSCAM 기계사업부': 'MLP 1000-5A is a five-axis, large-area, high-precision micro-patterning system that fully integrates laser scanner and CNC control. Optimized for tire side mold engraving and seamless 3D micro-texturing. - CSCAM Machine Division',
    '레이저 스캐너 + CNC 결합 5축 대면적 마이크로 패턴 가공기. 타이어 몰드 각인 특화.': 'Five-axis large-area micro-patterning system combining laser scanner and CNC control. Specialized for tire mold engraving.',
    '가 결합된': 'integrating laser scanner and',
    '대면적 고정밀 가공 시스템': 'CNC control',
    '웹 브라우저가 비디오 태그를 지원하지 않습니다.': 'Your browser does not support the video tag.',
    'CSCAM은': 'CSCAM uses',
    '기술로 열 변형 없이 소재 표면에 정밀 미세 패턴을 구현합니다. 펄스 폭(Pulse Duration)에 따른 Nano·Pico·Femto초 레이저의 가공 특성을 최적화하여': 'technology to create precision micro-patterns on material surfaces without thermal deformation. By optimizing Nano, Pico, and Femto-second laser processing characteristics according to pulse duration, it achieves',
    '을 동시에 달성합니다.': 'at the same time.',
    '에너지를 연속적으로 조사하여 소재를': 'Continuously irradiates energy to',
    '하는 방식입니다. 열 영향부(HAZ)가 형성되어 미세 패터닝 시 열 변형 및 버(Burr)가 발생할 수 있습니다.': 'the material. A heat-affected zone (HAZ) can form, causing thermal deformation and burrs during micro-patterning.',
    '극소 시간 동안 첨단 에너지를 집속시켜 소재를': 'Focuses advanced energy for an extremely short time to',
    '시키는 방식입니다. 주변 소재로의 열 전도를 차단하여 왜곡 없는 완벽한 에지를 도출합니다.': 'the material. It blocks heat transfer to surrounding areas and creates clean, distortion-free edges.',
    '소재 제거율(Removal Rate)이 높아 가공 속도가 빠름. 미세한 열영향부(HAZ)가 존재하나 대용량 제거 및': 'High material removal rate enables fast processing. A small HAZ exists, but it is suitable for high-volume removal and',
    '에 적합.': 'applications.',
    '가공 효율과 정밀도의 균형점. 열 영향을 대폭 억제하면서 정밀한 표면 질감 구현 및': 'Balances processing efficiency and precision. It greatly suppresses thermal effects while enabling precise surface texture and',
    '에 적용.': 'applications.',
    '열 전달 시간보다 짧은 초단펄스로 "Cold Ablation" 구현. 열 왜곡 및 Burr가 전혀 없는': 'Implements cold ablation with ultrashort pulses shorter than the heat-transfer time, producing',
    '완성.': 'with no thermal distortion or burrs.',
    'CSCAM의 제어 시스템은 나노초(Nano) 및 펨토초(Femto) 펄스 폭 조절을 모두 지원하며, 본 장비(MLP 1000-5A)는': 'CSCAM control systems support both nanosecond and femtosecond pulse-width control, and the MLP 1000-5A precisely synchronizes',
    '와 5축 로터리 제어를 하드웨어 레이어에서 정밀히 정합하여 열영향부(HAZ) 왜곡이 거의 없는 완벽한 에지를 도출해 냅니다.': 'with 5-axis rotary control at the hardware layer to produce clean edges with minimal HAZ distortion.',
    '브랜드 시인성 50% 향상 솔루션': 'Solution for 50% higher brand visibility',
    '기존의 일반 가공 패턴은 금속 경계면의 난반사로 인해 로고나 정보 코드의 시인성이 크게 떨어집니다. CSCAM의 마이크로 패턴 텍스처링 공정은 빛의 각도를 인위적으로 차단하여 칠흑 같은 입체 구조를 생성함으로써, 일반 가공 대비': 'Conventional machined patterns often lose logo or information-code visibility because of diffuse reflection at metal boundaries. CSCAM micro-pattern texturing blocks light angles intentionally and creates a deep black three-dimensional structure, delivering',
    '을 제공합니다.': 'compared with conventional machining.',
    '국내외 글로벌 고객사에 적용되어 장비 품질 및 내구성이 확인되었습니다.': 'Applied by global customers in Korea and abroad, confirming equipment quality and durability.',
    '(유럽, 한국, 러시아, 중국, 필란드 등 수 백조 이상)': '(Hundreds of sets across Europe, Korea, Russia, China, Finland, and more)',
    '다운로드': 'Download',
    '기계사업부': 'Machine Division',
    '전남광주특별시 광산구 평동산단로 239-15': '239-15, Pyeongdongsandan-ro, Gwangsan-gu, Gwangju, Korea',
    '메시지를 입력하세요 (준비 중)': 'Enter your message (Coming soon)'
  };

  var zhTextMap = {
    "메뉴 열기": "打开菜单",
    "메뉴 닫기": "关闭菜单",
    "다시 재생": "重新播放",
    "맨 위로": "返回顶部",
    "CSCAM MLP 1000-5A 레이저 잉그레이빙 머신 외관": "CSCAM MLP 1000-5A激光雕刻机外观",
    "연속파 레이저 딩플 형성 단면": "连续波激光凹点形成截面",
    "펄스 레이저 딩플 형성 단면": "脉冲激光凹点形成截面",
    "펄스 폭 스펙트럼 다이어그램: 나노·피코·팜토초": "脉冲宽度频谱图:纳秒·皮秒·飞秒",
    "일반 패턴 상세": "普通图案详情",
    "마이크로 패턴 상세": "微图案详情",
    "가공 디테일 대화면": "加工细节大图",
    "패턴가공 1": "图案加工1",
    "패턴가공 1-2": "图案加工1-2",
    "패턴가공 2": "图案加工2",
    "패턴가공 3": "图案加工3",
    "패턴가공 4": "图案加工4",
    "패턴가공 5": "图案加工5",
    "MLP 1000-5A 다중 배치 설치 전경": "MLP 1000-5A多台安装全景",
    "MLP 1000-5A 장비 외관": "MLP 1000-5A设备外观",
    "5축 로터리 테이블 상세": "5轴旋转工作台详情",
    "가공 소재 클로즈업": "加工材料特写",
    "국내 D사 실제 가동 현장 사진": "国内D公司实际运行现场照片",
    "유럽 D사 실제 가동 현장 사진": "欧洲D公司实际运行现场照片",
    "레이저 스캐너와": "结合激光扫描仪与",
    "레이저 스캐너와 CNC 제어를 완전 결합한 5축 대면적 고정밀 마이크로 패턴 가공기 MLP 1000-5A. 타이어 사이드 몰드 각인 최적화, 단차·이음매 없는 3D 마이크로 텍스처링. — CSCAM 기계사업부": "MLP 1000-5A是一台完全结合激光扫描仪与CNC控制的5轴大面幅高精度微图案加工机。专为轮胎侧模刻印优化,实现无台阶、无接缝的3D微纹理加工。— CSCAM机械事业部",
    "레이저 스캐너 + CNC 결합 5축 대면적 마이크로 패턴 가공기. 타이어 몰드 각인 특화.": "激光扫描仪+CNC结合的5轴大面幅微图案加工机,专为轮胎模具刻印设计。",
    "가 결합된": "CNC控制的",
    "대면적 고정밀 가공 시스템": "大面幅高精度加工系统",
    "웹 브라우저가 비디오 태그를 지원하지 않습니다.": "您的浏览器不支持视频标签。",
    "CSCAM은": "CSCAM采用",
    "기술로 열 변형 없이 소재 표면에 정밀 미세 패턴을 구현합니다. 펄스 폭(Pulse Duration)에 따른 Nano·Pico·Femto초 레이저의 가공 특성을 최적화하여": "技术,在材料表面实现无热变形的精密微图案。通过优化纳秒·皮秒·飞秒激光按脉冲宽度(Pulse Duration)呈现的加工特性,同时达成",
    "을 동시에 달성합니다.": "。",
    "에너지를 연속적으로 조사하여 소재를": "连续照射能量,使材料",
    "하는 방식입니다. 열 영향부(HAZ)가 형성되어 미세 패터닝 시 열 변형 및 버(Burr)가 발생할 수 있습니다.": "。会形成热影响区(HAZ),在微图案加工时可能产生热变形及毛刺(Burr)。",
    "극소 시간 동안 첨단 에너지를 집속시켜 소재를": "在极短时间内聚焦高能量,使材料",
    "시키는 방식입니다. 주변 소재로의 열 전도를 차단하여 왜곡 없는 완벽한 에지를 도출합니다.": "。阻断向周边材料的热传导,呈现无变形的完美边缘。",
    "소재 제거율(Removal Rate)이 높아 가공 속도가 빠름. 미세한 열영향부(HAZ)가 존재하나 대용량 제거 및": "材料去除率(Removal Rate)高,加工速度快。虽存在微小热影响区(HAZ),但适用于大批量去除及",
    "에 적합.": "。",
    "가공 효율과 정밀도의 균형점. 열 영향을 대폭 억제하면서 정밀한 표면 질감 구현 및": "兼顾加工效率与精度的平衡点。大幅抑制热影响,同时实现精密表面质感及",
    "에 적용.": "应用。",
    "열 전달 시간보다 짧은 초단펄스로 \"Cold Ablation\" 구현. 열 왜곡 및 Burr가 전혀 없는": "以短于热传导时间的超短脉冲实现\"冷烧蚀(Cold Ablation)\",完全无热变形及毛刺,完成",
    "완성.": "。",
    "CSCAM의 제어 시스템은 나노초(Nano) 및 펨토초(Femto) 펄스 폭 조절을 모두 지원하며, 본 장비(MLP 1000-5A)는": "CSCAM的控制系统同时支持纳秒(Nano)及飞秒(Femto)脉冲宽度调节,本设备(MLP 1000-5A)将",
    "와 5축 로터리 제어를 하드웨어 레이어에서 정밀히 정합하여 열영향부(HAZ) 왜곡이 거의 없는 완벽한 에지를 도출해 냅니다.": "与5轴旋转控制在硬件层精密整合,呈现几乎无热影响区(HAZ)变形的完美边缘。",
    "브랜드 시인성 50% 향상 솔루션": "品牌可视性提升50%解决方案",
    "기존의 일반 가공 패턴은 금속 경계면의 난반사로 인해 로고나 정보 코드의 시인성이 크게 떨어집니다. CSCAM의 마이크로 패턴 텍스처링 공정은 빛의 각도를 인위적으로 차단하여 칠흑 같은 입체 구조를 생성함으로써, 일반 가공 대비": "传统加工图案因金属边界面漫反射,导致标志或信息码的可视性大幅下降。CSCAM的微图案纹理加工工艺通过人为阻断光线角度,生成漆黑般的立体结构,相较普通加工可提供",
    "을 제공합니다.": "。",
    "국내외 글로벌 고객사에 적용되어 장비 품질 및 내구성이 확인되었습니다.": "已应用于国内外全球客户,验证了设备品质与耐久性。",
    "(유럽, 한국, 러시아, 중국, 필란드 등 수 백조 이상)": "(欧洲、韩国、俄罗斯、中国、芬兰等,累计数百台以上)",
    "다운로드": "下载",
    "기계사업부": "机械事业部",
    "전남광주특별시 광산구 평동산단로 239-15": "韩国全罗南道光州广域市光山区平洞产业园路239-15",
    "메시지를 입력하세요 (준비 중)": "请输入消息(准备中)"
  };

  function applyAutoText(root) {
    if (window.LANG !== 'en' && window.LANG !== 'zh') return;
    var map = window.LANG === 'zh' ? zhTextMap : textMap;
    var scope = root || document.body;
    if (!scope) return;
    var walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var parent = node.parentElement;
        if (!parent || /^(SCRIPT|STYLE|NOSCRIPT)$/i.test(parent.tagName)) return NodeFilter.FILTER_REJECT;
        return /[가-힣]/.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      var raw = node.nodeValue;
      var trimmed = raw.trim();
      if (map[trimmed] !== undefined) node.nodeValue = raw.replace(trimmed, map[trimmed]);
    });
    ['placeholder', 'aria-label', 'title', 'content', 'alt'].forEach(function (attr) {
      document.querySelectorAll('[' + attr + ']').forEach(function (el) {
        var value = el.getAttribute(attr);
        if (map[value] !== undefined) el.setAttribute(attr, map[value]);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    // data-i18n-text 속성 처리: 텍스트 노드 교체
    document.querySelectorAll('[data-i18n-text]').forEach(function (el) {
      try {
        var translations = JSON.parse(el.getAttribute('data-i18n-text'));
        el.textContent = translations[window.LANG] || translations['ko'];
      } catch (e) {}
    });
    // data-i18n-html 속성 처리: innerHTML 교체
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      try {
        var translations = JSON.parse(el.getAttribute('data-i18n-html'));
        el.innerHTML = translations[window.LANG] || translations['ko'];
      } catch (e) {}
    });
    // 언어 스위처 활성화 상태 업데이트
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      if (btn.dataset.lang === window.LANG) {
        btn.style.color = '#1e5aa8';
        btn.style.fontWeight = '700';
      } else {
        btn.style.color = '#757575';
        btn.style.fontWeight = '400';
      }
    });
    applyAutoText(document.documentElement);
    if (window.LANG === 'en' || window.LANG === 'zh') {
      new MutationObserver(function (mutations) {
        mutations.forEach(function (m) {
          m.addedNodes.forEach(function (node) {
            if (node.nodeType === 1) applyAutoText(node);
          });
        });
      }).observe(document.documentElement, { childList: true, subtree: true });
    }
  });
})();
