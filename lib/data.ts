import slugify from "slugify";

import { Data, IProductInput } from "@/types";

const products: IProductInput[] = [
  {
    name: "Nikon D850 Camera DSLR 45.7MP CMOS Body",
    slug: slugify("Nikon D850 Camera DSLR 45.7MP CMOS Body"),
    category: "dlsr",
    images: [
      "/dslr/Nikon_D850_1.png",
      "/dslr/Nikon_D850_2.png",
      "/dslr/Nikon_D850_3.png",
      "/dslr/Nikon_D850_4.png",
      "/dslr/Nikon_D850_5.png",
    ],
    brand: "Nikon",
    description:
      "The Nikon D850 is a versatile multimedia DSLR with a 45.7MP BSI CMOS sensor and EXPEED 5 processor, offering impressive resolution and speed. It shoots at 7 fps for up to 51 frames and features an expandable ISO range from 32 to 102400. The camera supports 4K UHD video, 8K time-lapse, and specialized modes for film negatives and focus stacking. Its 153-point AF system ensures precise focusing in diverse lighting. Ideal for high-resolution photography, low-light performance, and multimedia content creation.",
    price: 2441.95,
    countInStock: 1,
  },
  {
    name: "Canon EOS 6D Mark II Camera DSLR 26.2MP CMOS Body",
    slug: slugify("Canon EOS 6D Mark II Camera DSLR 26.2MP CMOS Body"),
    category: "dlsr",
    images: [
      "/dslr/Canon_EOS_6D_1.png",
      "/dslr/Canon_EOS_6D_2.png",
      "/dslr/Canon_EOS_6D_3.png",
      "/dslr/Canon_EOS_6D_4.png",
      "/dslr/Canon_EOS_6D_5.png",
    ],
    brand: "Canon",
    description:
      "The Canon EOS 6D Mark II is a compact DSLR with a 26.2 MP full-frame sensor and DIGIC 7 processor, delivering exceptional results in low light. It features a 45-point AF system, fast Dual Pixel CMOS AF, and a Vari-angle touchscreen for unique angles. Capable of Full HD 60p video and capturing up to ISO 102400, this camera is perfect for landscape, portrait, and event photography. Its lightweight design and high-resolution capabilities make it ideal for creative photographers on the go.",
    price: 2279.99,
    countInStock: 1,
  },
  {
    name: "Nikon D7500 Camera DSLR 20.9MP CMOS 4K Kit 18-140 mm",
    slug: slugify("Nikon D7500 Camera DSLR 20.9MP CMOS 4K Kit 18-140 mm"),
    category: "dlsr",
    images: [
      "/dslr/Nikon_D7500_1.png",
      "/dslr/Nikon_D7500_2.png",
      "/dslr/Nikon_D7500_3.png",
      "/dslr/Nikon_D7500_4.png",
      "/dslr/Nikon_D7500_5.png",
    ],
    brand: "Nikon",
    description:
      "The Nikon D7500 with the AF-S DX NIKKOR 18-140mm f/3.5-5.6G ED VR lens is the perfect choice for travelers. The camera offers high resolution, 4K/UHD video, and excellent performance at high ISO (up to 1,640,000). With the VR vibration reduction system, images remain sharp even in low light. The 8 fps shooting speed and the ability to capture 50 RAW or 100 JPEG in a burst ensure accuracy. The camera's tilting screen and convenient controls make it ideal for shooting from any angle.",
    price: 1399.99,
    countInStock: 1,
  },
  {
    name: "Canon EOS 250D Kit with Camera Lens EF-S 18-55mm DC Black",
    slug: slugify("Canon EOS 250D Kit with Camera Lens EF-S 18-55mm DC Black"),
    category: "dlsr",
    images: [
      "/dslr/Canon_EOS_250D_1.png",
      "/dslr/Canon_EOS_250D_2.png",
      "/dslr/Canon_EOS_250D_3.png",
      "/dslr/Canon_EOS_250D_4.png",
      "/dslr/Canon_EOS_250D_5.png",
    ],
    brand: "Canon",
    description:
      "The Canon EOS 250D DSLR camera offers a 24.1 MP resolution, producing high-quality images with a maximum aperture of f/3.5 for excellent light capture. It comes with an EF-S 18-55mm f/3.5-5.6 III lens, making it ideal for various photography needs. As part of the Canon EOS series, the EOS 250D is a reliable and versatile choice for anyone looking to elevate their photography.",
    price: 720.49,
    countInStock: 1,
  },
  {
    name: "Canon EOS 2000D Camera DSLR 24.1MP CMOS Kit with Camera Lens EF-S 18-55mm f/3.5-5.6 III Black",
    slug: slugify(
      "Canon EOS 2000D Camera DSLR 24.1MP CMOS Kit with Camera Lens EF-S 18-55mm f/3.5-5.6 III Black"
    ),
    category: "dlsr",
    images: [
      "/dslr/Canon_EOS_2000D_1.png",
      "/dslr/Canon_EOS_2000D_2.png",
      "/dslr/Canon_EOS_2000D_3.png",
      "/dslr/Canon_EOS_2000D_4.png",
      "/dslr/Canon_EOS_2000D_5.png",
    ],
    brand: "Canon",
    description:
      "The camera features a 22.3 x 14.9 mm CMOS sensor with a total of 24.1 MP and 24.7 MP effective pixels, offering a 3:2 aspect ratio. It has a built-in, fixed low-pass filter and supports manual sensor cleaning and dust deletion. Autofocus is phase-detection in optical viewfinder mode and contrast-detection in Live View. The maximum burst rate is 3 fps, with up to 150 JPEG or 11 RAW images. Intelligent scene modes include portrait, landscape, and night portrait, among others. Program modes include shutter priority, aperture priority, and manual exposure. It comes with a 24-month warranty.",
    price: 720.49,
    countInStock: 1,
  },
  {
    name: "Sigma FP Digital Camera Full Frame 24.6MP Body",
    slug: slugify("Sigma FP Digital Camera Full Frame 24.6MP Body"),
    category: "professional",
    images: [
      "/professional/Sigma_1.png",
      "/professional/Sigma_2.png",
      "/professional/Sigma_3.png",
      "/professional/Sigma_4.png",
      "/professional/Sigma_5.png",
    ],
    brand: "Canon",
    description:
      "As one of the world's most compact and lightweight full-frame digital cameras, the Sigma fp L is equipped with professional features designed for a wide range of users and applications. When paired with the Sigma EVF-11 electronic viewfinder—a bright, realistic 0.5-inch OLED panel with a resolution of approximately 3.68 million dots—this camera boasts a powerful 61-megapixel back-illuminated Bayer CMOS sensor, capable of delivering exceptional performance.",
    price: 1899.99,
    countInStock: 1,
  },
  {
    name: "Sony A7 III Body Photo Camera Mirrorless 24MP Full Frame 4K",
    slug: slugify(
      "Sony A7 III Body Photo Camera Mirrorless 24MP Full Frame 4K"
    ),
    category: "mirrorless",
    images: [
      "/mirrorless/Sony_A7_1.png",
      "/mirrorless/Sony_A7_2.png",
      "/mirrorless/Sony_A7_3.png",
      "/mirrorless/Sony_A7_4.png",
      "/mirrorless/Sony_A7_5.png",
    ],
    brand: "Sony",
    description:
      "The Sony a7 III is a versatile camera designed for both photo and video, featuring a 24.2MP Exmor R BSI CMOS sensor and BIONZ X processor for improved speed, low-light performance, and image quality. Its back-illuminated sensor enables 14-bit high-resolution stills, ISO range of 100-51200 (expandable to ISO 50-204800), and UHD 4K video recording with a wide dynamic range. The camera supports continuous shooting at 10 fps with full AF/AE and up to 177 frames. The updated body design includes a touchscreen LCD, improved EVF, larger battery, and dual memory card slots for convenience.",
    price: 1398.99,
    countInStock: 1,
  },
  {
    name: "Canon EOS R6 Photo Camera Mirrorless Full-Frame 20.1 M",
    slug: slugify("Canon EOS R6 Photo Camera Mirrorless Full-Frame 20.1 M"),
    category: "mirrorless",
    images: [
      "/mirrorless/Canon_EOS_R6_1.png",
      "/mirrorless/Canon_EOS_R6_2.png",
      "/mirrorless/Canon_EOS_R6_3.png",
      "/mirrorless/Canon_EOS_R6_4.png",
      "/mirrorless/Canon_EOS_R6_5.png",
    ],
    brand: "Canon",
    description:
      "The EOS R6 offers exceptional speed with up to 20 fps silent shooting, capturing fast-moving moments with ease. It delivers cinematic video performance with Canon Log and HDR PQ for a greater dynamic range, and supports 10-bit 4:2:2 internal recording. Its five-axis image stabilization compensates for up to 8 stops, even without a tripod. When paired with RF lenses, stabilization is enhanced. The Dual Pixel CMOS AF II system, powered by the DIGIC X processor, offers precise subject tracking, even for animals. Designed for ease, the EOS R6 ensures intuitive operation for creative freedom.",
    price: 1699.99,
    countInStock: 1,
  },
  {
    name: "Canon EOS M50 II Photo Camera Mirrorless 24MP Kit with Camera Lens EF-M 15-45mm F/3.5-6.3 IS STM Black",
    slug: slugify(
      "Canon EOS M50 II Photo Camera Mirrorless 24MP Kit with Camera Lens EF-M 15-45mm F/3.5-6.3 IS STM Black"
    ),
    category: "mirrorless",
    images: [
      "/mirrorless/Canon_EOS_M50_1.png",
      "/mirrorless/Canon_EOS_M50_2.png",
      "/mirrorless/Canon_EOS_M50_3.png",
      "/mirrorless/Canon_EOS_M50_4.png",
      "/mirrorless/Canon_EOS_M50_5.png",
    ],
    brand: "Canon",
    description:
      "The EOS M50 is a compact yet powerful camera with a continuous shooting speed of up to 15 fps. Its advanced autofocus system, similar to higher-end models like the EOS R6 Mark II, features a video blogger-friendly mode prioritizing objects near the camera and face detection. The camera records 4K video at 30 fps, with both horizontal and vertical filming modes for social media content. It includes an external microphone input for high-quality audio and USB connectivity for use as a webcam. Bluetooth, Wi-Fi, and the Camera Connect app offer easy photo transfer and remote control.",
    price: 815.99,
    countInStock: 1,
  },
  {
    name: "Canon EOS R6 Mark II Photo Camera Mirrorless Full Frame 24.2MP Body Black",
    slug: slugify(
      "Canon EOS R6 Mark II Photo Camera Mirrorless Full Frame 24.2MP Body Black"
    ),
    category: "mirrorless",
    images: [
      "/mirrorless/Canon_EOS_R6_Mark2_1.png",
      "/mirrorless/Canon_EOS_R6_Mark2_2.png",
      "/mirrorless/Canon_EOS_R6_Mark2_3.png",
      "/mirrorless/Canon_EOS_R6_Mark2_4.png",
      "/mirrorless/Canon_EOS_R6_Mark2_5.png",
    ],
    brand: "Canon",
    description:
      "The EOS R6 Mark II combines exceptional shooting performance and image quality, allowing you to capture moments at up to 40 fps, even in low light. Its AI-powered autofocus system, based on deep learning, locks onto fast-moving subjects with precision. It records stunning 4K 60p videos with oversampled quality. The next-gen AI autofocus is 80% faster than the original EOS R6, while the built-in image stabilizer and Canon lens stabilizers offer up to 8 stops of protection. For professional-level flexibility, shoot in 6K ProRes Raw for superior resolution and dynamic range.",
    price: 2279.99,
    countInStock: 1,
  },
  {
    name: "Panasonic LUMIX S5 II Photo Camera Mirrorless Full Frame 24.2MP",
    slug: slugify(
      "Panasonic LUMIX S5 II Photo Camera Mirrorless Full Frame 24.2MP"
    ),
    category: "mirrorless",
    images: [
      "/mirrorless/LUMIX_S5_1.png",
      "/mirrorless/LUMIX_S5_2.png",
      "/mirrorless/LUMIX_S5_3.png",
      "/mirrorless/LUMIX_S5_4.png",
      "/mirrorless/LUMIX_S5_5.png",
    ],
    brand: "Panasonic",
    description:
      "The LUMIX S5IIX is a compact full-frame mirrorless camera designed for creators, offering advanced features like phase-detection AF, Image Stabilization, and unlimited recording time in 4K 60p/50p 4:2:2 10-bit format. Its black design minimizes glare, enhancing creativity. The camera supports external SSD recording in ProRes 422 HQ and All-Intra 4:2:2 10-bit formats, improving backup and post-production efficiency. With wireless or wired real-time streaming options, hybrid AF, and Active I.S., it delivers reliable, fast autofocus and stable shooting, even in challenging conditions. The optimized heat dissipation and Dual Native ISO technology ensure high-quality, noise-free content.",
    price: 2160.95,
    countInStock: 1,
  },
  {
    name: "Fujifilm Instax Mini 99 Black",
    slug: slugify("Fujifilm Instax Mini 99 Black"),
    category: "film",
    images: [
      "/film_camera/Instax_Mini_1.png",
      "/film_camera/Instax_Mini_2.png",
      "/film_camera/Instax_Mini_3.png",
      "/film_camera/Instax_Mini_4.png",
      "/film_camera/Instax_Mini_5.jpg",
    ],
    brand: "Fujifilm",
    description:
      "The INSTAX MINI 99 is a premium analog instant camera designed for creative expression. It offers six color effects and five shooting modes, including &quot;Bulb,&quot; &quot;Indoor,&quot; &quot;Double Exposure,&quot; &quot;Sports,&quot; and more. Choose from five brightness levels and three focus modes (macro, standard, landscape) for versatile shots. The manual vignette switch adds artistic depth, and the flash can be adjusted for perfect lighting. With its tactile matte black finish, sleek design, and easy-to-use features like a self-timer and tripod mount, this camera delivers a unique and customizable instant photography experience.",
    price: 219.99,
    countInStock: 1,
  },
  {
    name: "Fujifilm INSTAX WIDE 400 Camera EX D",
    slug: slugify("Fujifilm INSTAX WIDE 400 Camera EX D"),
    category: "film",
    images: [
      "/film_camera/Instax_Wide_1.png",
      "/film_camera/Instax_Wide_2.png",
      "/film_camera/Instax_Wide_3.png",
      "/film_camera/Instax_Wide_4.png",
      "/film_camera/Instax_Wide_5.png",
    ],
    brand: "Fujifilm",
    description:
      "The FUJIFILM Instax Wide 400 is an instant camera that captures and shares moments instantly. It features automatic exposure, flash control, and an analog-style self-timer for easy group photos. Angle adjustment accessories help find the perfect shot without a tripod. With focus modes for normal, landscape, and close-up shots, creativity is limitless. The camera uses INSTAX WIDE film (sold separately) for vibrant images. It includes a carrying strap, close-up lens, angle adjustment accessories, and four AA batteries, making it ideal for spontaneous photography and adventures.",
    price: 329.99,
    countInStock: 1,
  },
  {
    name: "Agfaphoto Photo Camera Analog 35mm Reusable Red",
    slug: slugify("Agfaphoto Photo Camera Analog 35mm Reusable Red"),
    category: "film",
    images: [
      "/film_camera/Agfa_1.png",
      "/film_camera/Agfa_2.png",
      "/film_camera/Agfa_3.png",
      "/film_camera/Agfa_4.png",
      "/film_camera/Agfa_5.png",
    ],
    brand: "Agfa",
    description:
      "AgfaPhoto 35mm Analog Camera, Red (Includes Film & Battery). Color – Red. The camera kit includes film, battery, bag, and shoulder strap. Easy to use and reusable—only film and batteries need replacement. Color and black-and-white film compatible. Supports all ISO 200/400/800 films.",
    price: 94.99,
    countInStock: 1,
  },
  {
    name: "Fujifilm Instax Mini 40 Photo Camera Instant Black",
    slug: slugify("Fujifilm Instax Mini 40 Photo Camera Instant Black"),
    category: "film",
    images: [
      "/film_camera/Fujifilm_Mini_1.png",
      "/film_camera/Fujifilm_Mini_2.png",
      "/film_camera/Fujifilm_Mini_3.png",
      "/film_camera/Fujifilm_Mini_4.png",
      "/film_camera/Fujifilm_Mini_5.png",
    ],
    brand: "Fujifilm",
    description:
      "An instant camera in a classic style but with modern technology. Bright and eye-catching, yet easily adaptable to various clothing styles. With a coarse-grain leather-like texture and sharp silver trim, this design is timeless. Automatic exposure—meaning automatic control of flash power and shutter speed—makes photography as simple as point and shoot. Whether day or night, the camera adjusts the settings to ensure bright images with rich colors. A special &quot;Selfie Mode&quot; is just a pull away—simply extend the front of the lens and take self-portraits at arm's length. A small mirror next to the lens helps you frame your shot perfectly. The selfie mode can also be used for capturing small objects at a close distance (0.3 m).",
    price: 119.99,
    countInStock: 1,
  },
  {
    name: "Fujifilm Instax Mini Evo Hybrid Photo Camera Instant",
    slug: slugify("Fujifilm Instax Mini Evo Hybrid Photo Camera Instant"),
    category: "film",
    images: [
      "/film_camera/Fujifilm_Evo_1.png",
      "/film_camera/Fujifilm_Evo_2.png",
      "/film_camera/Fujifilm_Evo_3.png",
      "/film_camera/Fujifilm_Evo_4.png",
      "/film_camera/Fujifilm_Evo_5.png",
    ],
    brand: "Fujifilm",
    description:
      "Thanks to 10 lens effects and 10 film effects, you can precisely convey what you have in mind. Experiment with color saturation, use a retro style, soft focus, and faded tones - this is your shot, and you can capture it in 100 different ways of your choice. Turn the tactile and highly convenient mini Evo lens dial to browse through 10 lens effects and create something unique. A unique hands-on experience: turn the film dial until it clicks to select one of 10 film effects. With the mini Evo, you’ll exceed all expectations - it’s the perfect tool for expressing your impressions. Adjust the exposure, fine-tune the white balance, use the flash or shoot without it, and if you want to capture something up close, you can even select the macro mode. And if you feel like stepping in front of the camera - it's the perfect moment to use the self-timer.",
    price: 315.99,
    countInStock: 1,
  },
  {
    name: "Sony Cyber-shot DSC-RX10 IV Photo Camera Compact 20.1MP Wi-Fi Bluetooth Black",
    slug: slugify(
      "Sony Cyber-shot DSC-RX10 IV Photo Camera Compact 20.1MP Wi-Fi Bluetooth Black"
    ),
    category: "compact",
    images: [
      "/compact/dscrx10-1.png",
      "/compact/dscrx10-2.png",
      "/compact/dscrx10-3.png",
      "/compact/dscrx10-4.png",
      "/compact/dscrx10-5.png",
    ],
    brand: "Sony",
    description:
      "The Sony DSC-RX10 IV is a professional-grade compact camera featuring ultra-fast autofocus, 25x optical zoom, and advanced image processing. Its 24-600mm F2.4-4 lens includes aspherical AA lenses, ED glass, ZEISS® T* coating, and a fast aperture. With a 20.1 MP Exmor RS® CMOS sensor, 315-point phase detection, and DRAM chip for slow-motion recording up to 960 fps, it offers high image quality with minimal noise. The camera supports 24 fps continuous shooting, 4K video, and creative modes like super slow motion, all in a dust- and moisture-resistant body.",
    price: 1839.99,
    countInStock: 1,
  },
  {
    name: "Sony Cyber-Shot DSC-RX100 VA - Photo Camera, 20,1 MP, Zoom Optic, 2.9x, ZEISS Vario-Sonnar",
    slug: slugify(
      "Sony Cyber-Shot DSC-RX100 VA - Photo Camera, 20,1 MP, Zoom Optic, 2.9x, ZEISS Vario-Sonnar"
    ),
    category: "compact",
    images: [
      "/compact/dscrx100-1.png",
      "/compact/dscrx100-2.png",
      "/compact/dscrx100-3.png",
      "/compact/dscrx100-4.png",
      "/compact/dscrx100-5.png",
    ],
    brand: "Sony",
    description:
      "The 24-200mm zoom lens offers high image quality and compactness, delivering maximum resolution at any focal length. The camera features a fast autofocus system with 357 phase detection points and 425 contrast points, covering 68% of the frame in 0.02 seconds. Its 20.1 MP 1.0-type sensor with back-illuminated technology reduces noise and enhances texture. The camera supports 4K video without pixel binning, real-time tracking, and eye autofocus. It also includes an XGA OLED Tru-Finder viewfinder, tilting LCD screen, and touch shooting for user-friendly operation.",
    price: 1584.99,
    countInStock: 1,
  },
  {
    name: "Panasonic Lumix FZ1000 II Photo Camera Bridge 20.1 MP Zoom 16x 4K Black",
    slug: slugify(
      "Panasonic Lumix FZ1000 II Photo Camera Bridge 20.1 MP Zoom 16x 4K Black"
    ),
    category: "compact",
    images: [
      "/compact/lumix-fz1000-1.png",
      "/compact/lumix-fz1000-2.png",
      "/compact/lumix-fz1000-3.png",
      "/compact/lumix-fz1000-4.png",
      "/compact/lumix-fz1000-5.png",
    ],
    brand: "Panasonic",
    description:
      "The 60x zoom camera (20–1200mm) captures detailed shots from wide-angle panoramas to distant details. Its OLED Live View viewfinder with 2.36 million dots ensures clarity, even in bright light, while the ergonomic grip is perfect for any adventure. 4K video delivers four times the detail of Full HD, and the &quot;4K Photo&quot; function lets you extract 8 MP frames. Post Focus and Focus Stacking enable creative flexibility, while the POWER O.I.S. stabilizer ensures steady shots even at max zoom. Macro shooting, a 3.0-inch touchscreen, and USB Type-C charging provide added convenience.",
    price: 449.99,
    countInStock: 1,
  },
  {
    name: "Nikon Coolpix P1000 Photo Camera Bridge 16MP Black",
    slug: slugify("Nikon Coolpix P1000 Photo Camera Bridge 16MP Black"),
    category: "compact",
    images: [
      "/compact/coolpix-p1000-1.png",
      "/compact/coolpix-p1000-2.png",
      "/compact/coolpix-p1000-3.png",
      "/compact/coolpix-p1000-4.png",
      "/compact/coolpix-p1000-5.png",
    ],
    brand: "Nikon",
    description:
      "The COOLPIX P950 camera with 83x optical zoom (2000mm equivalent) is ideal for capturing birds, airshows, or safaris. Its 24–2000mm focal length range, plus 166x digital zoom with Dynamic Fine Zoom, offers great detail even at high zoom. The CMOS sensor and f/2.8 NIKKOR lens reduce distortion. It records 4K or Full HD video with stereo sound at 60p, and features time-lapse, manual video mode, and HDMI output. Dual Detect Optical Vibration Reduction ensures sharp handheld shots, and focus tracking simplifies capturing fast-moving subjects. Nikon accessories and SnapBridge connectivity enhance the experience.",
    price: 979.99,
    countInStock: 1,
  },
  {
    name: "Olympus TG-6 Photo Camera Compact Subacvatic 12MP 4K Black",
    slug: slugify("Olympus TG-6 Photo Camera Compact Subacvatic 12MP 4K Black"),
    category: "compact",
    images: [
      "/compact/olympus-tg6-1.png",
      "/compact/olympus-tg6-2.png",
      "/compact/olympus-tg6-3.png",
      "/compact/olympus-tg6-4.png",
      "/compact/olympus-tg6-5.png",
    ],
    brand: "Olympus",
    description:
      "The Olympus Tough TG-6 is built for extreme conditions, offering water resistance up to 15m, shock protection from drops up to 2.1m, freeze resistance to -10°C, and a dual-glass lens to prevent fogging. Its F2.0 lens and backlit CMOS sensor ensure high-quality images, while the digital teleconverter boosts optical zoom up to 8x. The TruePic VIII processor reduces noise and enhances detail. The macro system focuses at 1 cm, and underwater modes, including wide-angle and macro, support deeper dives with accessories like the PT-059 waterproof case (45m) and Fisheye converter.",
    price: 549.99,
    countInStock: 1,
  },
];

const data: Data = {
  products,
};

export default data;
