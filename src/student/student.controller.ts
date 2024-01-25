import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { UploadedFiles, UseInterceptors } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express/multer';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createStudentDto: CreateStudentDto  ){
    return this.studentService.create(createStudentDto);
  }

  //creating Uploads Routes 

  @Post('/uploads')
  @UseInterceptors(FileInterceptor('image', {dest:"./uploads",}))
  async uploadFile(@UploadedFiles() file: Express.Multer.File){
    if(!file){
      return 'No file uploaded.';
    }
    return 'File uploaded successfully.';
  }

  @Get()
    findAll(){
    return this.studentService.findAll();
  }

  
  @Get('/:id')
  getStudentById(@Param('id', ParseIntPipe) id: number){
    return this.studentService.findOne(+id);
  }

  @Delete('/:id')
  removeStudent(@Param('id') id: string){
    
    this.studentService.remove(+id);
  }

  @Patch('/:id/status')
  updateStudent(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto){
    return this.studentService.update(+id, updateStudentDto);
  }

  //Getting student Grades 
  
  
}
