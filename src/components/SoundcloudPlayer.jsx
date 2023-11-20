import React from 'react';
import ReactPlayer from 'react-player';

const SoundCloudPlayer = () => {
    return (
        <div>
            <ReactPlayer
                url="https://soundcloud.com/dj_musikero/oss?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                width="100%"
                height="166px"
                config={{
                soundcloud: {
                    options: {
                    color: '#242424',
                    auto_play: false,
                    hide_related: false,
                    show_comments: true,
                    show_user: true,
                    show_reposts: false,
                    show_teaser: true,
                    },
                },
              }}
             />
        </div>
    );
};

export default SoundCloudPlayer;