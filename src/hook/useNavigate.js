import { useHistory } from 'react';
 
function useNavigate() {
  const history = useHistory();

  function navigateTo(path) {
    history.push(path);
  }

  function navigateBack() {
    history.goBack();
  }

  return {
    navigateTo,
    navigateBack,
  };
}
export default useNavigate;
