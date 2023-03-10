

export interface ErrorMessageProps {
	errorMessage: string | undefined;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({errorMessage}) => (
	<>
		<p className='form__error-message'>{errorMessage}  </p>
	</>);

export default ErrorMessage;
