import {Project} from './project.model';

describe('Model: Project', () => {

  it('should create a project', () => {
    const project = new Project(
                      '1', 'Bridge Building',
                      'Ken Rimple', 'Started');
    expect(project).toBeDefined();
    expect(project.id).toBe('1');
    expect(project.name).toBe('Bridge Building');
    expect(project.owner).toBe('Ken Rimple');
  });

});
