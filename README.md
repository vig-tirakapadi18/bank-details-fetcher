# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

1. Created input element to search bank using IFSC Code

2. Created a buttom to search bank whenever a click event occurs

3. Fetched bank details using IFSC Code using API endpoint `https://ifsc.razorpay.com/${ifscCode}`

4. Passed the fetched bank details to Bankdetails component using props

5. Displayed the bank details such as Bank name, branch, Address, State, Contact Number which were received as a props on the UI

6. Styled the UI
