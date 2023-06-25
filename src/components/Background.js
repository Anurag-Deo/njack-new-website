import { useCallback, useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig from '@/data/particles.json';

const Background = (props) => {
  const options = useMemo(() => {
    return particlesConfig;
  }, []);

  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);

  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default Background;
