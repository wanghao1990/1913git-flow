@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\escodegen\node_modules\esprima\bin\esparse.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\escodegen\node_modules\esprima\bin\esparse.js" %*
)