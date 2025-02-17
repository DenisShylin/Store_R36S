// Импорты изображений
import colorVariant1 from "../assets/img/modal/Untitled_1_1x.jpg";
import colorVariant2 from "../assets/img/modal/Untitled_2_1x.jpg";
import colorVariant3 from "../assets/img/modal/Untitled_3_1x.jpg";
import colorVariant4 from "../assets/img/modal/Untitled_4_1x.jpg";

// Функция для получения URL видео
const getVideoUrl = (filename) => {
  // В продакшене и разработке используем путь от корня public
  return `/video/${filename}`;
};

// Объект с медиа-ресурсами
const modalMedia = {
  // Изображения
  images: {
    colors: [colorVariant1, colorVariant2, colorVariant3, colorVariant4],
  },
  // Видео файлы
  videos: {
    battery: getVideoUrl("video_batrey.MP4"),
    option2: getVideoUrl("Video_option2.MP4"),
    mode6: getVideoUrl("video_moda_6.MP4"),
    options1: getVideoUrl("video_optuons_1.MP4"),
    rs36: getVideoUrl("VIDEO_RS36.mp4"),
    gif: getVideoUrl("video.gif"),
    rs: getVideoUrl("videoRS.mp4"),
  },
  // Остальные изображения (если есть)
  displayControls: getVideoUrl("Display_Controls.webp"),
};

// Для отладки
if (import.meta.env.DEV) {
  console.log("Video URLs:", modalMedia.videos);
}

export default modalMedia;
