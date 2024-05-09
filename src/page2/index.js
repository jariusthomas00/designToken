'use client'
import * as React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <Div>
      <Div2>
        <Div3>
          <Div4>Sign Up</Div4>
          <Img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a684ffa373dc1d11c723a92b9dddb38e0561f803bbd5968ba9a793f7adf06be4?apiKey=f36e1caddaf849eaaeea7d4be59829bd&"
          />
        </Div3>
        <Div5 />
        <Div6>
          <Div7>Name</Div7>
          <Div8>Joe Schmo</Div8>
          <Div9>Email</Div9>
          <Div10>yourmail@mail.com</Div10>
          <Div11>How did you find us?</Div11>
          <Div12>
            <Div13>Select an option</Div13>
            <Img2
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d196f2b50dbdbb3983c111807d8976fbc3e6f0e1e62f2d44abc168cfe4df05b7?apiKey=f36e1caddaf849eaaeea7d4be59829bd&"
            />
          </Div12>
          <Div14>
            <Div15>Subscribe to Alerts</Div15>
            <Div16>
              <Div17>
                <Div18 />
              </Div17>
            </Div16>
          </Div14>
        </Div6>
        <Div19 />
        <Div20>
          <Div21>Cancel</Div21>
          <Div22>Submit</Div22>
        </Div20>
      </Div2>
    </Div>
  );
}

const Div = styled.div`
  align-items: center;
  background-color: var(--Grays-Gray-98, #fafafa);
  display: flex;
  justify-content: center;
  padding: 80px 60px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Div2 = styled.div`
  border-radius: 12px;
  box-shadow: 0px 2px 8px 0px rgba(31, 29, 33, 0.1);
  background-color: var(--Status-Success-Dark, #008024);
  display: flex;
  margin-top: 142px;
  width: 640px;
  max-width: 100%;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div3 = styled.div`
  display: flex;
  gap: 0px;
  font-size: 24px;
  color: var(--Grays-Black, #040406);
  font-weight: 700;
  padding: 32px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;

const Div4 = styled.div`
  font-family: Inter, sans-serif;
  flex: 1;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Img = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 26px;
  margin: auto 0;
`;

const Div5 = styled.div`
  background-color: var(--Grays-Gray-82, #cacad8);
  height: 1px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div6 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const Div7 = styled.div`
  color: var(--Grays-Gray-18, #272735);
  font: 500 13px/150% Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div8 = styled.div`
  align-items: start;
  border-radius: 4px;
  box-shadow: 0px 2px 8px 0px rgba(31, 29, 33, 0.2);
  border-color: rgba(59, 0, 228, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Status-Success-Dark, #008024);
  margin-top: 8px;
  color: var(--Grays-Gray-18, #272735);
  justify-content: center;
  padding: 12px 16px;
  font: 400 16px/150% Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
  }
`;

const Div9 = styled.div`
  color: var(--Grays-Gray-18, #272735);
  margin-top: 24px;
  font: 500 13px/150% Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div10 = styled.div`
  align-items: start;
  border-radius: 4px;
  border-color: rgba(107, 107, 148, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Status-Success-Dark, #008024);
  margin-top: 8px;
  color: var(--Grays-Gray-50, #6b6b94);
  white-space: nowrap;
  justify-content: center;
  padding: 12px 16px;
  font: 400 16px/150% Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
    white-space: initial;
  }
`;

const Div11 = styled.div`
  color: var(--Grays-Gray-18, #272735);
  margin-top: 24px;
  font: 500 13px/150% Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div12 = styled.div`
  border-radius: 4px;
  border-color: rgba(107, 107, 148, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Status-Success-Dark, #008024);
  display: flex;
  margin-top: 8px;
  gap: 8px;
  font-size: 16px;
  color: var(--Grays-Gray-50, #6b6b94);
  font-weight: 400;
  line-height: 150%;
  padding: 12px 16px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Div13 = styled.div`
  font-family: Inter, sans-serif;
  flex: 1;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 16px;
  margin: auto 0;
`;

const Div14 = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 16px;
  justify-content: space-between;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div15 = styled.div`
  color: var(--Grays-Gray-18, #272735);
  margin: auto 0;
  font: 500 13px/150% Inter, sans-serif;
`;

const Div16 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4px 0;
`;

const Div17 = styled.div`
  border-radius: 9999px;
  background-color: var(--Status-Success-Default, #00e440);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 0 16px;
`;

const Div18 = styled.div`
  border-radius: 50%;
  box-shadow: 0px 2px 8px 0px rgba(31, 29, 33, 0.1);
  border-color: rgba(202, 202, 216, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Status-Success-Dark, #008024);
  z-index: 10;
  width: 24px;
  height: 24px;
  margin: -4px 0;
`;

const Div19 = styled.div`
  background-color: var(--Grays-Gray-82, #cacad8);
  height: 1px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div20 = styled.div`
  justify-content: end;
  background-color: var(--Status-Success-Dark, #008024);
  display: flex;
  gap: 16px;
  font-size: 18px;
  font-weight: 600;
  white-space: nowrap;
  text-align: center;
  line-height: 150%;
  padding: 24px 32px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    white-space: initial;
    padding: 0 20px;
  }
`;

const Div21 = styled.div`
  color: var(--Grays-Gray-34, #494965);
  font-family: Inter, sans-serif;
  margin: auto 0;
`;

const Div22 = styled.div`
  font-family: Inter, sans-serif;
  justify-content: center;
  border-radius: 8px;
  background-color: var(--Accent-Default, #3b00e4);
  color: var(--Status-Success-Dark, #008024);
  padding: 11px 16px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;


