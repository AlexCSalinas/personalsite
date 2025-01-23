import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Music } from 'lucide-react';

const CLIENT_ID = 'e9c1787ac5c5435cbac481a869f4cd56';
const CLIENT_SECRET = '27af3040950d4b86854b645cd0ea1e3e';

const ARTIST_IDS = [
    '0YC192cP3KPCRWx8zr8MfZ?si=arcBaYJ-SbWFoUf_lADORQ',  // zimmer
    '6XyY86QOPPrYVGvF9ch6wz?si=SLqDNi5DRXO0wKWK33ifmQ',
    '0Y4inQK6OespitzD6ijMwb?si=Kt1mo5C4S1eS4CsrSd5QIA',
    '2h93pZq0e7k5yf4dywlkpM',
    '4Z8W4fKeB5YxbusRsdQVPb?si=tommUvc_QDKmZZNp01ZM-w',
    '6HvZYsbFfjnjFrWF950C9d?si=LxFLUdW9RkyLwR2sbTmuBg',
    '4tZwfgrHOc3mvqYlEYSvVi?si=TG0lQ9NeQEmGWiHf7WQHxA',
    '1G9G7WwrXka3Z1r7aIDjI7?si=VfmbTLo5ReSmAbpGCHhpOg',
    '4bbjivSh1oG4NOc7uYHfw5?si=xmbWFKJERsaL00R39vbFhg',
    '4wyNyxs74Ux8UIDopNjIai?si=Hesz8fIgT2m75Az82g26VQ',
    '6P9aim24wqJZ3SdoCWYwGT?si=g0adWnvlQnuc2aXDWHnhDA',
    '51Blml2LZPmy7TTiAg47vQ?si=aPNhaNpjRbS13w4M-pAA4w',
    '3MZsBdqDrRTJihTHQrO6Dq?si=AR8xieGzTDG1erAw3q8heg',
    '0epOFNiUfyON9EYx7Tpr6V?si=kHPuLiZYQPeyeokECaHN4Q',
    '6Ghvu1VvMGScGpOUJBAHNH?si=2IAoa5i1R4mDnFgSCdtUaQ',
    // Add more artist IDs   '',
];

const usedIndices = new Set();

const getRandomArtist = () => {
    // If we've shown all artists, reset the used indices
    if (usedIndices.size === ARTIST_IDS.length) {
        usedIndices.clear();
    }

    // Generate random indices until we find one we haven't used recently
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * ARTIST_IDS.length);
    } while (usedIndices.has(randomIndex));

    // Add this index to our used set
    usedIndices.add(randomIndex);
    return randomIndex;
};

const ArtistContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
  width: 200px;
`;

const ContentContainer = styled.a`
  display: block;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 8px 12px;
  font-family: 'Roboto', sans-serif;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  cursor: pointer;

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

const ArtistName = styled.p`
  font-size: 0.7rem;
  margin: 3px 0 0 0;
  opacity: 0.8;
`;

const ExpandedContent = styled.div`
  max-height: ${props => props.isExpanded ? '200px' : '0'};
  opacity: ${props => props.isExpanded ? '1' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  margin-top: ${props => props.isExpanded ? '8px' : '0'};
`;

const ArtistImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  margin-bottom: 8px;
  border-radius: 2px;
  opacity: 0.9;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const Tag = styled.span`
  display: inline-block;
  font-size: 0.6rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 2px 6px;
  border-radius: 2px;
  margin: 2px;
`;

const FeaturedArtist = () => {
    const [artistData, setArtistData] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    //const [currentIndex, setCurrentIndex] = useState(0);
    const [accessToken, setAccessToken] = useState(null);

    // Get access token once when component mounts
    useEffect(() => {
        const getAccessToken = async () => {
            try {
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
                setAccessToken(data.access_token);
            } catch (error) {
                console.error('Error getting access token:', error);
            }
        };

        getAccessToken();
    }, []);

    // Fetch artist data function
    const fetchArtist = async (artistId) => {
        if (!accessToken) return;
        
        try {
            const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            setArtistData(data);
        } catch (error) {
            console.error('Error fetching artist:', error);
        }
    };

    // Rotate artists every 5 seconds, but only if not being hovered over
    useEffect(() => {
        let interval;
        
        if (accessToken) {
            interval = setInterval(() => {
                const nextIndex = getRandomArtist();
                fetchArtist(ARTIST_IDS[nextIndex]);
            }, 3000);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isHovered, accessToken]);

    // Initial artist fetch using random selection
    useEffect(() => {
        if (accessToken) {
            const initialIndex = getRandomArtist();
            fetchArtist(ARTIST_IDS[initialIndex]);
        }
    }, [accessToken]);

    if (!artistData) return null;

    return (
        <ArtistContainer
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <ContentContainer 
                href={artistData.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Title>
                    <Music size={14} />favorite Artists
                </Title>
                <ArtistName>{artistData.name}</ArtistName>
                <ExpandedContent isExpanded={isHovered}>
                    {artistData.images?.[0] && (
                        <ArtistImage 
                            src={artistData.images[0].url} 
                            alt={artistData.name}
                        />
                    )}
                    <p style={{ fontSize: '0.7rem', margin: '4px 0' }}>
                        {artistData.followers.total.toLocaleString()} followers
                    </p>
                    <div style={{ marginTop: '4px' }}>
                        {artistData.genres.slice(0, 2).map(genre => (
                            <Tag key={genre}>{genre}</Tag>
                        ))}
                    </div>
                </ExpandedContent>
            </ContentContainer>
        </ArtistContainer>
    );
};

export default FeaturedArtist;