'use strict';

// ===== I18N DICTIONARIES (EN / VI) =====

const I18N = {
  en: {
    pageTitle: 'Device, Resolution & DPI Inspector',
    appTitle: 'Device & Display Inspector',
    appSubtitle: 'Client-side hardware, browser, resolution & pixel density telemetry',
    copyJson: 'Copy all as JSON',
    downloadJson: 'Download report (.json)',
    themeAuto: 'Auto',
    themeLight: 'Light',
    themeDark: 'Dark',

    legendTitle: 'Accuracy Indicators:',
    badgeExact: 'Exact',
    badgeEstimated: 'Estimated',
    badgeUnavailable: 'Unavailable',
    legendExactDesc: 'Directly exposed by browser APIs',
    legendEstimatedDesc: 'Inferred via screen metrics, scaling, or UA heuristics',
    legendUnavailableDesc: 'Restricted or unsupported in this browser',

    cardDeviceTitle: 'Device',
    cardDeviceTag: 'Hardware & Form Factor',
    labelDeviceType: 'Device Type',
    labelDeviceBrand: 'Brand / Vendor',
    labelDeviceModel: 'Model / Candidate Match',
    labelDeviceArch: 'CPU Architecture',
    labelDeviceBitness: 'CPU Bitness',

    cardOsTitle: 'Operating System',
    cardOsTag: 'Platform Kernel & Build',
    labelOsName: 'OS Name',
    labelOsVersion: 'OS Version',
    labelOsPlatform: 'Legacy Platform String',
    labelOsWow64: '64-bit Windows Emulation (WoW64)',

    cardBrowserTitle: 'Browser',
    cardBrowserTag: 'Engine & Client Hints',
    labelBrowserName: 'Browser Name',
    labelBrowserVersion: 'Full Version',
    labelBrowserEngine: 'Rendering Engine',
    labelBrowserSource: 'Detection Source',

    cardScreenTitle: 'Screen',
    liveTag: 'Live',
    labelScreenCss: 'Logical Resolution (CSS Pixels)',
    labelScreenPhysical: 'Physical Resolution (CSS × DPR)',
    labelScreenStandard: 'Resolution Standard',
    labelScreenViewport: 'Viewport Size (innerWidth × innerHeight)',
    labelScreenAvail: 'Available Screen Area (excl. OS docks/bars)',
    labelScreenAspect: 'Aspect Ratio',
    labelScreenOrientation: 'Orientation',

    cardDpiTitle: 'Pixel Density',
    labelDpiDpr: 'Device Pixel Ratio (DPR)',
    labelDpiCss: 'CSS Reference DPI (1in Probe)',
    cssDpiNote:
      'Measured via a hidden <code>1in</code> CSS element. By W3C specification, <code>1in</code> is fixed to <strong>96 CSS pixels</strong> regardless of physical panel size—it reflects CSS scaling, not true hardware PPI.',
    labelDpiPhysical: 'Estimated Physical PPI',
    diagonalLabel: 'Screen Diagonal (inches)',
    diagonalPlaceholder: 'e.g. 6.1, 14.0, 27.0',
    clearBtn: 'Clear',
    chipPhone61: '6.1″ Phone',
    chipPhone67: '6.7″ Phone',
    chipTablet11: '11″ Tablet',
    chipLaptop13: '13.3″ Laptop',
    chipLaptop15: '15.6″ Laptop',
    chipMonitor27: '27″ Monitor',
    ppiFormulaHint: 'Formula: <code>√(physicalW² + physicalH²) / diagonalInches</code>',
    labelScreenDetails: 'Multi-Monitor Topology (Screen Details API)',
    inspectDisplaysBtn: 'Inspect Connected Displays',

    cardExtraTitle: 'Extra Info',
    cardExtraTag: 'Capabilities & Preferences',
    labelExtraLanguage: 'Preferred Language(s)',
    labelExtraTimezone: 'Timezone',
    labelExtraCores: 'Logical CPU Cores (hardwareConcurrency)',
    labelExtraMemory: 'Device Memory (RAM)',
    labelExtraTouch: 'Max Touch Points',
    labelExtraOnline: 'Network Online Status',
    labelExtraColorDepth: 'Color Depth & Gamut',
    labelExtraColorScheme: 'System Color Scheme',
    labelExtraReducedMotion: 'Reduced Motion Preference',

    privacySummary: "Why can't the browser tell me more?",
    privacyItem1Title: '1. User-Agent Reduction & Freezing',
    privacyItem1Body:
      'Modern browsers intentionally freeze parts of <code>navigator.userAgent</code> to curb passive tracking. For example, Safari locks macOS to <code>10_15_7</code> and omits iPhone/iPad model identifiers entirely, while Chrome replaces detailed Android build/model tokens with a generic <code>K</code> unless high-entropy Client Hints are requested over HTTPS.',
    privacyItem2Title: '2. Fingerprinting Protection & Bucketing',
    privacyItem2Body:
      'Browsers like Firefox (with Enhanced Tracking Protection) and Brave spoof or coarsen high-entropy signals—such as capping <code>navigator.deviceMemory</code> to 8 GB, rounding <code>hardwareConcurrency</code>, or reporting a standardized viewport/timezone—so websites cannot uniquely identify your machine across sessions.',
    privacyItem3Title: '3. Physical Dimensions Are Hidden by Design',
    privacyItem3Body:
      'Web standards expose logical CSS pixels and <code>devicePixelRatio</code>, but never physical millimeter/inch dimensions of your display panel. Without knowing the physical diagonal size (or querying the permission-gated Screen Details API on multi-monitor desktop setups), true hardware PPI cannot be computed automatically.',
    rawTelemetryTitle: 'Raw Browser Telemetry Snapshot',
    footerText: '100% client-side inspection — zero network requests, cookies, or analytics.',

    // Dynamic detector & screen values
    valUnavailable: 'Unavailable',
    valUnavailableBrand: 'Unavailable (not exposed by browser)',
    valUnavailableDesktopModel: 'Unavailable (desktop browsers do not expose hardware model)',
    valTypeConsole: 'Game Console',
    valTypeTv: 'Smart TV / Streaming Box',
    valTypeTablet: 'Tablet',
    valTypeMobile: 'Mobile',
    valTypeDesktop: 'Desktop / Laptop',
    valAppleUnlisted: '{type} (unlisted screen profile: {w}×{h} @ {dpr}x)',
    noteAppleEstimated: 'Estimated from {w}×{h} CSS px @ {dpr}x DPR (Safari hides exact {type} model).',
    noteAppleUnlisted: 'Safari hides exact model identifiers; dimensions did not match a standard preset.',
    noteClientHintsModel: 'Provided by User-Agent Client Hints API.',
    valUaReducedK: 'Hidden by UA Reduction ("K")',
    noteUaReducedK: 'Browser froze the legacy UA model token to "K" for privacy.',
    noteLegacyUaModel: 'Parsed from legacy User-Agent string.',
    valArchArm: 'ARM (Apple Silicon / ARM64)',
    valArchX86: 'x86 (Intel / AMD)',
    valArchX86_32: 'x86 (32-bit)',
    valArchAppleArm: 'ARM64 (Apple Silicon)',
    valBitSuffix: '{bits}-bit',
    valWinKernel: '{edition} (build kernel {ver})',
    valAndroidFrozen: '10+ (frozen in UA string)',
    valMacFrozen: '10.15.7+ (frozen by browser privacy policy)',
    valWow64Yes: 'Yes (32-bit app on 64-bit OS)',
    valWow64Ua: 'Yes (detected in UA)',
    valWow64No: 'No / Not Applicable',
    valSourceClientHints: 'User-Agent Client Hints API',
    valSourceUaFallback: 'User-Agent String Fallback',
    valUnknown: 'Unknown',
    valUnknownGamut: 'Unknown gamut',
    valSchemeDark: 'Dark',
    valSchemeLight: 'Light',
    valNoPreference: 'No preference',
    valReduceMotion: 'Reduce motion',
    valCores: '{n} logical threads',
    valMemoryBucketed: '~{gb} GB (bucketed)',
    valMemoryRestricted: 'Unavailable (Firefox/Safari restrict)',
    valTouchPoint: '{n} point',
    valTouchPoints: '{n} points',
    valOnline: 'Online',
    valOffline: 'Offline',
    valColorDepth: '{depth}-bit · {gamut}',

    valNearStandard: 'Near {name} ({w}×{h})',
    valCustomResolution: 'Custom / Non-standard ({w}×{h})',
    valLandscapeInferred: 'landscape (inferred)',
    valPortraitInferred: 'portrait (inferred)',
    valEnterDiagonal: 'Enter screen diagonal below',
    valPhysicalPpi: '{ppi} PPI (at {inches}″ diagonal)',
    valDprScale: '{dpr}x ({pct}% scale)',
    valCssDpi: '{cssDpi} CSS DPI ({physDpi} scaled px/in)',

    valNotQueried: 'Not queried yet',
    valScreenDetailsUnsupported: 'Unsupported in this browser (Chromium desktop only)',
    valScreenDetailsUnsupportedShort: 'Unsupported in this browser',
    valDisplaysDetected: '{count} display detected',
    valDisplaysDetectedPlural: '{count} displays detected',
    valPermissionDenied: 'Permission denied by user or browser policy',
    valDisplayFallback: 'Display {idx}',
    valTagPrimary: 'Primary',
    valTagExternal: 'External',
    valTagInternal: 'Built-in',
    valMonitorMeta: '{w}×{h} CSS ({pw}×{ph} physical) · {dpr}x DPR · {depth}-bit',

    toastCopied: 'Copied full device report JSON to clipboard.',
    toastCopiedFallback: 'Copied JSON to clipboard.',
    toastCopyFailed: 'Unable to access clipboard.',
    toastDownloaded: 'Downloaded {filename}',
    toastLangSwitched: 'Language switched to English.',
  },

  vi: {
    pageTitle: 'Trình kiểm tra Thiết bị, Độ phân giải & DPI',
    appTitle: 'Trình kiểm tra Thiết bị & Màn hình',
    appSubtitle: 'Thông số phần cứng, trình duyệt, độ phân giải & mật độ điểm ảnh phía máy khách',
    copyJson: 'Sao chép JSON',
    downloadJson: 'Tải báo cáo (.json)',
    themeAuto: 'Tự động',
    themeLight: 'Sáng',
    themeDark: 'Tối',

    legendTitle: 'Chỉ số độ chính xác:',
    badgeExact: 'Chính xác',
    badgeEstimated: 'Ước tính',
    badgeUnavailable: 'Không khả dụng',
    legendExactDesc: 'Được cung cấp trực tiếp bởi API trình duyệt',
    legendEstimatedDesc: 'Suy luận từ kích thước màn hình, tỷ lệ hiển thị hoặc User-Agent',
    legendUnavailableDesc: 'Bị giới hạn quyền riêng tư hoặc trình duyệt không hỗ trợ',

    cardDeviceTitle: 'Thiết bị',
    cardDeviceTag: 'Phần cứng & Kiểu dáng',
    labelDeviceType: 'Loại thiết bị',
    labelDeviceBrand: 'Hãng sản xuất',
    labelDeviceModel: 'Model / Thiết bị dự đoán',
    labelDeviceArch: 'Kiến trúc CPU',
    labelDeviceBitness: 'Số bit CPU',

    cardOsTitle: 'Hệ điều hành',
    cardOsTag: 'Nhân nền tảng & Phiên bản',
    labelOsName: 'Tên hệ điều hành',
    labelOsVersion: 'Phiên bản hệ điều hành',
    labelOsPlatform: 'Chuỗi nền tảng (Platform)',
    labelOsWow64: 'Giả lập Windows 64-bit (WoW64)',

    cardBrowserTitle: 'Trình duyệt',
    cardBrowserTag: 'Nhân dựng hình & Client Hints',
    labelBrowserName: 'Tên trình duyệt',
    labelBrowserVersion: 'Phiên bản đầy đủ',
    labelBrowserEngine: 'Nhân dựng hình (Engine)',
    labelBrowserSource: 'Nguồn nhận diện',

    cardScreenTitle: 'Màn hình',
    liveTag: 'Trực tiếp',
    labelScreenCss: 'Độ phân giải logic (CSS Pixels)',
    labelScreenPhysical: 'Độ phân giải vật lý (CSS × DPR)',
    labelScreenStandard: 'Chuẩn độ phân giải',
    labelScreenViewport: 'Kích thước vùng hiển thị (Viewport)',
    labelScreenAvail: 'Vùng màn hình khả dụng (trừ thanh tác vụ)',
    labelScreenAspect: 'Tỷ lệ khung hình',
    labelScreenOrientation: 'Hướng màn hình',

    cardDpiTitle: 'Mật độ điểm ảnh',
    labelDpiDpr: 'Tỷ lệ điểm ảnh thiết bị (DPR)',
    labelDpiCss: 'DPI tham chiếu CSS (mẫu thử 1in)',
    cssDpiNote:
      'Đo qua phần tử CSS <code>1in</code> ẩn. Theo chuẩn W3C, <code>1in</code> luôn cố định bằng <strong>96 CSS pixel</strong> bất kể kích thước tấm nền thật—giá trị này phản ánh tỷ lệ thu phóng CSS, không phải PPI phần cứng.',
    labelDpiPhysical: 'Mật độ điểm ảnh vật lý ước tính (PPI)',
    diagonalLabel: 'Đường chéo màn hình (inch)',
    diagonalPlaceholder: 'VD: 6.1, 14.0, 27.0',
    clearBtn: 'Xóa',
    chipPhone61: '6.1″ Điện thoại',
    chipPhone67: '6.7″ Điện thoại',
    chipTablet11: '11″ Máy tính bảng',
    chipLaptop13: '13.3″ Laptop',
    chipLaptop15: '15.6″ Laptop',
    chipMonitor27: '27″ Màn hình rời',
    ppiFormulaHint: 'Công thức: <code>√(physicalW² + physicalH²) / diagonalInches</code>',
    labelScreenDetails: 'Cấu trúc đa màn hình (Screen Details API)',
    inspectDisplaysBtn: 'Kiểm tra các màn hình kết nối',

    cardExtraTitle: 'Thông tin bổ sung',
    cardExtraTag: 'Khả năng & Tùy chọn hệ thống',
    labelExtraLanguage: 'Ngôn ngữ ưu tiên',
    labelExtraTimezone: 'Múi giờ',
    labelExtraCores: 'Số luồng CPU logic (hardwareConcurrency)',
    labelExtraMemory: 'Bộ nhớ thiết bị (RAM)',
    labelExtraTouch: 'Số điểm chạm tối đa',
    labelExtraOnline: 'Trạng thái kết nối mạng',
    labelExtraColorDepth: 'Độ sâu màu & Dải màu',
    labelExtraColorScheme: 'Giao diện màu hệ thống',
    labelExtraReducedMotion: 'Tùy chọn giảm chuyển động',

    privacySummary: 'Tại sao trình duyệt không thể hiển thị nhiều thông tin hơn?',
    privacyItem1Title: '1. Rút gọn & Đóng băng User-Agent',
    privacyItem1Body:
      'Các trình duyệt hiện đại cố tình đóng băng một phần <code>navigator.userAgent</code> để hạn chế theo dõi thụ động. Ví dụ: Safari khóa macOS ở mức <code>10_15_7</code> và ẩn hoàn toàn mã model iPhone/iPad, trong khi Chrome thay thế tên model Android bằng ký tự <code>K</code> trừ khi yêu cầu Client Hints qua HTTPS.',
    privacyItem2Title: '2. Chống nhận diện dấu vân tay (Fingerprinting)',
    privacyItem2Body:
      'Các trình duyệt như Firefox (với chế độ chống theo dõi nâng cao) và Brave làm nhiễu hoặc làm tròn tín hiệu phần cứng—như giới hạn <code>navigator.deviceMemory</code> ở mức 8 GB, làm tròn <code>hardwareConcurrency</code>, hoặc chuẩn hóa kích thước vùng nhìn—để ngăn trang web định danh duy nhất thiết bị của bạn.',
    privacyItem3Title: '3. Kích thước vật lý được ẩn theo thiết kế',
    privacyItem3Body:
      'Chuẩn web chỉ cung cấp điểm ảnh logic CSS và <code>devicePixelRatio</code>, không bao giờ tiết lộ kích thước milimet/inch vật lý của tấm nền màn hình. Nếu không biết đường chéo màn hình (hoặc chưa cấp quyền cho Screen Details API trên máy tính), PPI phần cứng không thể tự động tính toán.',
    rawTelemetryTitle: 'Dữ liệu Telemetry thô từ trình duyệt',
    footerText: 'Kiểm tra 100% phía máy khách — không gửi yêu cầu mạng, không cookie, không theo dõi.',

    // Dynamic detector & screen values
    valUnavailable: 'Không khả dụng',
    valUnavailableBrand: 'Không khả dụng (trình duyệt không cung cấp)',
    valUnavailableDesktopModel: 'Không khả dụng (trình duyệt máy tính không tiết lộ model)',
    valTypeConsole: 'Máy chơi game (Console)',
    valTypeTv: 'TV thông minh / Đầu phát',
    valTypeTablet: 'Máy tính bảng',
    valTypeMobile: 'Điện thoại di động',
    valTypeDesktop: 'Máy tính để bàn / Laptop',
    valAppleUnlisted: '{type} (cấu hình màn hình chưa liệt kê: {w}×{h} @ {dpr}x)',
    noteAppleEstimated: 'Ước tính từ {w}×{h} CSS px @ {dpr}x DPR (Safari ẩn mã model {type} chính xác).',
    noteAppleUnlisted: 'Safari ẩn mã định danh model; kích thước màn hình không khớp với cấu hình chuẩn.',
    noteClientHintsModel: 'Được cung cấp bởi User-Agent Client Hints API.',
    valUaReducedK: 'Bị ẩn bởi UA Reduction ("K")',
    noteUaReducedK: 'Trình duyệt đã đóng băng token model trong User-Agent thành "K" để bảo vệ quyền riêng tư.',
    noteLegacyUaModel: 'Trích xuất từ chuỗi User-Agent truyền thống.',
    valArchArm: 'ARM (Apple Silicon / ARM64)',
    valArchX86: 'x86 (Intel / AMD)',
    valArchX86_32: 'x86 (32-bit)',
    valArchAppleArm: 'ARM64 (Apple Silicon)',
    valBitSuffix: '{bits}-bit',
    valWinKernel: '{edition} (nhân build {ver})',
    valAndroidFrozen: '10+ (bị đóng băng trong chuỗi UA)',
    valMacFrozen: '10.15.7+ (bị đóng băng theo chính sách bảo mật trình duyệt)',
    valWow64Yes: 'Có (ứng dụng 32-bit chạy trên HĐH 64-bit)',
    valWow64Ua: 'Có (phát hiện trong UA)',
    valWow64No: 'Không / Không áp dụng',
    valSourceClientHints: 'User-Agent Client Hints API',
    valSourceUaFallback: 'Phân tích chuỗi User-Agent',
    valUnknown: 'Không rõ',
    valUnknownGamut: 'Dải màu không xác định',
    valSchemeDark: 'Tối',
    valSchemeLight: 'Sáng',
    valNoPreference: 'Không ưu tiên',
    valReduceMotion: 'Giảm chuyển động',
    valCores: '{n} luồng xử lý logic',
    valMemoryBucketed: '~{gb} GB (làm tròn bảo mật)',
    valMemoryRestricted: 'Không khả dụng (Firefox/Safari giới hạn)',
    valTouchPoint: '{n} điểm chạm',
    valTouchPoints: '{n} điểm chạm',
    valOnline: 'Trực tuyến (Online)',
    valOffline: 'Ngoại tuyến (Offline)',
    valColorDepth: '{depth}-bit · {gamut}',

    valNearStandard: 'Gần chuẩn {name} ({w}×{h})',
    valCustomResolution: 'Tùy chỉnh / Phi tiêu chuẩn ({w}×{h})',
    valLandscapeInferred: 'ngang / landscape (suy luận)',
    valPortraitInferred: 'dọc / portrait (suy luận)',
    valEnterDiagonal: 'Nhập kích thước đường chéo bên dưới',
    valPhysicalPpi: '{ppi} PPI (với đường chéo {inches}″)',
    valDprScale: '{dpr}x (tỷ lệ {pct}%)',
    valCssDpi: '{cssDpi} CSS DPI ({physDpi} px/in sau nhân tỷ lệ)',

    valNotQueried: 'Chưa kiểm tra',
    valScreenDetailsUnsupported: 'Trình duyệt không hỗ trợ (chỉ hỗ trợ Chromium trên máy tính)',
    valScreenDetailsUnsupportedShort: 'Trình duyệt không hỗ trợ',
    valDisplaysDetected: 'Phát hiện {count} màn hình',
    valDisplaysDetectedPlural: 'Phát hiện {count} màn hình',
    valPermissionDenied: 'Người dùng hoặc chính sách trình duyệt từ chối cấp quyền',
    valDisplayFallback: 'Màn hình {idx}',
    valTagPrimary: 'Chính',
    valTagExternal: 'Màn hình rời',
    valTagInternal: 'Tích hợp',
    valMonitorMeta: '{w}×{h} CSS ({pw}×{ph} vật lý) · {dpr}x DPR · {depth}-bit',

    toastCopied: 'Đã sao chép toàn bộ báo cáo JSON vào bộ nhớ tạm.',
    toastCopiedFallback: 'Đã sao chép JSON vào bộ nhớ tạm.',
    toastCopyFailed: 'Không thể truy cập bộ nhớ tạm.',
    toastDownloaded: 'Đã tải xuống {filename}',
    toastLangSwitched: 'Đã chuyển ngôn ngữ sang Tiếng Việt.',
  },
};

// ===== CONFIG & LOOKUP TABLES =====

const HIGH_ENTROPY_HINTS = [
  'model',
  'platform',
  'platformVersion',
  'architecture',
  'bitness',
  'uaFullVersion',
  'fullVersionList',
  'wow64',
];

/**
 * Apple iOS / iPadOS logical viewport + DPR lookup table.
 * Safari freezes the iPhone/iPad model string in navigator.userAgent and does not
 * expose Client Hints, so matching logical portrait dimensions + devicePixelRatio
 * produces a candidate list of matching hardware generations.
 * Dimensions are stored normalized as [minSide, maxSide] in CSS pixels.
 */
const APPLE_DEVICE_PROFILES = [
  // iPhones
  { type: 'iPhone', w: 320, h: 568, dpr: 2, models: ['iPhone SE (1st gen)', 'iPhone 5s / 5c / 5'] },
  { type: 'iPhone', w: 375, h: 667, dpr: 2, models: ['iPhone SE (2nd / 3rd gen)', 'iPhone 8', 'iPhone 7', 'iPhone 6s / 6'] },
  { type: 'iPhone', w: 414, h: 736, dpr: 3, models: ['iPhone 8 Plus', 'iPhone 7 Plus', 'iPhone 6s Plus / 6 Plus'] },
  { type: 'iPhone', w: 375, h: 812, dpr: 3, models: ['iPhone 13 mini', 'iPhone 12 mini', 'iPhone 11 Pro', 'iPhone XS', 'iPhone X'] },
  { type: 'iPhone', w: 360, h: 780, dpr: 3, models: ['iPhone 13 mini (Display Zoom)', 'iPhone 12 mini (Display Zoom)'] },
  { type: 'iPhone', w: 414, h: 896, dpr: 2, models: ['iPhone 11', 'iPhone XR'] },
  { type: 'iPhone', w: 414, h: 896, dpr: 3, models: ['iPhone 11 Pro Max', 'iPhone XS Max'] },
  { type: 'iPhone', w: 390, h: 844, dpr: 3, models: ['iPhone 16e', 'iPhone 14', 'iPhone 13', 'iPhone 13 Pro', 'iPhone 12', 'iPhone 12 Pro'] },
  { type: 'iPhone', w: 428, h: 926, dpr: 3, models: ['iPhone 14 Plus', 'iPhone 13 Pro Max', 'iPhone 12 Pro Max'] },
  { type: 'iPhone', w: 393, h: 852, dpr: 3, models: ['iPhone 16', 'iPhone 15', 'iPhone 15 Pro', 'iPhone 14 Pro'] },
  { type: 'iPhone', w: 430, h: 932, dpr: 3, models: ['iPhone 16 Plus', 'iPhone 15 Plus', 'iPhone 15 Pro Max', 'iPhone 14 Pro Max'] },
  { type: 'iPhone', w: 402, h: 874, dpr: 3, models: ['iPhone 16 Pro'] },
  { type: 'iPhone', w: 440, h: 956, dpr: 3, models: ['iPhone 16 Pro Max'] },

  // iPads
  { type: 'iPad', w: 768, h: 1024, dpr: 2, models: ['iPad mini (5th gen / 4)', 'iPad (6th / 5th gen)', 'iPad Air (2nd / 1st gen)', 'iPad Pro 9.7"'] },
  { type: 'iPad', w: 744, h: 1133, dpr: 2, models: ['iPad mini (A17 Pro / 6th gen)'] },
  { type: 'iPad', w: 810, h: 1080, dpr: 2, models: ['iPad (9th / 8th / 7th gen, 10.2")'] },
  { type: 'iPad', w: 820, h: 1180, dpr: 2, models: ['iPad (10th gen)', 'iPad Air (M2 11" / 5th / 4th gen)'] },
  { type: 'iPad', w: 834, h: 1112, dpr: 2, models: ['iPad Air (3rd gen)', 'iPad Pro 10.5"'] },
  { type: 'iPad', w: 834, h: 1194, dpr: 2, models: ['iPad Pro 11" (1st–4th gen)'] },
  { type: 'iPad', w: 834, h: 1210, dpr: 2, models: ['iPad Pro 11" (M4)'] },
  { type: 'iPad', w: 1024, h: 1366, dpr: 2, models: ['iPad Pro 12.9" (1st–6th gen)', 'iPad Air 13" (M2)'] },
  { type: 'iPad', w: 1032, h: 1376, dpr: 2, models: ['iPad Pro 13" (M4)'] },
];

/**
 * Common display resolution marketing names matched against normalized
 * [longEdge, shortEdge] physical pixels.
 */
const RESOLUTION_STANDARDS = [
  { w: 7680, h: 4320, name: '8K UHD (4320p)' },
  { w: 5120, h: 2880, name: '5K Retina / Studio' },
  { w: 5120, h: 2160, name: '5K2K UltraWide (WUHD)' },
  { w: 3840, h: 2400, name: 'WQUXGA (16:10 4K+)' },
  { w: 3840, h: 2160, name: '4K UHD (2160p)' },
  { w: 3440, h: 1440, name: 'UWQHD (UltraWide QHD)' },
  { w: 3200, h: 1800, name: 'QHD+ (1800p)' },
  { w: 2880, h: 1800, name: 'Retina 15" (16:10)' },
  { w: 2560, h: 1600, name: 'WQXGA (16:10 QHD+)' },
  { w: 2560, h: 1440, name: 'QHD / 2K (1440p)' },
  { w: 2560, h: 1080, name: 'UW-FHD (UltraWide)' },
  { w: 1920, h: 1200, name: 'WUXGA (16:10 FHD+)' },
  { w: 1920, h: 1080, name: 'Full HD / FHD (1080p)' },
  { w: 1680, h: 1050, name: 'WSXGA+' },
  { w: 1600, h: 900, name: 'HD+ (900p)' },
  { w: 1440, h: 900, name: 'WXGA+' },
  { w: 1366, h: 768, name: 'HD (WXGA)' },
  { w: 1280, h: 800, name: 'WXGA (16:10)' },
  { w: 1280, h: 720, name: 'HD (720p)' },
];

const GREASE_BRAND_PATTERN = /not[\s(;/_-]*a[\s);/_-]*brand|chromium/i;

// ===== UTILS =====

/**
 * Translates a dictionary key into the active language with optional {param} interpolation.
 */
function t(key, params = null, lang = appState.lang) {
  const dict = I18N[lang] || I18N.en;
  let str = dict[key] ?? I18N.en[key] ?? key;
  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      str = str.replaceAll(`{${k}}`, String(v));
    });
  }
  return str;
}

/**
 * Greatest common divisor via Euclidean algorithm.
 */
function gcd(a, b) {
  let x = Math.abs(Math.round(a));
  let y = Math.abs(Math.round(b));
  while (y !== 0) {
    const tVal = y;
    y = x % y;
    x = tVal;
  }
  return x || 1;
}

/**
 * Formats a reduced integer aspect ratio (e.g. "16:9") plus decimal ratio
 * (helpful for modern tall smartphone displays like 19.5:9 -> 2.17:1).
 */
function formatAspectRatio(width, height) {
  if (!width || !height) return null;
  const divisor = gcd(width, height);
  const rw = Math.round(width / divisor);
  const rh = Math.round(height / divisor);
  const decimal = (width / height).toFixed(2);
  return `${rw}:${rh} (${decimal}:1)`;
}

/**
 * Safely invokes a function and returns fallback on error.
 */
function safeTry(fn, fallback = null) {
  try {
    return fn();
  } catch {
    return fallback;
  }
}

/**
 * Queries a CSS media query safely.
 */
function matchesMedia(query) {
  if (typeof window.matchMedia !== 'function') return false;
  return safeTry(() => window.matchMedia(query).matches, false);
}

/**
 * Collects a snapshot of synchronous + asynchronous browser signals
 * so detector functions remain pure and deterministic.
 */
async function collectEnvironmentSnapshot() {
  const nav = window.navigator || {};
  const scr = window.screen || {};
  const ua = nav.userAgent || '';
  const platform = nav.platform || '';
  const maxTouchPoints = typeof nav.maxTouchPoints === 'number' ? nav.maxTouchPoints : 0;
  const uaData = nav.userAgentData || null;

  let highEntropy = null;
  if (uaData && typeof uaData.getHighEntropyValues === 'function') {
    try {
      highEntropy = await uaData.getHighEntropyValues(HIGH_ENTROPY_HINTS);
    } catch {
      highEntropy = null;
    }
  }

  return {
    ua,
    platform,
    vendor: nav.vendor || '',
    maxTouchPoints,
    uaData,
    highEntropy,
    isBrave: Boolean(nav.brave && typeof nav.brave.isBrave === 'function'),
    screenWidth: scr.width || 0,
    screenHeight: scr.height || 0,
    dpr: window.devicePixelRatio || 1,
    language: nav.language || '',
    languages: Array.isArray(nav.languages) ? nav.languages : [],
    hardwareConcurrency: nav.hardwareConcurrency ?? null,
    deviceMemory: nav.deviceMemory ?? null,
    onLine: typeof nav.onLine === 'boolean' ? nav.onLine : null,
    colorDepth: scr.colorDepth ?? null,
    pixelDepth: scr.pixelDepth ?? null,
  };
}

// ===== DETECTORS (device / os / browser) =====

/**
 * Helper: detects whether an Apple device is an iPad masquerading as macOS.
 * Since iPadOS 13, Safari defaults to requesting desktop sites with a Macintosh UA,
 * while still reporting maxTouchPoints > 1 (typically 5).
 */
function isIPadOSMasquerade(env) {
  const isMacPlatform = /MacIntel/i.test(env.platform) || /Macintosh/i.test(env.ua);
  return isMacPlatform && env.maxTouchPoints > 1;
}

/**
 * Pure detector: Device Type (Desktop / Mobile / Tablet / TV / Console).
 */
function detectDeviceType(env, lang = 'en') {
  const { ua, uaData, maxTouchPoints, screenWidth, screenHeight } = env;

  if (/PlayStation|Xbox|Nintendo/i.test(ua)) {
    return { value: t('valTypeConsole', null, lang), confidence: 'exact' };
  }
  if (/SmartTV|SMART-TV|Tizen|Web0S|webOS|NetCast|BRAVIA|AppleTV|CrKey|Roku|Viera|HbbTV/i.test(ua)) {
    return { value: t('valTypeTv', null, lang), confidence: 'exact' };
  }

  if (isIPadOSMasquerade(env) || /\biPad\b/i.test(ua)) {
    return { value: t('valTypeTablet', null, lang), confidence: 'exact' };
  }

  if (/\biPhone\b|\biPod\b/i.test(ua)) {
    return { value: t('valTypeMobile', null, lang), confidence: 'exact' };
  }

  const shortEdge = Math.min(screenWidth, screenHeight);
  if (uaData && typeof uaData.mobile === 'boolean') {
    if (uaData.mobile) {
      return { value: t('valTypeMobile', null, lang), confidence: 'exact' };
    }
    if (/Android/i.test(ua) || env.highEntropy?.platform === 'Android') {
      return { value: t('valTypeTablet', null, lang), confidence: 'estimated' };
    }
  }

  if (/Android/i.test(ua)) {
    const isMobileUA = /\bMobile\b/i.test(ua);
    if (isMobileUA) {
      return { value: t('valTypeMobile', null, lang), confidence: 'exact' };
    }
    return { value: t('valTypeTablet', null, lang), confidence: 'estimated' };
  }

  if (/Tablet|Kindle|Silk|PlayBook/i.test(ua)) {
    return { value: t('valTypeTablet', null, lang), confidence: 'estimated' };
  }

  if (/Mobi|Windows Phone|BlackBerry|Opera Mini|IEMobile/i.test(ua)) {
    return { value: t('valTypeMobile', null, lang), confidence: 'estimated' };
  }

  if (maxTouchPoints > 0 && shortEdge > 0 && shortEdge < 600) {
    return { value: t('valTypeMobile', null, lang), confidence: 'estimated' };
  }

  return { value: t('valTypeDesktop', null, lang), confidence: 'estimated' };
}

/**
 * Pure detector: Device Brand / Manufacturer.
 */
function detectDeviceBrand(env, lang = 'en') {
  const { ua, highEntropy } = env;
  const modelHint = highEntropy?.model || '';

  if (/\biPhone\b|\biPad\b|\biPod\b|Macintosh/i.test(ua) || isIPadOSMasquerade(env)) {
    return { value: 'Apple', confidence: 'exact' };
  }
  if (/PlayStation/i.test(ua)) return { value: 'Sony', confidence: 'exact' };
  if (/Xbox/i.test(ua)) return { value: 'Microsoft', confidence: 'exact' };
  if (/Nintendo/i.test(ua)) return { value: 'Nintendo', confidence: 'exact' };

  const combined = `${modelHint} ${ua}`;
  const brandPatterns = [
    { regex: /\b(SM-[A-Z0-9]+|GT-[A-Z0-9]+|SAMSUNG|Galaxy)\b/i, brand: 'Samsung' },
    { regex: /\b(Pixel\s?\d|Pixel Fold|Pixel Tablet|Nexus)\b/i, brand: 'Google' },
    { regex: /\b(Redmi|POCO|Mi\s?\d|Xiaomi|22\d{5}[A-Z]|23\d{5}[A-Z]|24\d{5}[A-Z])\b/i, brand: 'Xiaomi' },
    { regex: /\b(CPH\d{4}|OPPO)\b/i, brand: 'OPPO' },
    { regex: /\b(OnePlus|NE\d{4}|LE\d{4}|KB\d{4}|IN\d{4})\b/i, brand: 'OnePlus' },
    { regex: /\b(V\d{4}[A-Z]?|vivo)\b/i, brand: 'vivo' },
    { regex: /\b(RMX\d{4}|realme)\b/i, brand: 'Realme' },
    { regex: /\b(HUAWEI|ELS-|ANA-|VOG-|ELE-|MAR-|STK-)\b/i, brand: 'Huawei' },
    { regex: /\b(moto\s|XT\d{4}|Motorola)\b/i, brand: 'Motorola' },
    { regex: /\b(XQ-[A-Z0-9]+|Sony)\b/i, brand: 'Sony' },
    { regex: /\b(ASUS|ROG Phone|Zenfone)\b/i, brand: 'ASUS' },
    { regex: /\b(Lenovo|TB-\d+)\b/i, brand: 'Lenovo' },
  ];

  for (const entry of brandPatterns) {
    if (entry.regex.test(combined)) {
      return { value: entry.brand, confidence: modelHint ? 'exact' : 'estimated' };
    }
  }

  return { value: t('valUnavailableBrand', null, lang), confidence: 'unavailable' };
}

/**
 * Pure detector: Device Model (or candidate list for Apple mobile devices).
 */
function detectDeviceModel(env, lang = 'en') {
  const { ua, highEntropy, screenWidth, screenHeight, dpr } = env;

  const isIPad = /\biPad\b/i.test(ua) || isIPadOSMasquerade(env);
  const isIPhone = /\biPhone\b/i.test(ua);

  if (isIPhone || isIPad) {
    const targetType = isIPad ? 'iPad' : 'iPhone';
    const minSide = Math.min(screenWidth, screenHeight);
    const maxSide = Math.max(screenWidth, screenHeight);
    const roundedDpr = Math.round(dpr);

    const match = APPLE_DEVICE_PROFILES.find(
      (p) => p.type === targetType && p.w === minSide && p.h === maxSide && p.dpr === roundedDpr
    );

    if (match) {
      return {
        value: match.models.join(' / '),
        confidence: 'estimated',
        note: t('noteAppleEstimated', { w: minSide, h: maxSide, dpr: roundedDpr, type: targetType }, lang),
      };
    }

    return {
      value: t('valAppleUnlisted', { type: targetType, w: minSide, h: maxSide, dpr }, lang),
      confidence: 'estimated',
      note: t('noteAppleUnlisted', null, lang),
    };
  }

  const hintModel = (highEntropy?.model || '').trim();
  if (hintModel) {
    return {
      value: hintModel,
      confidence: 'exact',
      note: t('noteClientHintsModel', null, lang),
    };
  }

  const androidMatch = ua.match(/Android\s[^;)]+;\s*([^;)]+?)(?:\s+Build\/|\))/i);
  if (androidMatch && androidMatch[1]) {
    const candidate = androidMatch[1].trim();
    if (candidate === 'K') {
      return {
        value: t('valUaReducedK', null, lang),
        confidence: 'unavailable',
        note: t('noteUaReducedK', null, lang),
      };
    }
    return {
      value: candidate,
      confidence: 'estimated',
      note: t('noteLegacyUaModel', null, lang),
    };
  }

  const consoleMatch = ua.match(/(PlayStation\s?\d|Xbox(?:\sSeries\s[XS]|\sOne)?|Nintendo\sSwitch)/i);
  if (consoleMatch) {
    return { value: consoleMatch[1], confidence: 'exact' };
  }

  return {
    value: t('valUnavailableDesktopModel', null, lang),
    confidence: 'unavailable',
  };
}

/**
 * Pure detector: CPU Architecture.
 */
function detectCpuArchitecture(env, lang = 'en') {
  const { ua, platform, highEntropy } = env;

  if (highEntropy?.architecture) {
    const archMap = {
      arm: t('valArchArm', null, lang),
      x86: t('valArchX86', null, lang),
    };
    const label = archMap[highEntropy.architecture.toLowerCase()] || highEntropy.architecture;
    return { value: label, confidence: 'exact' };
  }

  if (/arm64|aarch64/i.test(`${ua} ${platform}`)) {
    return { value: 'ARM64', confidence: 'estimated' };
  }
  if (/x86_64|x64|Win64|WOW64|amd64/i.test(`${ua} ${platform}`)) {
    return { value: 'x86_64', confidence: 'estimated' };
  }
  if (/i686|i386|x86/i.test(`${ua} ${platform}`)) {
    return { value: t('valArchX86_32', null, lang), confidence: 'estimated' };
  }
  if (/\biPhone\b|\biPad\b/i.test(ua) || isIPadOSMasquerade(env)) {
    return { value: t('valArchAppleArm', null, lang), confidence: 'estimated' };
  }

  return { value: t('valUnavailable', null, lang), confidence: 'unavailable' };
}

/**
 * Pure detector: CPU Bitness.
 */
function detectCpuBitness(env, lang = 'en') {
  const { ua, platform, highEntropy } = env;

  if (highEntropy?.bitness) {
    return { value: t('valBitSuffix', { bits: highEntropy.bitness }, lang), confidence: 'exact' };
  }

  if (/x86_64|Win64|WOW64|arm64|aarch64/i.test(`${ua} ${platform}`)) {
    return { value: t('valBitSuffix', { bits: 64 }, lang), confidence: 'estimated' };
  }
  if (/\biPhone\b|\biPad\b/i.test(ua) || isIPadOSMasquerade(env)) {
    return { value: t('valBitSuffix', { bits: 64 }, lang), confidence: 'estimated' };
  }
  if (/i686|i386/i.test(platform)) {
    return { value: t('valBitSuffix', { bits: 32 }, lang), confidence: 'estimated' };
  }

  return { value: t('valUnavailable', null, lang), confidence: 'unavailable' };
}

/**
 * Pure detector: Operating System Name.
 */
function detectOSName(env, lang = 'en') {
  const { ua, highEntropy } = env;

  if (isIPadOSMasquerade(env) || /\biPad\b/i.test(ua)) {
    return { value: 'iPadOS', confidence: 'exact' };
  }
  if (/\biPhone\b|\biPod\b/i.test(ua)) {
    return { value: 'iOS', confidence: 'exact' };
  }

  if (highEntropy?.platform) {
    return { value: highEntropy.platform, confidence: 'exact' };
  }
  if (env.uaData?.platform) {
    return { value: env.uaData.platform, confidence: 'exact' };
  }

  if (/Windows NT/i.test(ua)) return { value: 'Windows', confidence: 'exact' };
  if (/CrOS/i.test(ua)) return { value: 'ChromeOS', confidence: 'exact' };
  if (/Android/i.test(ua)) return { value: 'Android', confidence: 'exact' };
  if (/Mac OS X|Macintosh/i.test(ua)) return { value: 'macOS', confidence: 'exact' };
  if (/Linux/i.test(ua)) return { value: 'Linux', confidence: 'exact' };

  return { value: t('valUnavailable', null, lang), confidence: 'unavailable' };
}

/**
 * Pure detector: Operating System Version.
 */
function detectOSVersion(env, lang = 'en') {
  const { ua, highEntropy } = env;
  const platformName = highEntropy?.platform || env.uaData?.platform || '';
  const platformVer = highEntropy?.platformVersion || '';

  if (platformVer) {
    if (/Windows/i.test(platformName)) {
      const major = parseInt(platformVer.split('.')[0], 10);
      if (!Number.isNaN(major)) {
        const winEdition = major >= 13 ? 'Windows 11' : major >= 1 ? 'Windows 10' : 'Windows';
        return {
          value: t('valWinKernel', { edition: winEdition, ver: platformVer }, lang),
          confidence: 'exact',
        };
      }
    }
    return { value: platformVer, confidence: 'exact' };
  }

  const iosMatch = ua.match(/(?:CPU (?:iPhone )?OS|iPad; CPU OS)\s([\d_]+)/i);
  if (iosMatch) {
    return { value: iosMatch[1].replace(/_/g, '.'), confidence: 'exact' };
  }

  const androidMatch = ua.match(/Android\s([\d.]+)/i);
  if (androidMatch) {
    const isFrozen = androidMatch[1] === '10' && /Chrome\//i.test(ua);
    return {
      value: isFrozen ? t('valAndroidFrozen', null, lang) : androidMatch[1],
      confidence: isFrozen ? 'estimated' : 'exact',
    };
  }

  const macMatch = ua.match(/Mac OS X\s([\d_]+)/i);
  if (macMatch) {
    const formatted = macMatch[1].replace(/_/g, '.');
    const isFrozen = formatted === '10.15.7';
    return {
      value: isFrozen ? t('valMacFrozen', null, lang) : formatted,
      confidence: isFrozen ? 'estimated' : 'exact',
    };
  }

  const winMatch = ua.match(/Windows NT\s([\d.]+)/i);
  if (winMatch) {
    const ntMap = {
      '10.0': '10 / 11 (NT 10.0)',
      '6.3': '8.1',
      '6.2': '8',
      '6.1': '7',
    };
    return {
      value: ntMap[winMatch[1]] || `NT ${winMatch[1]}`,
      confidence: winMatch[1] === '10.0' ? 'estimated' : 'exact',
    };
  }

  return { value: t('valUnavailable', null, lang), confidence: 'unavailable' };
}

/**
 * Pure detector: Legacy navigator.platform & WoW64 status.
 */
function detectPlatformDetails(env, lang = 'en') {
  const platformVal = env.platform
    ? { value: env.platform, confidence: 'exact' }
    : { value: t('valUnavailable', null, lang), confidence: 'unavailable' };

  let wow64Val;
  if (typeof env.highEntropy?.wow64 === 'boolean') {
    wow64Val = {
      value: env.highEntropy.wow64 ? t('valWow64Yes', null, lang) : t('valWow64No', null, lang),
      confidence: 'exact',
    };
  } else if (/WOW64/i.test(env.ua)) {
    wow64Val = { value: t('valWow64Ua', null, lang), confidence: 'exact' };
  } else {
    wow64Val = { value: t('valWow64No', null, lang), confidence: 'estimated' };
  }

  return { platform: platformVal, wow64: wow64Val };
}

/**
 * Pure detector: Browser Name, Full Version, Engine, and Source.
 */
function detectBrowser(env, lang = 'en') {
  const { ua, highEntropy, uaData, isBrave } = env;

  const fullList = highEntropy?.fullVersionList || uaData?.brands || [];
  const meaningfulBrands = fullList.filter((b) => b.brand && !GREASE_BRAND_PATTERN.test(b.brand));

  if (meaningfulBrands.length > 0) {
    const primary = meaningfulBrands[0];
    const name = isBrave ? 'Brave' : primary.brand;
    return {
      name: { value: name, confidence: 'exact' },
      version: {
        value: primary.version || t('valUnknown', null, lang),
        confidence: primary.version ? 'exact' : 'estimated',
      },
      engine: { value: 'Blink', confidence: 'exact' },
      source: { value: t('valSourceClientHints', null, lang), confidence: 'exact' },
    };
  }

  const rules = [
    { name: 'Edge', regex: /Edg(?:A|iOS)?\/([\d.]+)/, engine: 'Blink' },
    { name: 'Opera', regex: /(?:OPR|Opera)\/([\d.]+)/, engine: 'Blink' },
    { name: 'Samsung Internet', regex: /SamsungBrowser\/([\d.]+)/, engine: 'Blink' },
    { name: 'Vivaldi', regex: /Vivaldi\/([\d.]+)/, engine: 'Blink' },
    { name: 'Firefox', regex: /(?:Firefox|FxiOS)\/([\d.]+)/, engine: 'Gecko' },
    { name: 'Chrome', regex: /(?:Chrome|CriOS)\/([\d.]+)/, engine: 'Blink' },
    { name: 'Safari', regex: /Version\/([\d.]+).*Safari\//, engine: 'WebKit' },
  ];

  for (const rule of rules) {
    const match = ua.match(rule.regex);
    if (match) {
      const browserName = isBrave && rule.name === 'Chrome' ? 'Brave' : rule.name;
      return {
        name: { value: browserName, confidence: 'exact' },
        version: { value: match[1], confidence: 'exact' },
        engine: { value: rule.engine, confidence: 'exact' },
        source: { value: t('valSourceUaFallback', null, lang), confidence: 'exact' },
      };
    }
  }

  return {
    name: { value: t('valUnavailable', null, lang), confidence: 'unavailable' },
    version: { value: t('valUnavailable', null, lang), confidence: 'unavailable' },
    engine: { value: t('valUnavailable', null, lang), confidence: 'unavailable' },
    source: { value: t('valSourceUaFallback', null, lang), confidence: 'unavailable' },
  };
}

/**
 * Pure detector: Extra environment capabilities & user preferences.
 */
function detectExtraInfo(env, lang = 'en') {
  const timeZone = safeTry(() => Intl.DateTimeFormat().resolvedOptions().timeZone, '');
  const langList = env.languages.length > 1 ? ` (${env.languages.join(', ')})` : '';

  const colorGamut = matchesMedia('(color-gamut: rec2020)')
    ? 'Rec. 2020'
    : matchesMedia('(color-gamut: p3)')
      ? 'Display P3 (Wide Gamut)'
      : matchesMedia('(color-gamut: srgb)')
        ? 'sRGB'
        : t('valUnknownGamut', null, lang);

  const colorScheme = matchesMedia('(prefers-color-scheme: dark)')
    ? t('valSchemeDark', null, lang)
    : matchesMedia('(prefers-color-scheme: light)')
      ? t('valSchemeLight', null, lang)
      : t('valNoPreference', null, lang);

  const reducedMotion = matchesMedia('(prefers-reduced-motion: reduce)')
    ? t('valReduceMotion', null, lang)
    : t('valNoPreference', null, lang);

  const touchKey = env.maxTouchPoints === 1 ? 'valTouchPoint' : 'valTouchPoints';

  return {
    language: env.language
      ? { value: `${env.language}${langList}`, confidence: 'exact' }
      : { value: t('valUnavailable', null, lang), confidence: 'unavailable' },
    timezone: timeZone
      ? { value: timeZone, confidence: 'exact' }
      : { value: t('valUnavailable', null, lang), confidence: 'unavailable' },
    cores:
      typeof env.hardwareConcurrency === 'number'
        ? { value: t('valCores', { n: env.hardwareConcurrency }, lang), confidence: 'estimated' }
        : { value: t('valUnavailable', null, lang), confidence: 'unavailable' },
    memory:
      typeof env.deviceMemory === 'number'
        ? { value: t('valMemoryBucketed', { gb: env.deviceMemory }, lang), confidence: 'estimated' }
        : { value: t('valMemoryRestricted', null, lang), confidence: 'unavailable' },
    touch: { value: t(touchKey, { n: env.maxTouchPoints }, lang), confidence: 'exact' },
    online:
      typeof env.onLine === 'boolean'
        ? { value: env.onLine ? t('valOnline', null, lang) : t('valOffline', null, lang), confidence: 'exact' }
        : { value: t('valUnavailable', null, lang), confidence: 'unavailable' },
    colorDepth:
      typeof env.colorDepth === 'number'
        ? { value: t('valColorDepth', { depth: env.colorDepth, gamut: colorGamut }, lang), confidence: 'exact' }
        : { value: t('valUnavailable', null, lang), confidence: 'unavailable' },
    colorScheme: { value: colorScheme, confidence: 'exact' },
    reducedMotion: { value: reducedMotion, confidence: 'exact' },
  };
}

// ===== SCREEN & DPI MODULE =====

/**
 * Matches physical resolution against standard marketing names.
 */
function identifyResolutionStandard(physW, physH, lang = 'en') {
  if (!physW || !physH) return { value: t('valUnavailable', null, lang), confidence: 'unavailable' };

  const longEdge = Math.max(physW, physH);
  const shortEdge = Math.min(physW, physH);

  const exact = RESOLUTION_STANDARDS.find((s) => s.w === longEdge && s.h === shortEdge);
  if (exact) {
    return { value: exact.name, confidence: 'exact' };
  }

  const near = RESOLUTION_STANDARDS.find(
    (s) => Math.abs(s.w - longEdge) / s.w <= 0.03 && Math.abs(s.h - shortEdge) / s.h <= 0.03
  );
  if (near) {
    return {
      value: t('valNearStandard', { name: near.name, w: longEdge, h: shortEdge }, lang),
      confidence: 'estimated',
    };
  }

  return {
    value: t('valCustomResolution', { w: longEdge, h: shortEdge }, lang),
    confidence: 'estimated',
  };
}

/**
 * Computes all live screen resolution, viewport, orientation, and DPI metrics.
 */
function measureScreenAndDpi(diagonalInches = null, lang = 'en') {
  const scr = window.screen || {};
  const cssW = scr.width || 0;
  const cssH = scr.height || 0;
  const dpr = window.devicePixelRatio || 1;

  // Physical pixels = CSS pixels * devicePixelRatio
  const physW = Math.round(cssW * dpr);
  const physH = Math.round(cssH * dpr);

  const viewW = window.innerWidth || 0;
  const viewH = window.innerHeight || 0;

  const availW = scr.availWidth || 0;
  const availH = scr.availHeight || 0;

  let orientationText = t('valUnavailable', null, lang);
  let orientationConf = 'unavailable';
  if (scr.orientation && scr.orientation.type) {
    const cleanType = scr.orientation.type.replace('-', ' ');
    orientationText = `${cleanType} (${scr.orientation.angle ?? 0}°)`;
    orientationConf = 'exact';
  } else if (viewW && viewH) {
    orientationText =
      viewW >= viewH ? t('valLandscapeInferred', null, lang) : t('valPortraitInferred', null, lang);
    orientationConf = 'estimated';
  }

  // Hidden 1in element CSS DPI check (typically 96 CSS px per W3C spec)
  const probeEl = document.getElementById('css-inch-probe');
  const cssInchWidth = probeEl ? probeEl.getBoundingClientRect().width : 96;
  const effectivePhysicalDpiFromCss = Math.round(cssInchWidth * dpr);

  // Optional Physical PPI calculation from user-supplied screen diagonal:
  // PPI = sqrt(physicalW^2 + physicalH^2) / diagonalInches
  let physicalPpi = {
    value: t('valEnterDiagonal', null, lang),
    confidence: 'unavailable',
    numeric: null,
  };

  if (typeof diagonalInches === 'number' && Number.isFinite(diagonalInches) && diagonalInches > 0) {
    const diagonalPixels = Math.hypot(physW, physH);
    const ppi = diagonalPixels / diagonalInches;
    physicalPpi = {
      value: t('valPhysicalPpi', { ppi: ppi.toFixed(1), inches: diagonalInches }, lang),
      confidence: 'estimated',
      numeric: Number(ppi.toFixed(2)),
    };
  }

  const aspectStr = formatAspectRatio(cssW, cssH);
  const unavailObj = { value: t('valUnavailable', null, lang), confidence: 'unavailable' };

  return {
    raw: {
      cssW,
      cssH,
      physW,
      physH,
      viewW,
      viewH,
      availW,
      availH,
      dpr,
      cssDpi: Math.round(cssInchWidth),
      physicalPpi: physicalPpi.numeric,
    },
    cssResolution: cssW && cssH ? { value: `${cssW} × ${cssH} px`, confidence: 'exact' } : unavailObj,
    physicalResolution:
      physW && physH
        ? { value: `${physW} × ${physH} px`, confidence: dpr === 1 ? 'exact' : 'estimated' }
        : unavailObj,
    standard: identifyResolutionStandard(physW, physH, lang),
    viewport: viewW && viewH ? { value: `${viewW} × ${viewH} px`, confidence: 'exact' } : unavailObj,
    available: availW && availH ? { value: `${availW} × ${availH} px`, confidence: 'exact' } : unavailObj,
    aspectRatio: aspectStr ? { value: aspectStr, confidence: 'exact' } : unavailObj,
    orientation: { value: orientationText, confidence: orientationConf },
    dprMetric: {
      value: t('valDprScale', { dpr: Number(dpr.toFixed(4)), pct: Math.round(dpr * 100) }, lang),
      confidence: 'exact',
    },
    cssDpiMetric: {
      value: t('valCssDpi', { cssDpi: Math.round(cssInchWidth), physDpi: effectivePhysicalDpiFromCss }, lang),
      confidence: 'estimated',
    },
    physicalPpiMetric: physicalPpi,
  };
}

/**
 * Watches for live changes to window.devicePixelRatio (caused by browser zoom
 * or dragging the window across monitors with different DPI scaling).
 */
function watchDevicePixelRatio(onChange) {
  if (typeof window.matchMedia !== 'function') return;

  let activeMql = null;

  const register = () => {
    if (activeMql) {
      activeMql.removeEventListener('change', handleChange);
    }
    const currentDpr = window.devicePixelRatio || 1;
    activeMql = window.matchMedia(`(resolution: ${currentDpr}dppx)`);
    activeMql.addEventListener('change', handleChange, { once: true });
  };

  const handleChange = () => {
    onChange();
    register();
  };

  register();
}

/**
 * Queries the Screen Details API (window.getScreenDetails) when available.
 * Requires transient user activation and user permission.
 */
async function queryScreenDetails() {
  if (!('getScreenDetails' in window) || typeof window.getScreenDetails !== 'function') {
    return {
      statusKey: 'valScreenDetailsUnsupported',
      confidence: 'unavailable',
      screens: [],
    };
  }

  try {
    const details = await window.getScreenDetails();
    const screens = Array.from(details.screens || []).map((s, idx) => ({
      customLabel: s.label || '',
      index: idx + 1,
      isPrimary: Boolean(s.isPrimary),
      isInternal: Boolean(s.isInternal),
      width: s.width,
      height: s.height,
      dpr: s.devicePixelRatio,
      colorDepth: s.colorDepth,
    }));

    return {
      statusKey: screens.length === 1 ? 'valDisplaysDetected' : 'valDisplaysDetectedPlural',
      statusParams: { count: screens.length },
      confidence: 'exact',
      screens,
    };
  } catch (err) {
    const denied = err && err.name === 'NotAllowedError';
    return {
      statusKey: denied ? 'valPermissionDenied' : null,
      rawError: denied ? null : `Error: ${err.message || 'Failed'}`,
      confidence: 'unavailable',
      screens: [],
    };
  }
}

// ===== RENDERERS (DOM updates) =====

const BADGE_KEY_MAP = {
  exact: 'badgeExact',
  estimated: 'badgeEstimated',
  unavailable: 'badgeUnavailable',
};

/**
 * Applies static UI translations across all [data-i18n*] elements.
 */
function applyStaticTranslations(lang) {
  document.documentElement.lang = lang;
  document.title = t('pageTitle', null, lang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key) el.textContent = t(key, null, lang);
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (key) el.innerHTML = t(key, null, lang);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key) el.setAttribute('placeholder', t(key, null, lang));
  });

  // Update active pill indicator on language toggle button
  document.querySelectorAll('[data-lang-opt]').forEach((optEl) => {
    const isMatch = optEl.getAttribute('data-lang-opt') === lang;
    optEl.classList.toggle('is-active', isMatch);
  });

  updateThemeButtonLabel();
}

/**
 * Updates a single metric value + its corresponding localized accuracy badge.
 */
function renderMetric(id, metric) {
  const valueEl = document.getElementById(id);
  const badgeEl = document.querySelector(`[data-badge="${id}"]`);
  if (!valueEl) return;

  const confidence = metric?.confidence || 'unavailable';
  valueEl.textContent = metric?.value ?? t('valUnavailable');

  if (badgeEl) {
    badgeEl.className = `badge badge--${confidence}`;
    badgeEl.textContent = t(BADGE_KEY_MAP[confidence] || 'badgeUnavailable');
  }
}

/**
 * Renders the multi-monitor list returned by getScreenDetails().
 */
function renderMultiMonitorList(result) {
  const statusEl = document.getElementById('screen-details-status');
  const listEl = document.getElementById('monitor-list');

  if (!result) {
    const defaultStatus = !('getScreenDetails' in window)
      ? { value: t('valScreenDetailsUnsupported'), confidence: 'unavailable' }
      : { value: t('valNotQueried'), confidence: 'unavailable' };
    renderMetric('screen-details', defaultStatus);
    if (statusEl) {
      statusEl.textContent = !('getScreenDetails' in window)
        ? t('valScreenDetailsUnsupportedShort')
        : t('valNotQueried');
    }
    return;
  }

  const statusText = result.statusKey ? t(result.statusKey, result.statusParams) : result.rawError;
  renderMetric('screen-details', { value: statusText, confidence: result.confidence });
  if (statusEl) {
    statusEl.textContent = statusText;
  }

  if (!listEl) return;
  listEl.innerHTML = '';
  if (!result.screens || result.screens.length === 0) {
    listEl.hidden = true;
    return;
  }

  result.screens.forEach((scr) => {
    const li = document.createElement('li');
    li.className = 'monitor-item';
    const displayName = scr.customLabel || t('valDisplayFallback', { idx: scr.index });
    const tags = [
      scr.isPrimary ? t('valTagPrimary') : t('valTagExternal'),
      scr.isInternal ? t('valTagInternal') : null,
    ]
      .filter(Boolean)
      .join(' · ');
    const physW = Math.round(scr.width * scr.dpr);
    const physH = Math.round(scr.height * scr.dpr);

    const title = document.createElement('strong');
    title.textContent = `${displayName} (${tags})`;

    const meta = document.createElement('span');
    meta.textContent = t('valMonitorMeta', {
      w: scr.width,
      h: scr.height,
      pw: physW,
      ph: physH,
      dpr: scr.dpr,
      depth: scr.colorDepth,
    });

    li.appendChild(title);
    li.appendChild(meta);
    listEl.appendChild(li);
  });

  listEl.hidden = false;
}

/**
 * Re-runs detectors and renders all cards in the active language.
 */
function renderAllDetections() {
  const { env, lang } = appState;
  if (!env) return;

  const deviceType = detectDeviceType(env, lang);
  const deviceBrand = detectDeviceBrand(env, lang);
  const deviceModel = detectDeviceModel(env, lang);
  const cpuArch = detectCpuArchitecture(env, lang);
  const cpuBitness = detectCpuBitness(env, lang);

  const osName = detectOSName(env, lang);
  const osVersion = detectOSVersion(env, lang);
  const platformDetails = detectPlatformDetails(env, lang);

  const browser = detectBrowser(env, lang);
  const extra = detectExtraInfo(env, lang);

  appState.detected = {
    device: {
      type: deviceType,
      brand: deviceBrand,
      model: { value: deviceModel.value, confidence: deviceModel.confidence },
      architecture: cpuArch,
      bitness: cpuBitness,
    },
    os: {
      name: osName,
      version: osVersion,
      platform: platformDetails.platform,
      wow64: platformDetails.wow64,
    },
    browser,
    extra,
  };

  // Render Device card
  renderMetric('device-type', deviceType);
  renderMetric('device-brand', deviceBrand);
  renderMetric('device-model', deviceModel);
  const modelNoteEl = document.getElementById('device-model-note');
  if (modelNoteEl) {
    if (deviceModel.note) {
      modelNoteEl.textContent = deviceModel.note;
      modelNoteEl.hidden = false;
    } else {
      modelNoteEl.hidden = true;
    }
  }
  renderMetric('device-arch', cpuArch);
  renderMetric('device-bitness', cpuBitness);

  // Render OS card
  renderMetric('os-name', osName);
  renderMetric('os-version', osVersion);
  renderMetric('os-platform', platformDetails.platform);
  renderMetric('os-wow64', platformDetails.wow64);

  // Render Browser card
  renderMetric('browser-name', browser.name);
  renderMetric('browser-version', browser.version);
  renderMetric('browser-engine', browser.engine);
  renderMetric('browser-source', browser.source);

  // Render Extra Info card
  renderMetric('extra-language', extra.language);
  renderMetric('extra-timezone', extra.timezone);
  renderMetric('extra-cores', extra.cores);
  renderMetric('extra-memory', extra.memory);
  renderMetric('extra-touch', extra.touch);
  renderMetric('extra-online', extra.online);
  renderMetric('extra-color-depth', extra.colorDepth);
  renderMetric('extra-color-scheme', extra.colorScheme);
  renderMetric('extra-reduced-motion', extra.reducedMotion);

  // Render Screen, DPI & Multi-Monitor cards
  updateScreenAndDpiUI();
  renderMultiMonitorList(appState.multiMonitor);

  // Render Raw Telemetry block
  const rawEl = document.getElementById('raw-telemetry-output');
  if (rawEl) {
    rawEl.textContent = JSON.stringify(
      {
        userAgent: env.ua,
        platform: env.platform,
        maxTouchPoints: env.maxTouchPoints,
        highEntropyClientHints: env.highEntropy || t('valUnavailable', null, lang),
      },
      null,
      2
    );
  }
}

/**
 * Displays a brief accessible toast message.
 */
let toastTimer = null;
function showToast(message) {
  const toastEl = document.getElementById('toast');
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.classList.add('is-visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toastEl.classList.remove('is-visible');
  }, 2600);
}

// ===== EVENT LISTENERS =====

const appState = {
  env: null,
  detected: null,
  screenMetrics: null,
  multiMonitor: null,
  diagonalInches: null,
  themeMode: 'auto', // 'auto' | 'light' | 'dark'
  lang: 'en', // 'en' | 'vi'
};

function updateScreenAndDpiUI() {
  const metrics = measureScreenAndDpi(appState.diagonalInches, appState.lang);
  appState.screenMetrics = metrics;

  renderMetric('screen-css', metrics.cssResolution);
  renderMetric('screen-physical', metrics.physicalResolution);
  renderMetric('screen-standard', metrics.standard);
  renderMetric('screen-viewport', metrics.viewport);
  renderMetric('screen-avail', metrics.available);
  renderMetric('screen-aspect', metrics.aspectRatio);
  renderMetric('screen-orientation', metrics.orientation);

  renderMetric('dpi-dpr', metrics.dprMetric);
  renderMetric('dpi-css', metrics.cssDpiMetric);
  renderMetric('dpi-physical', metrics.physicalPpiMetric);
}

function buildReportPayload() {
  return {
    generatedAt: new Date().toISOString(),
    reportLanguage: appState.lang,
    device: appState.detected?.device || {},
    operatingSystem: appState.detected?.os || {},
    browser: appState.detected?.browser || {},
    screen: appState.screenMetrics
      ? {
          cssResolution: appState.screenMetrics.cssResolution,
          physicalResolution: appState.screenMetrics.physicalResolution,
          standard: appState.screenMetrics.standard,
          viewport: appState.screenMetrics.viewport,
          availableScreen: appState.screenMetrics.available,
          aspectRatio: appState.screenMetrics.aspectRatio,
          orientation: appState.screenMetrics.orientation,
          raw: appState.screenMetrics.raw,
        }
      : {},
    pixelDensity: appState.screenMetrics
      ? {
          devicePixelRatio: appState.screenMetrics.dprMetric,
          cssReferenceDpi: appState.screenMetrics.cssDpiMetric,
          estimatedPhysicalPpi: appState.screenMetrics.physicalPpiMetric,
          multiMonitor: appState.multiMonitor || { status: t('valNotQueried') },
        }
      : {},
    extraInfo: appState.detected?.extra || {},
    rawTelemetry: {
      userAgent: appState.env?.ua || '',
      platform: appState.env?.platform || '',
      highEntropyClientHints: appState.env?.highEntropy || null,
    },
  };
}

function updateThemeButtonLabel() {
  const labelEl = document.getElementById('theme-label');
  const toggleBtn = document.getElementById('theme-toggle');
  const keyMap = { auto: 'themeAuto', light: 'themeLight', dark: 'themeDark' };
  if (labelEl) labelEl.textContent = t(keyMap[appState.themeMode] || 'themeAuto');
  if (toggleBtn) toggleBtn.setAttribute('aria-pressed', String(appState.themeMode !== 'auto'));
}

function cycleTheme() {
  const order = ['auto', 'light', 'dark'];
  const next = order[(order.indexOf(appState.themeMode) + 1) % order.length];
  appState.themeMode = next;

  const root = document.documentElement;
  if (next === 'auto') {
    root.removeAttribute('data-theme');
  } else {
    root.setAttribute('data-theme', next);
  }

  updateThemeButtonLabel();
  safeTry(() => localStorage.setItem('inspector-theme', next));
}

function toggleLanguage() {
  appState.lang = appState.lang === 'en' ? 'vi' : 'en';
  applyStaticTranslations(appState.lang);
  renderAllDetections();
  safeTry(() => localStorage.setItem('inspector-lang', appState.lang));
  showToast(t('toastLangSwitched'));
}

function restoreSavedPreferences() {
  const savedTheme = safeTry(() => localStorage.getItem('inspector-theme'), null);
  if (savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'auto') {
    appState.themeMode = savedTheme;
    if (savedTheme !== 'auto') {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }

  const savedLang = safeTry(() => localStorage.getItem('inspector-lang'), null);
  if (savedLang === 'en' || savedLang === 'vi') {
    appState.lang = savedLang;
  }
}

function bindEvents() {
  // Live resize & orientation updates
  window.addEventListener('resize', updateScreenAndDpiUI, { passive: true });
  window.addEventListener('orientationchange', updateScreenAndDpiUI, { passive: true });
  if (window.screen?.orientation) {
    safeTry(() => window.screen.orientation.addEventListener('change', updateScreenAndDpiUI));
  }

  // Live DPR updates (zoom or moving between monitors)
  watchDevicePixelRatio(updateScreenAndDpiUI);

  // Live network & preference listeners
  const refreshExtraPreferences = () => {
    if (!appState.env) return;
    appState.env.onLine = navigator.onLine;
    const extra = detectExtraInfo(appState.env, appState.lang);
    appState.detected.extra = extra;
    renderMetric('extra-online', extra.online);
    renderMetric('extra-color-depth', extra.colorDepth);
    renderMetric('extra-color-scheme', extra.colorScheme);
    renderMetric('extra-reduced-motion', extra.reducedMotion);
  };

  window.addEventListener('online', refreshExtraPreferences);
  window.addEventListener('offline', refreshExtraPreferences);

  if (typeof window.matchMedia === 'function') {
    safeTry(() => {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', refreshExtraPreferences);
      window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', refreshExtraPreferences);
    });
  }

  // Screen diagonal PPI input & preset chips
  const diagonalInput = document.getElementById('diagonal-input');
  const clearDiagonalBtn = document.getElementById('clear-diagonal-btn');
  const presetChips = document.getElementById('preset-chips');

  if (diagonalInput) {
    diagonalInput.addEventListener('input', () => {
      const val = parseFloat(diagonalInput.value);
      appState.diagonalInches = !Number.isNaN(val) && val > 0 ? val : null;
      updateScreenAndDpiUI();
    });
  }

  if (clearDiagonalBtn && diagonalInput) {
    clearDiagonalBtn.addEventListener('click', () => {
      diagonalInput.value = '';
      appState.diagonalInches = null;
      updateScreenAndDpiUI();
      diagonalInput.focus();
    });
  }

  if (presetChips && diagonalInput) {
    presetChips.addEventListener('click', (event) => {
      const chip = event.target.closest('[data-inches]');
      if (!chip) return;
      const inches = parseFloat(chip.dataset.inches);
      if (!Number.isNaN(inches)) {
        diagonalInput.value = String(inches);
        appState.diagonalInches = inches;
        updateScreenAndDpiUI();
      }
    });
  }

  // Screen Details API button
  const screenDetailsBtn = document.getElementById('screen-details-btn');
  if (screenDetailsBtn) {
    if (!('getScreenDetails' in window)) {
      screenDetailsBtn.disabled = true;
    } else {
      screenDetailsBtn.addEventListener('click', async () => {
        screenDetailsBtn.disabled = true;
        const result = await queryScreenDetails();
        appState.multiMonitor = result;
        renderMultiMonitorList(result);
        screenDetailsBtn.disabled = false;
      });
    }
  }

  // Language toggle (English / Vietnamese)
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', toggleLanguage);
  }

  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', cycleTheme);
  }

  // Copy JSON button
  const copyBtn = document.getElementById('copy-json-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const jsonStr = JSON.stringify(buildReportPayload(), null, 2);
      try {
        await navigator.clipboard.writeText(jsonStr);
        showToast(t('toastCopied'));
      } catch {
        const textarea = document.createElement('textarea');
        textarea.value = jsonStr;
        textarea.className = 'css-inch-probe';
        document.body.appendChild(textarea);
        textarea.select();
        const ok = safeTry(() => document.execCommand('copy'), false);
        document.body.removeChild(textarea);
        showToast(ok ? t('toastCopiedFallback') : t('toastCopyFailed'));
      }
    });
  }

  // Download JSON report button
  const downloadBtn = document.getElementById('download-json-btn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      const jsonStr = JSON.stringify(buildReportPayload(), null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const dateStamp = new Date().toISOString().slice(0, 10);
      const filename = `device-report-${dateStamp}.json`;

      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      showToast(t('toastDownloaded', { filename }));
    });
  }
}

// ===== INIT =====

async function init() {
  restoreSavedPreferences();
  applyStaticTranslations(appState.lang);

  const env = await collectEnvironmentSnapshot();
  appState.env = env;

  renderAllDetections();
  bindEvents();
}

document.addEventListener('DOMContentLoaded', init);