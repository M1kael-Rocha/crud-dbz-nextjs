'use client';

import { useState } from 'react';
import imgLess from '@/public/imgLess.jpg';

export default function ImagePreview(characterImg) {
  const [imageUrl, setImageUrl] = useState(characterImg || imgLess);
}
