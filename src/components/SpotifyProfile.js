import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { User } from 'lucide-react';

const CLIENT_ID = 'e9c1787ac5c5435cbac481a869f4cd56';
const CLIENT_SECRET = '27af3040950d4b86854b645cd0ea1e3e';
const USER_ID = 'oxnczuk29w2ldkh6p7ykxy7lj'; // Your Spotify user ID

const ProfileContainer = styled.div`
  position: fixed;
  bottom: 115px;
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

const ProfileName = styled.p`
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

const ProfileImage = styled.img`
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

const ProfileStats = styled.p`
  font-size: 0.7rem;
  margin: 4px 0;
`;

const SpotifyProfile = () => {
    const [profileData, setProfileData] = useState(null);
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

        const fetchProfile = async () => {
            try {
                const token = await getAccessToken();
                const response = await fetch(
                    `https://api.spotify.com/v1/users/${USER_ID}`,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    }
                );
                const data = await response.json();
                setProfileData(data);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile();
    }, []);

    if (!profileData) return null;

    return (
        <ProfileContainer
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <ContentContainer 
                href={profileData.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Title>
                    <User size={14} /> My Spotify
                </Title>
                <ProfileName>{profileData.display_name}</ProfileName>
                
                <ExpandedContent isExpanded={isHovered}>
                    {profileData.images?.[0] && (
                        <ProfileImage 
                            src={profileData.images[0].url} 
                            alt={profileData.display_name}
                        />
                    )}
                    <ProfileStats>
                        {profileData.followers.total.toLocaleString()} followers
                    </ProfileStats>
                </ExpandedContent>
            </ContentContainer>
        </ProfileContainer>
    );
};

export default SpotifyProfile;