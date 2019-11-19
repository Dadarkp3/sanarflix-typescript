import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  position: relative;
  .slick-slide {
    transform: scale(1);
    transition: all 1s ease;
    background: #e3e3e3;
    box-shadow: inset 0px 0px 0px 5px rgba(255, 255, 255, 1);
    opacity: 0.5;

    @media (max-width: 768px) {
      height: 338px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .slick-current {
    z-index: 4;
    background: #fff !important;
    opacity: 1 !important;
    box-shadow: 1px 1px 13px 0px rgba(0, 0, 0, 0.5) !important;
    transition: all 1s ease;
  }
`;

export const Previous = styled.div`
  position: absolute;
  top: 50%;
  left: 38%;
  transform: translateY(-50%);
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Next = styled.div`
  position: absolute;
  top: 50%;
  right: 38%;
  transform: translateY(-50%);
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;
