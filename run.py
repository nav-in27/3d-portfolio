import subprocess
import sys
import os

def run_project():
    try:
        # Get the absolute path to the directory where this script resides
        script_dir = os.path.dirname(os.path.abspath(__file__))
        
        # Change the current working directory to the script's directory
        os.chdir(script_dir)
        
        print("====================================")
        print("    Starting 3D Web Portfolio       ")
        print("    Working Directory:", script_dir)
        print("====================================")
        
        # Check if node_modules exists, if not install dependencies
        if not os.path.exists("node_modules"):
            print("node_modules not found. Installing dependencies...")
            subprocess.check_call(["npm", "install"], shell=True)
            print("Dependencies installed successfully.")
        
        # Run the development server
        print("Starting development server...")
        subprocess.check_call(["npm", "run", "dev"], shell=True)
        
    except subprocess.CalledProcessError as e:
        print(f"An error occurred while running a command: {e}", file=sys.stderr)
        sys.exit(1)
    except KeyboardInterrupt:
        print("\nDevelopment server stopped.")
        sys.exit(0)
    except Exception as e:
        print(f"An unexpected error occurred: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    run_project()
