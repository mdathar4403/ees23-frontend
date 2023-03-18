import eesimg1 from './images/ees/20221104_205934.jpg';
import eesimg2 from './images/ees/IMG_6673-1.JPG';
import eesimg3 from './images/ees/IMG_6683.JPG';
import eesimg4 from './images/ees/IMG_6730-1.JPG';
import eesimg5 from './images/ees/IMG_6785.JPG';
import eesimg6 from './images/ees/IMG_6800.JPG';
import eesimg7 from './images/ees/IMG_6815.JPG';
import eesimg8 from './images/ees/IMG_6840.JPG';
import eesimg9 from './images/ees/IMG_6876.JPG';
import eesimg10 from './images/ees/IMG_6936-1.JPG';
import eesimg11 from './images/ees/IMG_6942.JPG';

import masimg1 from './images/mashal/20230108_182701-1.jpg';
import masimg2 from './images/mashal/20230115_122004.jpg';
import masimg3 from './images/mashal/IMG_5078.jpg';
import masimg4 from './images/mashal/IMG_6526.jpg';
import masimg5 from './images/mashal/IMG_6806.JPG';
import masimg6 from './images/mashal/IMG_7120.JPG';

import udyimg1 from './images/udyam/20230108_144423.jpg';
import udyimg2 from './images/udyam/IMG_6677.JPG';
import udyimg3 from './images/udyam/IMG_6685.JPG';
import udyimg4 from './images/udyam/IMG_6693.JPG';
import udyimg5 from './images/udyam/IMG_6697.JPG';
import udyimg6 from './images/udyam/IMG_6709.JPG';
import udyimg7 from './images/udyam/IMG_6736.JPG';
import udyimg8 from './images/udyam/IMG_20230107_152843.jpg';
import udyimg9 from './images/udyam/IMG_20230109_195810.jpg';
import udyimg10 from './images/udyam/IMG_20230116_192427.jpg';

import udgimg1 from './images/udgam/IMG_1129.jpeg';
import udgimg2 from './images/udgam/udgam1.jpeg';
import udgimg3 from './images/udgam/udgam2.jpeg';
import udgimg4 from './images/udgam/udgam3.jpeg';

const Data = (reqArr) => {
  const ees = [eesimg1, eesimg2, eesimg3, eesimg4, eesimg5, eesimg6, eesimg7, eesimg8, eesimg9, eesimg10, eesimg11];
  const mashal = [masimg1, masimg2, masimg3, masimg4, masimg5, masimg6];
  const udyam = [udyimg1, udyimg2, udyimg3, udyimg4, udyimg5, udyimg6, udyimg7, udyimg8, udyimg9, udyimg10];
  const udgam = [udgimg1, udgimg2, udgimg3, udgimg4];
  if (reqArr === 'ees') {
    return ees;
  } else if (reqArr === 'mashal') {
    return mashal;
  } else if (reqArr === 'udyam') {
    return udyam;
  } else if (reqArr === 'udgam') {
    return udgam;
  }
};

export default Data;
