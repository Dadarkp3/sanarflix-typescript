import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  position: relative;
  .slick-slide {
    background: #e2dcdc;
    transform: scale(1);
    transition: all 0.6s ease;
    box-shadow: inset 0px 0px 0px 5px rgba(255, 255, 255, 1);
    opacity: 0.6;

    @media (max-width: 768px) {
      height: 338px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .slick-current {
    background: #fff !important;
    z-index: 1050;
    box-shadow: 1px 1px 13px 0px rgba(0, 0, 0, 0.5) !important;
    opacity: 1 !important;
    transition: all 0.6s ease;
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
