import styled from 'styled-components'

export const Main = styled.main`
   width: 100%;
   display: flex;
   flex-direction: column;
   .container {
      max-width: 1192px;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      width: 100%;
   }
   .session-1 {
      width: 100%;
      background: radial-gradient(50% 50% at 50% 50%, #5975ff 0%, #3029d9 100%);
      header {
         display: flex;
         justify-content: space-between;
         height: 142px;
         align-items: center;
         .logo {
            width: 188px;
            height: 52px;
         }
         nav {
            ul {
               display: flex;
               gap: 36px;
               list-style: none;
               li {
                  cursor: pointer;
                  position: relative;
                  color: #fff;
                  transition: all 0.3s ease-in-out;
                  &:first-child::after {
                     content: '';
                     width: 22px;
                     height: 2px;
                     position: absolute;
                     background-color: #fff;
                     top: 100%;
                     left: 50%;
                     translate: -50%;
                     margin-top: 6px;
                  }
                  &:not(:first-child) {
                     opacity: 0.6;
                  }
                  &:not(:first-child):hover {
                     opacity: 1;
                     ::after {
                        content: '';
                        width: 22px;
                        height: 2px;
                        position: absolute;
                        background-color: #fff;
                        top: 100%;
                        left: 50%;
                        translate: -50%;
                        margin-top: 6px;
                     }
                  }
               }
            }
         }
         .btn-contact-us {
            height: 46px;
            width: 116px;
            cursor: pointer;
            background-color: transparent;
            color: #ffffff;
            border: 1px solid #ffffff;
            border-radius: 4px;
            font-weight: 600;
            font-size: 14px;
            line-height: 21px;
            transition: all 0.3s ease-in-out;
            &:hover {
               opacity: 0.7;
            }
         }
      }
      section {
         display: flex;
         justify-content: space-between;
         article {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 30px;
            width: 646px;
            h1 {
               width: 471px;
               height: 256px;
               font-weight: 700;
               font-size: 94px;
               line-height: 128px;
               color: #ffffff;
            }
            p {
               width: 475px;
               height: 94px;
               font-weight: 500;
               font-size: 14px;
               line-height: 28px;
               color: #ffffff;
            }
            button {
               width: 166px;
               height: 39px;
               background: #111849;
               border-radius: 4px;
               color: #ffffff;
               cursor: pointer;
               transition: all ease-in-out 0.3s;
               &:hover {
                  opacity: 0.7;
               }
            }
         }
         img {
            width: 796px;
            height: 626px;
            margin-right: -124px;
         }
      }
   }
   .session-2 {
      display: flex;
      .counts {
         padding: 114px 0 130px 0;
         display: flex;
         .description {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: inherit;
            h3 {
               color: #3029d9;
               width: 105px;
               height: 68px;
               font-weight: 600;
               font-size: 24px;
               line-height: 68px;
            }
            h1 {
               width: 614px;
               height: 204px;
               font-weight: 700;
               font-size: 48px;
               line-height: 68px;
               color: #0b1131;
               margin-bottom: 28px;
            }
            .line {
               display: flex;
               flex-direction: column;
               gap: 24px;
               p {
                  width: 473px;
                  height: 84px;
                  font-weight: 500;
                  font-size: 14px;
                  line-height: 28px;
                  color: #a0abb8;
               }
            }
            button {
               width: 140px;
               height: 39px;
               background: #3029d9;
               border-radius: 4px;
               color: #ffffff;
               font-weight: 600;
               font-size: 14px;
               line-height: 21px;
               transition: all ease-in-out 0.3s;
               cursor: pointer;
               outline: none;
               border: none;
               margin-top: 38px;
               &:hover {
                  opacity: 0.7;
               }
            }
         }
         .numbers {
            display: flex;
            align-items: center;
            gap: 28px;
            .left {
               margin-top: 230px;
            }
            .right {
               margin-top: 120px;
            }
            .left div,
            .right div {
               min-width: 278px;
               height: 172px;
               background: #3029d933;
               display: flex;
               flex-direction: column;
               justify-content: center;
               .number,
               .text {
                  color: #3029d9;
                  margin-left: 50px;
               }
               .number {
                  width: 45px;
                  height: 68px;
                  font-weight: 700;
                  font-size: 44px;
                  line-height: 68px;
               }
               .text {
                  width: 160px;
                  height: 28px;
                  font-weight: 500;
                  font-size: 16px;
                  line-height: 28px;
               }
            }
            .left div {
               border-radius: 80px 0px 80px 80px;
               &:not(:first-child) {
                  margin-top: 24px;
               }
            }
            .right div {
               border-radius: 80px 80px 80px 0;
               &:not(:first-child) {
                  margin-top: 24px;
               }
            }
         }
      }
   }
   .session-3 {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 222px;
      .title {
         display: flex;
         flex-direction: column;
         align-items: center;
         margin-bottom: 104px;
         h3 {
            width: 153px;
            height: 68px;
            font-weight: 600;
            font-size: 24px;
            line-height: 68px;
            color: #3029d9;
         }
         h1 {
            width: 359px;
            height: 68px;
            font-weight: 700;
            font-size: 48px;
            line-height: 68px;
            text-align: center;
            color: #0b1131;
         }
      }
      .cards {
         display: flex;
         gap: 34px;
         .card {
            overflow: hidden;
            width: 374px;
            height: 444px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            box-shadow: 0px 10px 100px 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            position: relative;
            img {
               width: 88px;
               height: 88px;
               margin-top: 82px;
               margin-bottom: 46px;
            }
            .order {
               width: 293px;
               height: 27px;
               font-weight: 500;
               font-size: 14px;
               line-height: 28px;
               text-align: center;
            }
            h2 {
               height: 68px;
               font-weight: 700;
               font-size: 24px;
               line-height: 68px;
               margin-bottom: 0;
            }
            p {
               width: 293px;
               height: 85px;
               font-weight: 500;
               font-size: 14px;
               line-height: 28px;
               text-align: center;
               opacity: 0.5;
               margin-bottom: 68px;
            }
            &::before {
               content: '';
               position: absolute;
               width: 375px;
               height: 414px;
               right: 150px;
               top: 188px;
               border-radius: 300px 0px 300px 300px;
               transform: rotate(90deg);
            }
            &::after {
               content: '';
               position: absolute;
               width: 375px;
               height: 414px;
               left: 56px;
               top: 284px;
               border-radius: 300px 0px 300px 300px;
               transform: rotate(-90deg);
            }
         }
         .card-1 {
            background: #ffffff;
            .order {
               color: #0b1131;
               opacity: 0.5;
            }
            h2 {
               color: #0b1131;
            }
            p {
               color: #0b1131;
               opacity: 0.5;
            }
            &::before,
            &::after {
               background: linear-gradient(12.95deg, rgba(48, 41, 215, 0.1) 22.55%, rgba(49, 42, 217, 0) 96.85%);
            }
         }
         .card-2 {
            background: #3029d9;
            .order {
               color: #ffffff;
               opacity: 0.5;
            }
            h2 {
               color: #ffffff;
            }
            p {
               color: #ffffff;
               opacity: 0.5;
            }
            &::before,
            &::after {
               background: linear-gradient(12.95deg, rgba(255, 255, 255, 0.1) 22.55%, rgba(255, 255, 255, 0) 96.85%);
            }
         }
         .card-3 {
            .order {
               color: #ffffff;
               opacity: 0.5;
            }
            background: #111849;
            h2 {
               color: #ffffff;
            }
            p {
               color: #ffffff;
               opacity: 0.5;
            }

            &::before,
            &::after {
               background: linear-gradient(12.95deg, rgba(255, 255, 255, 0.1) 22.55%, rgba(255, 255, 255, 0) 96.85%);
            }
         }
      }
   }
   .session-4 {
   }
`
