import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
		scroll-behavior: smooth;
  }

	body, input, textarea, button {
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		font-size: 1rem;
		-webkit-font-smoothing: antialiased;
	}

	body {
		background: ${(props) => props.theme.background};
	}

  :focus {
    outline: 0;
  }

  button {
    cursor: pointer;
  }

	 a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  input {
    outline: none;
  }

	// Remove o icone (seta) do input tipo númerico //
	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
	}
	
	/* Firefox */
	input[type=number] {
	-moz-appearance: textfield;
	}
	
`
