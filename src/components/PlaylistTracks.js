import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Music, Play } from 'lucide-react';

const CLIENT_ID = 'e9c1787ac5c5435cbac481a869f4cd56';
const CLIENT_SECRET = '27af3040950d4b86854b645cd0ea1e3e';
const PLAYLIST_ID = '3KabObyHEW4zla04BVaHPH';

const PlaylistContainer = styled.div`
  position: fixed;
  bottom: 68px;
  left: 20px;
  z-index: 1000;
  width: 200px;
`;

const ContentContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 8px 12px;
  font-family: 'Roboto', sans-serif;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

const Title = styled.h3`
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Subtitle = styled.p`
  font-size: 0.7rem;
  margin: 3px 0 0 0;
  opacity: 0.8;
`;

const ExpandedContent = styled.div`
  max-height: ${props => props.isExpanded ? '300px' : '0'};
  opacity: ${props => props.isExpanded ? '1' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  margin-top: ${props => props.isExpanded ? '8px' : '0'};
`;

const TrackContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px;
  text-decoration: none;
  color: white;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  margin: 4px 0;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  
  &:hover .overlay {
    opacity: 1;
  }
`;

const AlbumImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const PlayOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;
  border-radius: 4px;
`;

const TrackInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const TrackName = styled.p`
  font-size: 0.7rem;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ArtistName = styled.p`
  font-size: 0.6rem;
  margin: 2px 0 0 0;
  opacity: 0.8;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PlaylistTracks = () => {
    const [tracks, setTracks] = useState([]);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const getAccessToken = async () => {
            const response = await fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    grant_type: 'client_credentials',
                    client_id: CLIENT_ID,
                    client_secret: CLIENT_SECRET,
                }),
            });
            const data = await response.json();
            return data.access_token;
        };

        const fetchPlaylistTracks = async () => {
            try {
                const token = await getAccessToken();
                const response = await fetch(
                    `https://api.spotify.com/v1/playlists/${PLAYLIST_ID}/tracks?limit=5`,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    }
                );
                const data = await response.json();
                setTracks(data.items || []);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchPlaylistTracks();
    }, []);

    if (tracks.length === 0) return null;

    return (
        <PlaylistContainer
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <ContentContainer>
                <Title>
                    <Music size={14} /> A Playlist of mine
                </Title>
                <Subtitle>Mac Makes Me Cheese</Subtitle>
                
                <ExpandedContent isExpanded={isHovered}>
                    {tracks.map((item) => (
                        <TrackContainer
                            key={item.track.id}
                            href={item.track.external_urls.spotify}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ImageContainer>
                                <AlbumImage 
                                    src={item.track.album.images[0].url}
                                    alt={item.track.name}
                                />
                                <PlayOverlay className="overlay">
                                    <Play size={16} />
                                </PlayOverlay>
                            </ImageContainer>
                            <TrackInfo>
                                <TrackName>{item.track.name}</TrackName>
                                <ArtistName>
                                    {item.track.artists.map(artist => artist.name).join(', ')}
                                </ArtistName>
                            </TrackInfo>
                        </TrackContainer>
                    ))}
                </ExpandedContent>
            </ContentContainer>
        </PlaylistContainer>
    );
};

export default PlaylistTracks;