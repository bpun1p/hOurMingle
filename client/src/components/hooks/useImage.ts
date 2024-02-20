import { Asset } from 'expo-asset';
import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';

type ImageResource = string | ReturnType<typeof require>

const useImage = (images: ImageResource[]) => {
  const [loadedImages, setLoadedImages] = useState(false);

  function cacheImages(images: ImageResource[]) {
    return images.map(image => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  }

  useEffect(() => {
    async function loadImagesAndData() {
      try {
        const imageAssets = cacheImages(images);

        await Promise.all(imageAssets);
      } catch (e) {
      console.warn('Error loading images:', e)
      } finally {
      setLoadedImages(true);
      }
    }
    loadImagesAndData();
  }, [images]);

  return loadedImages;
}

export default useImage;