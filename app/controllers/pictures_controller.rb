class PicturesController < ApplicationController
    def new
        @picture = Picture.new
        @annotations = @picture.annotations
    end
    
    def edit 
        @picture = Picture.find(params[:format])
        
    end

    def update
        
        # Picture.create(:picture "#{params[:picture][:picture]}")
        # @picture = Picture.update(params.require(:picture).permit([:picture][2]))
        # @picture.save
        redirect_to root_path
    end
    def preview
        # byebug
        @picture = Picture.find(params[:id])
        respond_to do |format|
            format.js { render partial: 'pictures/preview' }
        end
    end
    def next_image
        # byebug
        @picture = Picture.find(params[:id])
        
        unless @picture.next 
            @picture = Picture.first 
        else
            @picture = @picture.next
        end
        
        respond_to do |format|
            format.js { render partial: 'pictures/next' }
        end
    end

    def prev_image
        # byebug
        @picture = Picture.find(params[:id])
        
        unless @picture.prev 
            @picture = Picture.last
        else
            @picture = @picture.prev
        end
        
        respond_to do |format|
            format.js { render partial: 'pictures/next' }
        end
    end

    def create
        
        @picture = Picture.new(picture_params)
        respond_to do |format|
            if @picture.save
                keys = []
                values = []
                params.each{ |key,value|
                    # @annotations = Annotation.new
                    keys.push(value) if key.include? "key"
                    values.push(value) if key.include? "value"
                    
                    # @annotations.picture_id = @picture.id
                    # @annotations.save if @annotations.key && @annotations.value

                }
                index = 0
                while index < keys.length 
                    @annotations = Annotation.new
                    @annotations.key = keys[index]
                    @annotations.value = values[index] 
                    @annotations.picture_id = @picture.id
                    @annotations.save
                    index = index + 1
                end
            flash[:notice] = "Image was successfully added"
            format.html { redirect_to root_path }
            else
                flash.now[:alert] = "Please upload a valid image format"
                format.html { render :new }
            end
        end

    end

    def show 
        # @pictures = Picture.all
        @pictures  = Picture.paginate(:page => params[:page], :per_page=>6)
    end

    def destroy
        @picture = Picture.find(params[:format])
        @picture.destroy
        flash[:notice] = "Your image is successfully deleted"
        redirect_to @picture
    end

    private
    def picture_params
        params.require(:picture).permit(:picture)
    end
end