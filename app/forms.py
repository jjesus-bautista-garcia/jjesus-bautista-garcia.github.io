from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, SubmitField
from wtforms.validators import DataRequired

class LoginForm(FlaskForm):
    username = StringField(required="username", validators=[DataRequired()])
    password = PasswordField(required="password", validators=[DataRequired()])
    rememberMe = BooleanField(required="rememberMe")
    submit = SubmitField("Sign In")