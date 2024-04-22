import Gallery from '@/src/entities/gallery/ui/Gallery';
import cls from './Home.module.css';

export const Home = () => (
  <div>
    <div className="container">
      <div className={cls.homePageWrapper}>
        <Gallery />
      </div>
    </div>
  </div>
);
