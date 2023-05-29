from django_seed import Seed
from .models import Workstation, Reservas

def generate_data_workstation():
    seeder = Seed.seeder()
    seeder.add_entity(Workstation, 10)  # Gere 10 instâncias do modelo MyModel
    inserted_pks = seeder.execute()
    print(f"Dados gerados: {inserted_pks}")

generate_data_workstation()

def generate_data_reservas():
    seeder = Seed.seeder()
    seeder.add_entity(Reservas, 6)  # Gere 10 instâncias do modelo MyModel
    inserted_pks = seeder.execute()
    print(f"Dados gerados: {inserted_pks}")

generate_data_reservas()