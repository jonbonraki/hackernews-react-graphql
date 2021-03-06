import React from 'react';

import Blank from '../layouts/Blank';


const Login = () => (
  <Blank>
    <b>Login</b>
    <br />
    <br />
    <form method="post" action="login" style={{ marginBottom: '1em' }}>
      <input type="hidden" name="goto" value="news" />
      <table style={{ border: '0px' }} >
        <tbody>
          <tr>
            <td>username:</td>
            <td>
              <input type="text" name="acct" size="20" autoCorrect="off" spellCheck="false" autoCapitalize="off" autoFocus="true" />
            </td>
          </tr>
          <tr>
            <td>password:</td>
            <td>
              <input type="password" name="pw" size="20" />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <input type="submit" value="login" />
    </form>
    <a href="forgot">Forgot your password?</a>
    <br />
    <br />
    <b>Create Account</b>
    <br />
    <br />
    <form method="post" action="login" style={{ marginBottom: '1em' }}>
      <input type="hidden" name="goto" value="news" />
      <input type="hidden" name="creating" value="t" />
      <table style={{ border: '0px' }} >
        <tbody>
          <tr>
            <td>username:</td>
            <td>
              <input type="text" name="acct" size="20" autoCorrect="off" spellCheck="false" autoCapitalize="off" />
            </td>
          </tr>
          <tr>
            <td>password:</td>
            <td>
              <input type="password" name="pw" size="20" />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <input type="submit" value="create account" />
    </form>
  </Blank>
);

export default Login;
