const dataEmployees = [
  {
    id: 0,
    avatar:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0d0513c7-f064-40a8-9394-d4f4b4e91943/d9alw1k-32bb2362-5875-4f0c-8aa5-f5a9dea9d63c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBkMDUxM2M3LWYwNjQtNDBhOC05Mzk0LWQ0ZjRiNGU5MTk0M1wvZDlhbHcxay0zMmJiMjM2Mi01ODc1LTRmMGMtOGFhNS1mNWE5ZGVhOWQ2M2MuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.S8MBh2Ev9oUlqtXf9vmivuPHDQp7E5MK1UTEQy_E6s8',
    lastName: 'Chirita',
    firstName: 'Alberto-Marian',
    job: 'Frontend Developer',
    email: 'alberto.chirita@totalsoft.ro',
    phone: '0727123456',
    identifierNumber: 1951115123456,
    birthDate: '15-11-1995',
    hireDate: '22-08-2022',
    vacationDays: 21
  },
  {
    id: 0,
    avatar:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0d0513c7-f064-40a8-9394-d4f4b4e91943/d9alw1k-32bb2362-5875-4f0c-8aa5-f5a9dea9d63c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBkMDUxM2M3LWYwNjQtNDBhOC05Mzk0LWQ0ZjRiNGU5MTk0M1wvZDlhbHcxay0zMmJiMjM2Mi01ODc1LTRmMGMtOGFhNS1mNWE5ZGVhOWQ2M2MuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.S8MBh2Ev9oUlqtXf9vmivuPHDQp7E5MK1UTEQy_E6s8',
    lastName: 'Chirita',
    firstName: 'Alberto-Marian',
    job: 'Frontend Developer',
    email: 'alberto.chirita@totalsoft.ro',
    phone: '0727123456',
    identifierNumber: 1951115123456,
    birthDate: '15-11-1995',
    hireDate: '22-08-2022',
    vacationDays: 21
  },
  {
    id: 0,
    avatar:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0d0513c7-f064-40a8-9394-d4f4b4e91943/d9alw1k-32bb2362-5875-4f0c-8aa5-f5a9dea9d63c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBkMDUxM2M3LWYwNjQtNDBhOC05Mzk0LWQ0ZjRiNGU5MTk0M1wvZDlhbHcxay0zMmJiMjM2Mi01ODc1LTRmMGMtOGFhNS1mNWE5ZGVhOWQ2M2MuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.S8MBh2Ev9oUlqtXf9vmivuPHDQp7E5MK1UTEQy_E6s8',
    lastName: 'Chirita',
    firstName: 'Alberto-Marian',
    job: 'Frontend Developer',
    email: 'alberto.chirita@totalsoft.ro',
    phone: '0727123456',
    identifierNumber: 1951115123456,
    birthDate: '15-11-1995',
    hireDate: '22-08-2022',
    vacationDays: 21
  },
  {
    id: 0,
    avatar:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0d0513c7-f064-40a8-9394-d4f4b4e91943/d9alw1k-32bb2362-5875-4f0c-8aa5-f5a9dea9d63c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBkMDUxM2M3LWYwNjQtNDBhOC05Mzk0LWQ0ZjRiNGU5MTk0M1wvZDlhbHcxay0zMmJiMjM2Mi01ODc1LTRmMGMtOGFhNS1mNWE5ZGVhOWQ2M2MuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.S8MBh2Ev9oUlqtXf9vmivuPHDQp7E5MK1UTEQy_E6s8',
    lastName: 'Chirita',
    firstName: 'Alberto-Marian',
    job: 'Frontend Developer',
    email: 'alberto.chirita@totalsoft.ro',
    phone: '0727123456',
    identifierNumber: 1951115123456,
    birthDate: '15-11-1995',
    hireDate: '22-08-2022',
    vacationDays: 21
  },
  {
    id: 0,
    avatar:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0d0513c7-f064-40a8-9394-d4f4b4e91943/d9alw1k-32bb2362-5875-4f0c-8aa5-f5a9dea9d63c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBkMDUxM2M3LWYwNjQtNDBhOC05Mzk0LWQ0ZjRiNGU5MTk0M1wvZDlhbHcxay0zMmJiMjM2Mi01ODc1LTRmMGMtOGFhNS1mNWE5ZGVhOWQ2M2MuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.S8MBh2Ev9oUlqtXf9vmivuPHDQp7E5MK1UTEQy_E6s8',
    lastName: 'Chirita',
    firstName: 'Alberto-Marian',
    job: 'Frontend Developer',
    email: 'alberto.chirita@totalsoft.ro',
    phone: '0727123456',
    identifierNumber: 1951115123456,
    birthDate: '15-11-1995',
    hireDate: '22-08-2022',
    vacationDays: 21
  },
  {
    id: 0,
    avatar:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0d0513c7-f064-40a8-9394-d4f4b4e91943/d9alw1k-32bb2362-5875-4f0c-8aa5-f5a9dea9d63c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBkMDUxM2M3LWYwNjQtNDBhOC05Mzk0LWQ0ZjRiNGU5MTk0M1wvZDlhbHcxay0zMmJiMjM2Mi01ODc1LTRmMGMtOGFhNS1mNWE5ZGVhOWQ2M2MuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.S8MBh2Ev9oUlqtXf9vmivuPHDQp7E5MK1UTEQy_E6s8',
    lastName: 'Chirita',
    firstName: 'Alberto-Marian',
    job: 'Frontend Developer',
    email: 'alberto.chirita@totalsoft.ro',
    phone: '0727123456',
    identifierNumber: 1951115123456,
    birthDate: '15-11-1995',
    hireDate: '22-08-2022',
    vacationDays: 21
  },
  {
    id: 0,
    avatar:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0d0513c7-f064-40a8-9394-d4f4b4e91943/d9alw1k-32bb2362-5875-4f0c-8aa5-f5a9dea9d63c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBkMDUxM2M3LWYwNjQtNDBhOC05Mzk0LWQ0ZjRiNGU5MTk0M1wvZDlhbHcxay0zMmJiMjM2Mi01ODc1LTRmMGMtOGFhNS1mNWE5ZGVhOWQ2M2MuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.S8MBh2Ev9oUlqtXf9vmivuPHDQp7E5MK1UTEQy_E6s8',
    lastName: 'Chirita',
    firstName: 'Alberto-Marian',
    job: 'Frontend Developer',
    email: 'alberto.chirita@totalsoft.ro',
    phone: '0727123456',
    identifierNumber: 1951115123456,
    birthDate: '15-11-1995',
    hireDate: '22-08-2022',
    vacationDays: 21
  },
  {
    id: 0,
    avatar:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0d0513c7-f064-40a8-9394-d4f4b4e91943/d9alw1k-32bb2362-5875-4f0c-8aa5-f5a9dea9d63c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBkMDUxM2M3LWYwNjQtNDBhOC05Mzk0LWQ0ZjRiNGU5MTk0M1wvZDlhbHcxay0zMmJiMjM2Mi01ODc1LTRmMGMtOGFhNS1mNWE5ZGVhOWQ2M2MuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.S8MBh2Ev9oUlqtXf9vmivuPHDQp7E5MK1UTEQy_E6s8',
    lastName: 'Chirita',
    firstName: 'Alberto-Marian',
    job: 'Frontend Developer',
    email: 'alberto.chirita@totalsoft.ro',
    phone: '0727123456',
    identifierNumber: 1951115123456,
    birthDate: '15-11-1995',
    hireDate: '22-08-2022',
    vacationDays: 21
  },
  {
    id: 0,
    avatar:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0d0513c7-f064-40a8-9394-d4f4b4e91943/d9alw1k-32bb2362-5875-4f0c-8aa5-f5a9dea9d63c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBkMDUxM2M3LWYwNjQtNDBhOC05Mzk0LWQ0ZjRiNGU5MTk0M1wvZDlhbHcxay0zMmJiMjM2Mi01ODc1LTRmMGMtOGFhNS1mNWE5ZGVhOWQ2M2MuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.S8MBh2Ev9oUlqtXf9vmivuPHDQp7E5MK1UTEQy_E6s8',
    lastName: 'Chirita',
    firstName: 'Alberto-Marian',
    job: 'Frontend Developer',
    email: 'alberto.chirita@totalsoft.ro',
    phone: '0727123456',
    identifierNumber: 1951115123456,
    birthDate: '15-11-1995',
    hireDate: '22-08-2022',
    vacationDays: 21
  }
]

export default dataEmployees
