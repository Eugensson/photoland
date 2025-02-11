import bcrypt from "bcryptjs";
import slugify from "slugify";

import { Data, IProductInput, IUserInput } from "@/types";

const users: IUserInput[] = [
  {
    name: "Admin",
    email: "admin@admin.com",
    password: bcrypt.hashSync("123456", 10),
    role: "Admin",
    emailVerified: true,
  },
  {
    name: "User",
    email: "user@user.com",
    password: bcrypt.hashSync("123456", 10),
    role: "User",
    emailVerified: true,
  },
];

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
      "Proving that speed and resolution can indeed coexist, the Nikon D850 is a multimedia DSLR that brings together robust stills capabilities along with apt movie and time-lapse recording. Revolving around a newly designed 45.7MP BSI CMOS sensor and proven EXPEED 5 image processor, the D850 is clearly distinguished by its high resolution for recording detailed imagery. The back-illuminated design of the sensor is able to acquire greater detail and clarity when working in low-light conditions, and the sensor also forgoes an optical low-pass filter for improved sharpness. Working in conjunction with the sensor is the EXPEED 5 image processor, which together afford a 7 fps continuous shooting rate for up to 51 consecutive frames, an expandable sensitivity range from ISO 32 to 102400, and 4K UHD video recording using either a DX crop or the entire area of the full-frame sensor. An 8K time-lapse recording mode is also available, as well as additional specialized recording modes for digitizing film negatives and for focus stacking applications. Benefitting the imaging capabilities is an advanced Multi-CAM 20K 153-point AF system, which debuted with the flagship D5 and offers 99 cross-type sensors for refined focusing accuracy in a variety of lighting conditions. Checking off a number of boxes for multimedia image-makers, the D850 positions itself as not only a high-resolution DSLR but also as a camera for speed, movies, and low-light shooting needs.",
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
      "For superb performance on the go, the Canon EOS 6D Mark II camera puts full-frame performance into a compact, fully featured DSLR. Its 26.2 Megapixel CMOS sensor and DIGIC 7 Image Processor help deliver amazing results even at expanded ISO settings, making it great for challenging low-light situations as well as landscape, portrait and event photography. The EOS 6D Mark II also features an impressive optical viewfinder with 45 all cross-type AF points*, fast and accurate Dual Pixel CMOS AF and a Vari-angle Touch Screen LCD for Live View operation which helps create unique angles. With the EOS 6D Mark II's speed to capture action and the versatility to create phenomenal photographs and Full HD 60p videos in numerous environments and lighting situations, the camera offers creative content makers a winning combination of advanced features in a portable package that's as fun as it is powerful. The Canon EOS 6D Mark II features a 26.2 Megapixel full-frame CMOS sensor (approx. 35.9mm x 24.0mm) designed to create high-resolution and detailed images. Capable of sensitivities ranging from ISO 100 to ISO 40000 (expandable to L: 50 and H2: 102400), the EOS 6D Mark II’s sensor captures images of 6240 x 4160 pixels with a pixel size of 5.67 µm square for outstanding detail and a superb signal-to-noise ratio, resulting in great images. Combined with the EOS 6D Mark II’s compact and lightweight design, it helps make high-resolution photography easy and accessible.",
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
      "Do You Love to Travel? This zoom lens kit is the perfect balance of price and quality. It includes the D7500 camera and the compact AF-S DX NIKKOR 18-140mm f/3.5-5.6G ED VR lens. The 7.7x zoom lens covers a wide focal range—from wide-angle to telephoto—making it ideal for capturing anything from breathtaking landscapes to distant dynamic scenes. Thanks to Nikon’s advanced Vibration Reduction (VR) system, your images will always be sharp, even in low-light conditions. Wherever you are, day or night, achieve stunning shots beyond perfection. The D7500 camera delivers exceptionally sharp, high-resolution images with smooth tonal gradations. Enjoy phenomenally accurate subject recognition and outstanding high-ISO performance. Experience stunning 4K/UHD video recording, while the built-in Picture Control system lets you effortlessly apply your unique creative style to both photos and videos. With an ISO range of 100–51,200 (expandable up to ISO 1,640,000 equivalent), the D7500 thrives in darkness. The EXPEED 5 image processor ensures exceptional image quality across the entire ISO range, with significantly reduced noise. Even cropped high-ISO images retain their detail. Using the Hi-5 setting, you can push sensitivity to an equivalent of ISO 1,640,000, allowing you to shoot in near-total darkness. With high-speed continuous shooting, record up to 50 RAW (NEF) images or 100 JPEGs in a single burst. Never miss a crucial moment with the ability to shoot at approximately 8 frames per second in 14-bit RAW format with lossless compression. The continuous AF/AE tracking ensures you don’t have to compromise precision for speed. Unique shots can happen anywhere! The tilting 8cm touchscreen allows you to focus and shoot effortlessly, even from high angles and unconventional perspectives. Use touch controls for AF selection and shutter release in Live View mode. The ergonomic control layout, including the command dial and multi-selector, makes it easy to adjust camera settings on the go. Capture Your World Like Never Before with the Nikon D7500!",
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
      "This Canon EOS 250D DSLR camera is a great choice for anyone looking to capture high-quality photos. With a maximum resolution of 24.1 MP, this camera produces stunning images, and the f/3.5 maximum aperture allows for a lot of light to be captured. The camera is part of the Canon EOS series and comes with an EF-S 18-55mm f/3.5-5.6 III lens. Additionally, this camera is made by Canon and is a great choice for anyone looking to capture high-quality photos. The model is EOS 205D and it is a DSLR camera type. The camera is perfect for those interested in photography and looking for a reliable and high-quality camera.",
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
      "The sensor is 22.3 x 14.9 mm, CMOS. The total number of pixels is 24.1 MP. The number of effective pixels is 24.7 MP. The aspect ratio is 3:2. The low-pass filter is built-in and fixed. Image sensor cleaning includes manual cleaning and dust delete data acquisition. The color filter type is primary RGB. Autofocus through the optical viewfinder operates using a phase-detection system with TTL secondary image-forming and a dedicated AF sensor. In Live View mode on the LCD display, autofocus is contrast-detection. The maximum burst rate is 3 frames per second, supporting up to 150 JPEG images or 11 RAW images. Intelligent scene modes include no-flash mode, creative auto mode, portrait, landscape, macro, sports, night portrait, and video recording. Program modes include shutter priority AE, aperture priority AE, and manual exposure. The product comes with a 24-month official manufacturer's warranty.",
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
      "Distinguished by its updated sensor design, the Sony a7 III is a well-rounded camera suitable for both photo and video applications in a variety of working situations. Refined for improved speed and low-light performance, a new 24.2MP Exmor R BSI CMOS sensor and BIONZ X processor benefit image quality, video capabilities, and AF performance. The a7 III also sports a revised body design, with a new touchscreen LCD, improved EVF, larger battery, and dual memory card slots. Featuring a back-illuminated design, the full-frame 24.2-megapixel Exmor R CMOS sensor works with the BIONZ X image processor to offer high-resolution stills and video while minimizing noise and improving speed. The BSI design also dramatically improves data transmission speed for creating 14-bit, high-resolution stills with a native sensitivity range from ISO 100-51200, which can be further expanded to ISO 50-204800. Also, it enables internal UHD 4K video recording with a wide dynamic range using the full width of the full-frame sensor. The BIONZ X processor also works in conjunction with a high-speed front-end LSI to realize faster processing times along with the ability to capture an impressive 15-stop dynamic range at low sensitivity values. The sensor and processor combination also avails fast continuous shooting at up to 10 fps at full resolution, for up to 177 consecutive frames, and with full-time AF/AE when working with either a mechanical shutter or an electronic shutter. If shooting in live view mode, a continuous shooting rate of up to 8 fps is also possible.",
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
      "EOS R6 gives you more opportunities to capture beautiful moments. Shoot dynamic scenes silently at an incredible speed of up to 20 frames per second, preserving fleeting moments that are barely visible to the human eye. EOS R6 delivers video performance on par with serious cinematic projects. Canon Log and HDR PQ functions help videographers shoot with a greater dynamic range, while high-quality internal recording in 10-bit 4:2:2 format is supported on either of the two SD UHS-II card slots. Imagine being able to shoot handheld with an exposure time of up to four seconds, creating blurred water in landscapes and people in street scenes—without using a tripod. This is the creative freedom that EOS R6 offers. The built-in five-axis image stabilization system provides shake protection with an effect equivalent to up to 8 stops of shutter speed. When RF lenses with optical image stabilization (except RF 600MM F11 IS STM or RF 800MM F11 IS STM) are mounted on the camera, both systems complement each other, offering an incredible advantage of up to 8 stops. The in-body stabilization system and the lens stabilization system also enhance video stabilization thanks to a third system—Movie Digital IS—adding another level of stabilization for professional results. The EOS R6's Dual Pixel CMOS AF II system is powered by the DIGIC X processor, which uses deep learning AI to improve object recognition and tracking. Eyes, faces, and heads are detected with a new level of accuracy. The camera also recognizes cats, dogs, and birds, helping to keep fast-moving subjects in focus—one of the most challenging aspects of wildlife and family photography. We want nothing to stand between you and your creativity, which is why we designed the EOS R6 to be as intuitive and user-friendly as possible.",
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
      "Despite its compact size, the EOS R50 is a fast and powerful camera that excels in continuous shooting, reaching speeds of up to 15 frames per second! One of the R50's key strengths is its autofocus system, which closely resembles those found in higher-tier models like the EOS R6 Mark II and EOS R8. Specifically designed for video bloggers, the R50 features an autofocus mode that prioritizes objects near the camera, while otherwise using face detection mode. The EOS R50 can record 4K video at up to 30 frames per second. In addition to standard horizontal video orientation, the camera also offers a vertical filming mode. This feature is designed to make it more convenient for users to create content for popular video platforms and social media. The camera also includes an external microphone input, allowing you to capture high-quality audio alongside stunning visuals. Thanks to USB connectivity, the EOS R50 can be used as a webcam, delivering exceptional video quality for video calls and live streaming. The user-friendly Canon EOS Webcam Utility software simplifies the setup process to just a few steps—simply connect and stream. With constant connectivity to a smartphone via Bluetooth and Wi-Fi, along with the intuitive Camera Connect app available for iOS and Android, users can instantly transfer photos and videos, easily share content, and control the camera remotely.",
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
      "Whether it's photos or videos, action shots or portraits, the combination of shooting performance and image quality in the EOS R6 Mark II lets you fully unleash your creative potential. Capture fleeting moments at up to 40 frames per second with incredible image quality, even in low light conditions. The AI-powered autofocus system, based on deep learning, locks onto fast-moving subjects, no matter where they are in the frame. Wide-format 4K 60p videos with oversampled quality are simply outstanding. Intuitive features, such as intelligent autofocus and a powerful image stabilizer, make it easy to achieve professional results. Our next-generation AI-based deep learning autofocus provides even greater performance—80% faster than the original EOS R6. The EOS R6 Mark II recognizes and tracks more objects with greater speed, reliability, and accuracy. The built-in image stabilizer in the EOS R6 Mark II works together with the optical image stabilizer in many Canon lenses. The result: up to 8 stops of protection against camera shake during handheld shooting. When the autofocus with subject detection is enabled in the EOS R6 Mark II, the camera will not shift focus to the background if the subject moves out of the frame. This feature, inspired by our Cinema EOS C70 camera, mimics the work of a professional cameraman to achieve cinematic results. For maximum flexibility and image quality, shoot in 6K ProRes Raw with an external recording device like the ATOMOS V+. The footage is easier to process and offers a greater dynamic range. The additional resolution allows you to crop the video while retaining 4K quality.",
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
      "With advanced features such as phase-detection AF and I.S. (Image Stabilization), using the LUMIX S5IIX is a true pleasure. Capture high-quality photos and videos without recording time limitations, enjoying enhanced mobility with this compact full-frame mirrorless camera. The new LUMIX S5IIX design, fully in black, is crafted to help creators focus on the subject. The camera is designed to blend into the shooting environment and eliminate glare, offering even more freedom for creativity. The LUMIX S5IIX supports recording and playback of data on an external SSD. Additionally, the ability to record in ProRes 422 HQ (up to 1.9 Gbps) and All-Intra 4:2:2 10-bit formats directly to the SSD media, combining portability and high capacity, improves backup and post-production efficiency. Choose your preferred streaming method to share the freshest content in real-time! For outdoor use, you can easily set up wireless real-time streaming (RTMP/RTMPS) via the LUMIX Sync app. For indoor use, a high-stability wired real-time streaming option is also available. The most important factor in autofocus is reliability. The new hybrid phase-detection AF system delivers fast and accurate shooting, even in complex scenes with multiple subjects, as well as in backlighting or low-light conditions. The new Active I.S. system enables shooting on the move. By detecting camera shakes and optimizing correction ratios, the Active I.S. system can compensate for significant camera shake (about 200% more than conventional systems). Unlimited recording time in C4K/4K 60p/50p 4:2:2 10-bit format. Thanks to the compact body, like the S5, the newly optimized heat dissipation structure in the LUMIX S5IIX allows for extended recording even during heavy shooting (e.g., high-resolution 4K video, HFR video). The new processing system ensures more realistic colors, higher resolution, and a natural 3D effect. Combined with Dual Native ISO technology, it effectively reduces noise even when shooting with ultra-high sensitivity, excellently reproducing even dark areas. Photos and videos with applied LUTs can be recorded to the internal storage without any special software. Even if you don't have professional editing skills, the camera helps expand your self-expression boundaries just the way you want.",
    price: 2160.95,
    countInStock: 1,
  },
  {
    name: "Fujifilm Instax Mini 99 Black",
    slug: slugify("Fujifilm Instax Mini 99 Black"),
    category: "film camera",
    images: [
      "/film_camera/Instax_Mini_1.png",
      "/film_camera/Instax_Mini_2.png",
      "/film_camera/Instax_Mini_3.png",
      "/film_camera/Instax_Mini_4.png",
      "/film_camera/Instax_Mini_5.png",
    ],
    brand: "Fujifilm",
    description:
      "Be Unique with Light and Color. Unleash your creativity by capturing unique, attention-grabbing instant photos—just as unique as you are—with the INSTAX MINI 99 analog instant camera. This premium instant camera allows you to create photos in a true analog format. First, you have six impressive color effect settings to express your creative freedom, along with a standard setting for when you want everything to appear &quot;as is. &quot; Next, let&apos;s talk about shooting modes. From &quot;Bulb&quot; to &quot;Indoor&quot;, &quot;Double Exposure&quot;, and &quot;Sports&quot; — you have five modes to choose from, easily switchable to suit any scene. Additionally, the INSTAX MINI 99 offers five brightness levels: L+, L, N, D, and D-. To turn on the lens, simply rotate the lens dial. Choose &quot;3.0m to infinity&quot; (Landscape) for long-distance shots, &quot;0.3m to 0.6m&quot; (Macro) for close-ups and selfies, or &quot;0.6m to 3.0m&quot; (Standard) for everything in between. Want to add depth to your images? Use the manual vignette switch to narrow the lens aperture for a striking artistic effect. Want to adjust the tone? Control the flash function to achieve the desired result. Moreover, the camera&apos;s classic design makes the INSTAX MINI 99 visually appealing, while the stunning matte black finish with sleek dials and buttons delivers an incredible tactile feel. Every surface, edge, and corner (along with every function) of this camera has been meticulously designed to perfection. Key Features: premium analog instant camera, six color effects, five brightness levels, multiple flash functions, five shooting modes, tactile matte black finish, self-timer, manual vignette switch, three focus modes (macro, standard, and landscape), two shutter release buttons, shoulder strap included, base Grip tripod mount, prints credit card-sized photos.",
    price: 219.99,
    countInStock: 1,
  },
  {
    name: "Fujifilm INSTAX WIDE 400 Camera EX D",
    slug: slugify("Fujifilm INSTAX WIDE 400 Camera EX D"),
    category: "film camera",
    images: [
      "/film_camera/Instax_Wide_1.png",
      "/film_camera/Instax_Wide_2.png",
      "/film_camera/Instax_Wide_3.png",
      "/film_camera/Instax_Wide_4.png",
      "/film_camera/Instax_Wide_5.png",
    ],
    brand: "Fujifilm",
    description:
      "Discover the world of instant photography with the FUJIFILM Instax Wide 400—an innovative camera that lets you capture and share unforgettable moments instantly. With automatic exposure and flash control, you can take stunning photos every time, whether it's day or night. Thanks to the convenient analog-style self-timer, group photos are effortless. Simply set up the camera, press the shutter, and everyone will be perfectly framed. And if you don’t have a tripod on hand, the included angle adjustment accessories will help you find the optimal perspective every time. For travel, the INSTAX WIDE 400 comes with a comfortable shoulder strap, supporting you on any adventure. Various focus modes — normal, landscape, and close-up — allow you to fully express your creativity and capture diverse perspectives. INSTAX WIDE film (sold separately) delivers vibrant and detailed images in the classic instant format. The camera kit includes everything you need to start right away: angle adjustment accessories, a practical carrying strap, a close-up lens, and four AA batteries. The FUJIFILM Instax Wide 400 is your perfect companion for spontaneous photography and creative shots—just turn it on, press the shutter, and enjoy the moment.",
    price: 329.99,
    countInStock: 1,
  },
  {
    name: "Agfaphoto Photo Camera Analog 35mm Reusable Red",
    slug: slugify("Agfaphoto Photo Camera Analog 35mm Reusable Red"),
    category: "film camera",
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
    category: "film camera",
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
    category: "film camera",
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
      "/compact/DSC-RX10_1.png",
      "/compact/DSC-RX10_2.png",
      "/compact/DSC-RX10_3.png",
      "/compact/DSC-RX10_4.png",
      "/compact/DSC-RX10_5.png",
    ],
    brand: "Sony",
    description:
      "The Sony DSC-RX10 IV is not just a compact camera, but a true tool for professionals, combining ultra-fast autofocus, stunning optics with 25x zoom, and advanced image processing. The 24-600mm F2.4-4 lens offers 25x optical zoom, advanced aspherical AA lenses, and ED glass elements, ZEISS® T* coating, and a fast aperture. The camera is equipped with the Exmor RS® CMOS sensor, providing 315-point phase detection autofocus, a 20.1 MP &quot;stacked&quot; CMOS sensor, and a DRAM chip for slow-motion recording at up to 960 fps. The BIONZ X processor ensures high image quality with minimal noise, while the innovative autofocus system with 315 phase-detection points and real-time Eye AF enables highly accurate shooting. The camera supports continuous shooting at up to 24 fps and 4K / XAVC S video with a bitrate of up to 100 Mbps, as well as creative modes including super slow motion. The camera's ergonomics include an intuitive interface, a tilting LCD screen, and high resistance to dust and moisture, while advanced features such as the SteadyShot™ optical stabilizer and &quot;Zoom Assist&quot; make it even more convenient to use. The Sony DSC-RX10 IV is a versatile camera that meets the needs of both professionals and enthusiasts, delivering excellent photo and video quality in any condition.",
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
      "/compact/DSC-RX100_1.png",
      "/compact/DSC-RX100_2.png",
      "/compact/DSC-RX100_3.png",
      "/compact/DSC-RX100_4.png",
      "/compact/DSC-RX100_5.png",
    ],
    brand: "Sony",
    description:
      "The 24-200mm zoom lens combines high image quality and compactness, offering maximum resolution at any focal length. This camera with a telephoto lens opens up new creative possibilities. The built-in autofocus system with 357 phase detection points and 425 contrast detection points covers 68% of the frame and operates in just 0.02 seconds, making it the fastest in its class. The 1.0-type sensor with a resolution of 20.1 MP and back-illuminated technology supports an ISO range of 100-12,800, reducing noise and improving image texture. Thanks to the new sensor and image processing algorithms, colors and textures appear incredibly realistic, with natural skin tones and detailed nature shots. The camera supports 4K video recording without pixel binning, ensuring sharp footage, and the advanced autofocus provides stable focus even on moving subjects. Real-time tracking and eye autofocus for video recording are also available. The Hybrid Log-Gamma (HLG) function allows you to view HDR videos on Sony TVs connected via USB. For user comfort, there is an XGA OLED Tru-Finder viewfinder with a high resolution of 2.35 million dots, as well as a tilting LCD screen for convenient selfie shooting and unusual angles. The camera supports touch shooting and focusing, and the real-time tracking function can be activated with a simple tap on the screen.",
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
      "/compact/Lumix_FZ1000_1.png",
      "/compact/Lumix_FZ1000_2.png",
      "/compact/Lumix_FZ1000_3.png",
      "/compact/Lumix_FZ1000_4.png",
      "/compact/Lumix_FZ1000_5.png",
    ],
    brand: "Panasonic",
    description:
      "The 60x zoom camera (20–1200mm) takes photography to the next level, allowing you to capture dynamic scenes at any distance. The 20mm wide-angle lens and powerful zoom provide detailed shots, from epic panoramas to tiny details that are hard to see with the naked eye. The OLED Live View viewfinder with a resolution of 2.36 million dots ensures clear visibility even in bright lighting, while the ergonomic grip makes the camera comfortable for any adventure. 4K video recording delivers four times the detail of Full HD, and the &quot;4K Photo&quot; function allows you to extract perfect frames and save them as 8-megapixel images. Post Focus technology lets you adjust the focal point after shooting, while Focus Stacking unlocks even more creative possibilities. The POWER O.I.S. optical stabilizer eliminates camera shake even at maximum zoom (1200mm), while the active mode enables stable video recording during movement. Macro shooting with a 1cm focusing distance helps capture intricate details of nature, food, or insects. The intuitive 3.0-inch touchscreen with a 1.84 million-dot resolution allows for quick focus with a single tap, and the Zoom Compose Assist function helps easily restore the frame while shooting with high zoom. The battery charges via USB Type-C, adding extra convenience for everyday use.",
    price: 449.99,
    countInStock: 1,
  },
  {
    name: "Nikon Coolpix P1000 Photo Camera Bridge 16MP Black",
    slug: slugify("Nikon Coolpix P1000 Photo Camera Bridge 16MP Black"),
    category: "compact",
    images: [
      "/compact/Coolpix_P1000_1.png",
      "/compact/Coolpix_P1000_2.png",
      "/compact/Coolpix_P1000_3.png",
      "/compact/Coolpix_P1000_4.png",
      "/compact/Coolpix_P1000_5.png",
    ],
    brand: "Nikon",
    description:
      "The reliable COOLPIX P950 camera with an 83x optical zoom (equivalent to 2000mm) is the perfect choice for capturing birds in the sky, aerial maneuvers, or dynamic scenes at airshows or safaris. With a focal length range from 24mm to 2000mm, this camera allows you to shoot wide-angle scenes and capture wildlife in great detail from a distance. The 166x digital zoom with Dynamic Fine Zoom extends the focal length range up to 4000mm, while the CMOS sensor and f/2.8 NIKKOR lens minimize distortion even when shooting at high zoom. The camera is capable of recording 4K or Full HD videos with stereo sound and a frame rate of up to 60p, and the HDMI output allows you to display video on an external monitor. In &quot;Manual Video&quot; mode, you can adjust exposure settings during filming. For time-lapse effects, you can record cloud movements or star trails with the integrated time-lapse mode. The Dual Detect Optical Vibration Reduction system ensures clear shots even when shooting handheld in low-light conditions. The focus tracking on fast-moving subjects and convenient zoom control system make it easy to capture moving targets. For even better shooting, accessories from Nikon can be connected via the hot shoe, and the built-in DF-M1 sight helps you track moving objects with ease. The camera features special modes for shooting birds and the moon, optimizing focus and delivering high-quality images. For convenience in sharing photos and tracking trips, the SnapBridge app provides constant connection to your smartphone or tablet.",
    price: 979.99,
    countInStock: 1,
  },
  {
    name: "Olympus TG-6 Photo Camera Compact Subacvatic 12MP 4K Black",
    slug: slugify("Olympus TG-6 Photo Camera Compact Subacvatic 12MP 4K Black"),
    category: "compact",
    images: [
      "/compact/Olympus_TG6_1.png",
      "/compact/Olympus_TG6_2.png",
      "/compact/Olympus_TG6_3.png",
      "/compact/Olympus_TG6_4.png",
      "/compact/Olympus_TG6_5.png",
    ],
    brand: "Olympus",
    description:
      "The Olympus Tough TG-6 camera is a powerful tool for shooting in extreme conditions. It features water resistance up to 15m, shock protection from falls up to 2.1m, freeze resistance down to -10°C, and a dual-glass lens that prevents fogging. The sensor system records data about location, temperature, and depth during photo or video shooting. The F2.0 lens and CMOS sensor with backlighting technology ensure excellent image quality, while the new digital teleconverter allows optical zoom to be increased up to 8 times. The camera also features anti-glare coating and the TruePic VIII graphics processor, which reduces noise and enhances detail in low-contrast conditions. For RAW shooting, users can edit images using Olympus Workspace or other software. The unique macro system allows focusing at just 1 cm, with various modes like Focus Stacking for perfect close-up shots. The camera also supports five new underwater shooting modes, including wide-angle and macro shots, and can use additional accessories for enhanced results at great depths. The waterproof box PT-059 allows shooting up to 45m underwater. For even better performance at greater depths, there is the new Fisheye converter FCON-T02.",
    price: 549.99,
    countInStock: 1,
  },
];

const data: Data = {
  users,
  products,
};

export default data;
