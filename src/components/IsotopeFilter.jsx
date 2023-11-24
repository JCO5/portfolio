import React, { useState, useEffect, useRef } from 'react';
import Isotope from 'isotope-layout';

const IsotopeFilter = () => {
  const isotopeRef = useRef(null);
  const [restData, setRestData] = useState([]);
  const [loadStatus, setLoadStatus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://joaquindev.ca/zlzkxclx/wp-json/wp/v2/pages/32?_embed&acf_format=standard');
        if (response.ok) {
          const data = await response.json();
          setRestData(data);
          setLoadStatus(true);
        } else {
          setLoadStatus(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoadStatus(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (loadStatus && restData.acf && restData.acf.stack) {
      // Destroy the previous Isotope instance if it exists
      if (isotopeRef.current) {
        isotopeRef.current.destroy();
      }

      // Initialize Isotope with the updated data
      const iso = new Isotope('.skills-container', {
        itemSelector: '.skill-item',
        layoutMode: 'fitRows',
      });

      // Update the ref to the new Isotope instance
      isotopeRef.current = iso;
    }
  }, [loadStatus, restData]);

  const filterSkills = (category) => {
    if (isotopeRef.current) {
      isotopeRef.current.arrange({ filter: `.${category}` });
    }
  };

  if (!loadStatus) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      <div className='flex justify-evenly pb-2 text'>
        <button className="underline text-[1.25rem]" onClick={() => filterSkills('Development')}>Development</button>
        <button  className="underline text-[1.25rem]" onClick={() => filterSkills('Design')}>Design</button>
      </div>

      <div className="skills-container">
        {restData.acf && restData.acf.stack ? (
          restData.acf.stack.map((skill, index) => (
            <div key={index} className={`skill-item ${skill.category}`}>
              <p>{skill.skill}</p>
            </div>
          ))
        ) : (
          <div>No data or incorrect structure</div>
        )}
      </div>
    </div>
  );
};

export default IsotopeFilter;
