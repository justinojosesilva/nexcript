import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiTags,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { LoginDto, LoginResponse } from './dto/login.dto';
import { RegisterDto, RegisterResponse } from './dto/register.dto';
import { LoginUseCase } from './use-cases/login.use-case';
import { RegisterUseCase } from './use-cases/register.use-case';
import { Public } from './decorators/public.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly registerUseCase: RegisterUseCase,
    private readonly loginUseCase: LoginUseCase,
  ) {}

  @Public()
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Register a new user',
    description:
      'Creates a new user account and organization. Returns JWT access token on success.',
  })
  @ApiBody({ type: RegisterDto })
  @ApiResponse({
    status: 201,
    description: 'User successfully registered',
    type: RegisterResponse,
  })
  @ApiBadRequestResponse({
    description: 'Invalid email format or password too short',
  })
  register(@Body() dto: RegisterDto): Promise<RegisterResponse> {
    return this.registerUseCase.execute(dto);
  }

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Login user',
    description:
      'Authenticates user with email and password. Returns JWT access token.',
  })
  @ApiBody({ type: LoginDto })
  @ApiResponse({
    status: 200,
    description: 'User successfully logged in',
    type: LoginResponse,
  })
  @ApiBadRequestResponse({
    description: 'Invalid email or password',
  })
  login(@Body() dto: LoginDto): Promise<LoginResponse> {
    return this.loginUseCase.execute(dto);
  }
}
